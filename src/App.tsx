import React from 'react';
import './index.css';

const SocialIcon = ({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) => (
  <a href={href} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
    {children}
  </a>
);

const LinkButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="link-btn" target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

function App() {
  return (
    <div className="container">
      <div className="profile-img-wrapper fade-in">
        <img src="/profile.jpg" alt="Victor Ebiringa" className="profile-img" />
      </div>
      
      <div className="fade-in delay-1">
        <h1 className="title">Victor Ebiringa</h1>
        <p className="bio">Creative Director | Motion Designer</p>
      </div>

      <div className="social-links fade-in delay-2">
        <SocialIcon href="https://www.instagram.com/victorebiringa/" ariaLabel="Instagram">
          <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </SocialIcon>
        <SocialIcon href="https://www.facebook.com/thevictorebiringa" ariaLabel="Facebook">
          <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/thegraphicalchemist/" ariaLabel="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </SocialIcon>
        <SocialIcon href="https://x.com/VictorEbiringa" ariaLabel="X (Twitter)">
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </SocialIcon>
        <SocialIcon href="https://www.tiktok.com/@victorebiringa" ariaLabel="TikTok">
          <svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.16-1.74 1.9-4.16 2.98-6.67 3.01-2.66.03-5.3-.96-7.14-2.87C-1.65 21.05-2.3 17.81 2.1 15.3c1.94-1.09 4.31-1.39 6.47-.84.01-1.38-.02-2.76.01-4.14-1.41-.33-2.88-.36-4.3-.06-1.88.38-3.55 1.4-4.8 2.9-1.52 1.84-2.25 4.33-1.85 6.66.42 2.39 1.63 4.54 3.44 6.06 1.86 1.54 4.23 2.37 6.63 2.37 3.73-.01 7.15-2.02 8.87-5.32 1.1-2.09 1.45-4.47 1.45-6.79.03-4.14.01-8.29.01-12.43z"/></svg>
        </SocialIcon>
        <SocialIcon href="https://www.youtube.com/@vismilesdesigns/videos" ariaLabel="YouTube">
          <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </SocialIcon>
      </div>

      <div className="links-container fade-in delay-3">
        <LinkButton href="https://www.vismilesdesigns.online">NEXT-LEVEL EDITS course</LinkButton>
        <LinkButton href="https://selar.com/thegym-membership">The Gym (mentorship community)</LinkButton>
        <LinkButton href="https://selar.com/lmdmasterclass">Motion Design course</LinkButton>
      </div>

      <div className="footer fade-in delay-4">
        <img src="/logo.jpg" alt="Brand Logo" className="footer-logo" />
        <p>© {new Date().getFullYear()} Victor Ebiringa. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
