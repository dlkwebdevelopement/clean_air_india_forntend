import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderStyleWrapper from "./Header.style";
import Data from "../../assets/data/header/headerHomeMenu";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./mobileMenu/MobileMenu";

// logo images
import LogoImg1 from "../../assets/images/logo/logo.svg";
import LogoImg2 from "../../assets/images/logo/Logos.svg";
import MenuImg from "../../assets/images/icons/menu.svg";

const HeaderMain = (props) => {
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
  let lastScroll = 0;

  const handleScroll = () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    
    window.requestAnimationFrame(() => {
      const bodySection = document.body;
      let diffScroll = currentScroll - lastScroll;

      if (diffScroll > 0 || currentScroll == 0) {
        HeaderSectionRef.current?.classList.remove("sticky");
        bodySection.classList.remove("nav-expanded");
        setIsMobileMenu(false);
      } else {
        HeaderSectionRef.current?.classList.add("sticky");
      }
      lastScroll = currentScroll;
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
        className={`header-section main-header ${
          isMobileMenu ? "mobile-menu-opened" : ""
        }`}
        variant="main-header"
        {...props}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <div className="container header-navbar-container">
                  {/* header logo area start */}
                  <NavLink className="navbar-brand header-logo" to={"/"}>
                    <img height="40" width="136" src={LogoImg1}
                      alt="logo"
                      className="logo-light"
                    />
                    <img height="75" width="136" src={LogoImg2}
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
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasStaco"
                      aria-controls="offcanvasStaco"
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

                    {/* header extra */}
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
      <MobileMenu />
    </>
  );
};

export default HeaderMain;
