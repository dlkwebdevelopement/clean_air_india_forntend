import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderStyleWrapper from "./Header.style";
import Data from "../../assets/data/header/headerHomeMenu";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./mobileMenu/MobileMenu";

// logo images
import LogoCorporateImg from "../../assets/images/logo/Logos.svg";
import MenuImg from "../../assets/images/icons/menu.svg";

const HeaderCorporate = (props) => {
  // handle mobile menu
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMobileMenu = () => {
    const bodySection = document.body;

    if (isMobileMenu) {
      setIsAnimating(true);
      bodySection.classList.remove("nav-expanded");

      setTimeout(() => {
        setIsMobileMenu(false);
        setIsAnimating(false);
      }, 400);
    } else {
      setIsMobileMenu(true);
      bodySection.classList.add("nav-expanded");
    }
  };

  // handle sticky header
  const HeaderSectionRef = useRef(null);
  const lastScroll = useRef(0);
  const isSticky = useRef(false);

  const handleScroll = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    
    window.requestAnimationFrame(() => {
      const header = HeaderSectionRef.current;
      if (!header) return;

      const diffScroll = currentScroll - lastScroll.current;

      if (diffScroll > 0 || currentScroll === 0) {
        if (isSticky.current) {
          header.classList.remove("sticky");
          document.body.classList.remove("nav-expanded");
          setIsMobileMenu(false);
          isSticky.current = false;
        }
      } else {
        if (!isSticky.current) {
          header.classList.add("sticky");
          isSticky.current = true;
        }
      }
      lastScroll.current = currentScroll;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderStyleWrapper
        ref={HeaderSectionRef}
        className={`header-section corporate ${
          isMobileMenu ? "mobile-menu-opened" : ""
        }`}
        variant="corporate"
        {...props}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <div className="container header-navbar-container">
                  {/* header logo area start */}
                  <NavLink className="navbar-brand header-logo" to={"/"}>
                    <img height="75" width="136" src={LogoCorporateImg}
                      alt="logo"
                      className="logo-light"
                    />
                    <img height="75" width="136" src={LogoCorporateImg}
                      alt="logo"
                      className="logo-dark"
                    />
                  </NavLink>
                  {/* header logo area end */}

                  {/* menu toggler */}
                  <div className="menu-toggler">
                    <button
                      className="btn"
                      type="button"
                      onClick={handleMobileMenu}
                      aria-label="Open menu"
                      aria-expanded={isMobileMenu}
                    >
                      <img height="16" width="20" src={MenuImg} alt="menu" />
                    </button>
                  </div>

                  <div className="collapse navbar-collapse header-navbar-content">
                    {/* main menu */}
                    <ul className="navbar-nav main-menu">
                      {Data?.map((menuItem) => (
                        <li
                          key={menuItem.url}
                          className={
                            menuItem.hasMegaMenu
                              ? "nav-item home-nav"
                              : "nav-item"
                          }
                        >
                          <NavLink
                            className={` ${
                              menuItem.hasMegaMenu
                                ? "nav-link megaTablinks"
                                : "nav-link"
                            }  ${
                              menuItem.subMenus?.length > 0 ? "has-submenu" : ""
                            }`}
                            to={menuItem.url}
                          >
                            {menuItem.title}
                          </NavLink>

                          {/* megamenu */}
                          {menuItem?.hasMegaMenu && <MegaMenu />}

                          {menuItem.subMenus?.length > 0 && (
                            <div className={`submenu-box ${menuItem.subMenus.length > 5 ? "submenu-landscape-box" : ""}`}>
                              <ul className={`submenu ${menuItem.subMenus.length > 5 ? "submenu-landscape" : ""}`}>
                                {menuItem.subMenus?.map((subMenuItem) => {
                                  let hasSubMenuChild = false;
                                  if (subMenuItem.subMenuChilds?.length > 0) {
                                    hasSubMenuChild = true;
                                  }
                                  return (
                                    <li
                                      key={subMenuItem.url}
                                      className={
                                        hasSubMenuChild
                                          ? "submenu-has-submenu"
                                          : ""
                                      }
                                    >
                                      <NavLink
                                        className="dropdown-item"
                                        to={subMenuItem.url}
                                      >
                                        {subMenuItem.title}
                                      </NavLink>

                                      {subMenuItem.subMenuChilds?.length >
                                        0 && (
                                        <div className="submenu-box2">
                                          <ul className="submenu submenu-submenu">
                                            {subMenuItem.subMenuChilds?.map(
                                              (subMenuChild) => (
                                                <li key={subMenuChild.url}>
                                                  <NavLink
                                                    to={subMenuChild.url}
                                                  >
                                                    {subMenuChild.title}
                                                  </NavLink>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* header extra - empty for corporate, or language if needed */}
                    <ul className="header-extra">
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </HeaderStyleWrapper>

      {/* mobile menu */}
      <MobileMenu isOpen={isMobileMenu || isAnimating} onClose={handleMobileMenu} />
    </>
  );
};

export default HeaderCorporate;
