import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import SidebarNavigation from '../../shared/ui/SidebarNavigation';
import Header from '../../shared/ui/Header';
import MetricCard from './components/MetricCard';
import ActivityFeed from './components/ActivityFeed';
import QuickActions from './components/QuickActions';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [metrics, setMetrics] = useState({
    total: 0,
    published: 0,
    drafts: 0
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setIsAdmin(storedUser?.role === 'admin');
    }, []);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Fetch blog counts
      const blogsResponse = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (blogsResponse.ok) {
        const blogsData = await blogsResponse.json();
        const totalBlogs = blogsData.pagination?.total || 0;
        
        // Fetch published blogs count
        const publishedResponse = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs?status=published`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        const publishedData = await publishedResponse.ok ? await publishedResponse.json() : { pagination: { total: 0 } };
        const publishedCount = publishedData.pagination?.total || 0;
        
        // Fetch draft blogs count
        const draftsResponse = await fetch(`${import.meta.env.VITE_API_URL || 'https://api.cleanairindia.com/api'}/blogs?status=draft`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        const draftsData = await draftsResponse.ok ? await draftsResponse.json() : { pagination: { total: 0 } };
        const draftsCount = draftsData.pagination?.total || 0;

        setMetrics({
          total: totalBlogs,
          published: publishedCount,
          drafts: draftsCount
        });

        // Get recent activities from the latest blogs
        const recentBlogs = blogsData.blogs?.slice(0, 5) || [];
        const activities = recentBlogs.map(blog => ({
          id: blog._id,
          type: blog.status === 'published' ? 'blog_published' : 'blog_created',
          title: blog.status === 'published' ? 'Blog post published' : 'New blog post created',
          description: blog.title,
          user: blog.author,
          timestamp: new Date(blog.status === 'published' ? blog.publishedAt : blog.createdAt),
          details: `Blog post "${blog.title}" was ${blog.status === 'published' ? 'published' : 'created'}.`,
          category: blog.category?.name || 'Uncategorized',
          status: blog.status.charAt(0).toUpperCase() + blog.status.slice(1)
        }));

        setRecentActivities(activities);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMetricClick = (type) => {
    switch (type) {
      case 'total': 
        navigate('/blog-list');
        break;
      case 'published': 
        navigate('/blog-list?status=published');
        break;
      case 'drafts': 
        navigate('/blog-list?status=draft');
        break;
      default:
        break;
    }
  };

  const metricsData = [
    {
      title: 'Total Blog Posts',
      value: loading ? '...' : metrics.total.toString(),
      change: '+0%',
      changeType: 'neutral',
      icon: 'FileText',
      onClick: () => handleMetricClick('total')
    },
    {
      title: 'Published Posts',
      value: loading ? '...' : metrics.published.toString(),
      change: '+0%',
      changeType: 'neutral',
      icon: 'Globe',
      onClick: () => handleMetricClick('published')
    },
    {
      title: 'Draft Posts',
      value: loading ? '...' : metrics.drafts.toString(),
      change: '+0',
      changeType: 'neutral',
      icon: 'FileEdit',
      onClick: () => handleMetricClick('drafts')
    }
  ];

  return (
    <div className="dashboard-container">
      <SidebarNavigation 
        collapsed={sidebarCollapsed} 
        onToggle={handleSidebarToggle} 
      />
      <Header 
        onSidebarToggle={handleSidebarToggle}
        sidebarCollapsed={sidebarCollapsed}
      />
      <main 
        className="dashboard-main"
        style={{ 
          marginLeft: sidebarCollapsed ? '64px' : '240px'
        }}
      >
        <div className="dashboard-content">
          {/* Welcome Section */}
          <div className="dashboard-welcome">
  <h1 className="dashboard-welcome-title">
    Welcome back, {isAdmin ? "Admin" : "Publisher"}!
  </h1>

  <p className="dashboard-welcome-subtitle">
    Here's what's happening with your blog today -{" "}
    {new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </p>
</div>


          {/* Metrics Cards - Now 3 cards */}
          <div className="metrics-grid-three">
            {metricsData.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                change={metric.change}
                changeType={metric.changeType}
                icon={metric.icon}
                onClick={metric.onClick}
              />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="main-content-grid">
            {/* Left Column - Activity Feed */}
            <div className="main-content-left">
              <ActivityFeed activities={recentActivities} loading={loading} />
            </div>

            {/* Right Column - Quick Actions */}
            {/* <div className="main-content-right">
              <QuickActions />
            </div> */}
          </div>

          {/* Footer */}
          <div className="dashboard-footer">
            <div className="dashboard-footer-content">
              <div className="dashboard-footer-copyright">
                © {new Date().getFullYear()} Blog Admin Dashboard. All rights reserved.
              </div>
              {/* <div className="dashboard-footer-links">
                <button className="dashboard-footer-link">
                  Help & Support
                </button>
                <button className="dashboard-footer-link">
                  Documentation
                </button>
                <button className="dashboard-footer-link">
                  API Reference
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
