import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../blog-list/components/PageHeader';
import Pagination from '../blog-list/components/Pagination';
import ConfirmationModal from '../blog-list/components/ConfirmationModal';
import AdminTable from './AdminTable';
import Header from '../../components copy/ui/Header';
import SidebarNavigation from '../../components copy/ui/SidebarNavigation';

const AdminList = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const [admins, setAdmins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, adminId: null, isBulk: false, adminIds: [] });

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch(`http://192.168.1.66:5000/api/users`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/admin');
        }
        throw new Error('Failed to fetch admins');
      }

      const data = await response.json();
      setAdmins(data);
      setTotalItems(data.length);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.error('Error fetching admins:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleDelete = async (adminId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://192.168.1.66:5000/api/users/${adminId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete user');
      }

      // Refresh the admin list
      await fetchAdmins();
      setDeleteModal({ isOpen: false, adminId: null, isBulk: false, adminIds: [] });
      
    } catch (error) {
      console.error('Error deleting user:', error);
      alert(error.message || 'Error deleting user. Please try again.');
    }
  };

  const handleBulkDelete = async (adminIds) => {
    try {
      const token = localStorage.getItem('token');
      
      // Delete users one by one
      for (const adminId of adminIds) {
        const response = await fetch(`http://192.168.1.66:5000/api/users/${adminId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Failed to delete user with ID: ${adminId}`);
        }
      }

      // Refresh the admin list
      await fetchAdmins();
      setDeleteModal({ isOpen: false, adminId: null, isBulk: false, adminIds: [] });
      
    } catch (error) {
      console.error('Error in bulk delete:', error);
      alert(error.message || 'Error deleting users. Please try again.');
    }
  };

  const confirmDelete = () => {
    if (deleteModal.isBulk) {
      handleBulkDelete(deleteModal.adminIds);
    } else {
      handleDelete(deleteModal.adminId);
    }
  };

  const formattedAdmins = admins.map((admin, index) => ({
    id: admin._id,
    serialNumber: index + 1,
    name: `${admin.firstName} ${admin.lastName}`,
    createdDate: new Date(admin.createdAt).toLocaleDateString(),
    published: admin.publishedCount,
    drafts: admin.draftCount,
    role: admin.role
  }));

  return (
    <div className="app-container">
      <SidebarNavigation collapsed={sidebarCollapsed} onToggle={handleSidebarToggle} />
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header onSidebarToggle={handleSidebarToggle} sidebarCollapsed={sidebarCollapsed} />
        <div className="admin-list-content">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading admins...</p>
            </div>
          ) : (
            <>
              <AdminTable
                admins={formattedAdmins}
                onDelete={(adminId) => setDeleteModal({ isOpen: true, adminId, isBulk: false, adminIds: [] })}
                // onBulkDelete={(adminIds) => setDeleteModal({ isOpen: true, adminId: null, isBulk: true, adminIds })}
              />

              {totalPages > 1 && (
                <div className="pagination-container">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                  />
                </div>
              )}
            </>
          )}

          <ConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={() => setDeleteModal({ isOpen: false, adminId: null, isBulk: false, adminIds: [] })}
            onConfirm={confirmDelete}
            title={deleteModal.isBulk ? "Delete Multiple Users" : "Delete User"}
            message={deleteModal.isBulk ? `Are you sure you want to delete ${deleteModal.adminIds.length} selected users?` : "Are you sure you want to delete this user?"}
            confirmText="Delete"
            confirmVariant="destructive"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminList;