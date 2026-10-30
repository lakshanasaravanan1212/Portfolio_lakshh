import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WHAT I DO', href: '#what-i-do' },
    { name: 'EDITH', href: '#edith' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-inner">
          {/* Logo / Initials */}
          <a href="#home" className="navbar-title" data-cursor="pointer">
            <span className="logo-badge">LS</span>
            <span className="logo-name">Lakshana S</span>
          </a>

          {/* Center Email Connect Pill */}
          <a
            href="mailto:lakshanasaravanan1212@gmail.com"
            className="navbar-connect"
            data-cursor="pointer"
          >
            <span className="connect-dot" />
            <span>lakshanasaravanan1212@gmail.com</span>
            <ArrowUpRight size={14} className="connect-arrow" />
          </a>

          {/* Desktop Nav Items with split text hover effect */}
          <nav className="desktop-nav">
            <ul>
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover-link"
                    data-cursor="pointer"
                  >
                    <span className="hover-in" data-text={link.name}>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-links">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-connect-box">
            <p className="mobile-connect-label">Available for UI/UX & Product Design Roles</p>
            <a
              href="mailto:lakshanasaravanan1212@gmail.com"
              className="mobile-email-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              lakshanasaravanan1212@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
