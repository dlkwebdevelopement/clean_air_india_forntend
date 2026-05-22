import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Data from "../../../assets/data/header/mobileMenu";

// logo
import LogoImg from "../../../assets/images/logo/Logos.svg";

/* ── Overlay backdrop ─────────────────────────────────────────────── */
const Overlay = styled.div`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 9998;
  cursor: pointer;
`;

/* ── Slide-in drawer ──────────────────────────────────────────────── */
const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: min(320px, 88vw);
  background: #fff;
  z-index: 9999;
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 4px 0 24px rgba(0,0,0,0.18);

  /* ── header ─ */
  .drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid #eee;
    flex-shrink: 0;

    img { height: 52px; width: auto; }

    .close-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: background 0.2s;

      &:hover { background: #f0f0f0; }

      svg { width: 20px; height: 20px; color: #333; }
    }
  }

  /* ── scrollable body ─ */
  .drawer-body {
    flex: 1;
    overflow-y: auto;
    padding: 8px 0 32px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }

  /* ── nav list ─ */
  .nav-menu {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      border-bottom: 1px solid #f0f0f0;
    }

    /* top-level links & accordion buttons */
    > li > a,
    > li > button.accordion-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 15px 20px;
      font-size: 15px;
      font-weight: 600;
      color: #1a1a2e;
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      transition: color 0.2s, background 0.2s;

      &:hover, &.active { color: #0086e5; background: #f5faff; }

      .arrow {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        transition: transform 0.25s;
        color: #888;
        &.open { transform: rotate(180deg); color: #0086e5; }
      }
    }

    /* sub-menu */
    .sub-menu {
      list-style: none;
      margin: 0;
      padding: 0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease;
      background: #f8faff;

      &.open { max-height: 800px; }

      li {
        border-bottom: 1px solid #edf0f7;
        &:last-child { border-bottom: none; }
      }

      > li > a,
      > li > button.accordion-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 20px 12px 32px;
        font-size: 14px;
        font-weight: 500;
        color: #444;
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        text-align: left;
        transition: color 0.2s;
        &:hover { color: #0086e5; }
        .arrow { width: 14px; height: 14px; }
      }

      /* third-level */
      .sub-menu {
        background: #eef3fb;
        > li > a {
          padding-left: 44px;
          font-size: 13px;
          font-weight: 400;
          color: #555;
        }
      }
    }
  }
`;

/* ── Arrow SVG ──────────────────────────────────────────────────── */
const Arrow = ({ open }) => (
  <svg
    className={`arrow${open ? " open" : ""}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ── Component ──────────────────────────────────────────────────── */
const MobileMenu = ({ isOpen, onClose }) => {
  const [openSub, setOpenSub] = useState(null);
  const [openChild, setOpenChild] = useState(null);

  // close sub-menus when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setOpenSub(null);
      setOpenChild(null);
    }
  }, [isOpen]);

  // prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNav = () => onClose?.();

  return (
    <>
      <Overlay $open={isOpen} onClick={onClose} />
      <Drawer $open={isOpen} aria-hidden={!isOpen}>
        {/* header */}
        <div className="drawer-header">
          <NavLink to="/" onClick={handleNav}>
            <img src={LogoImg} alt="Clean Air Systems" />
          </NavLink>
          <button className="close-btn" onClick={onClose} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* body */}
        <div className="drawer-body">
          <ul className="nav-menu">
            {Data?.map((item, idx) => {
              const hasSub = item.subMenus?.length > 0;
              const subOpen = openSub === idx;

              return (
                <li key={idx}>
                  {hasSub ? (
                    <>
                      <button
                        className="accordion-btn"
                        onClick={() => setOpenSub(subOpen ? null : idx)}
                      >
                        {item.title}
                        <Arrow open={subOpen} />
                      </button>
                      <ul className={`sub-menu${subOpen ? " open" : ""}`}>
                        {item.subMenus.map((sub, sid) => {
                          const hasChild = sub.subMenuChilds?.length > 0;
                          const childOpen = openChild === `${idx}-${sid}`;
                          return (
                            <li key={sid}>
                              {hasChild ? (
                                <>
                                  <button
                                    className="accordion-btn"
                                    onClick={() =>
                                      setOpenChild(childOpen ? null : `${idx}-${sid}`)
                                    }
                                  >
                                    {sub.title}
                                    <Arrow open={childOpen} />
                                  </button>
                                  <ul className={`sub-menu${childOpen ? " open" : ""}`}>
                                    {sub.subMenuChilds.map((child, cid) => (
                                      <li key={cid}>
                                        <NavLink to={child.url} onClick={handleNav}>
                                          {child.title}
                                        </NavLink>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              ) : (
                                <NavLink to={sub.url} onClick={handleNav}>
                                  {sub.title}
                                </NavLink>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <NavLink to={item.url} onClick={handleNav}>
                      {item.title}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default MobileMenu;
