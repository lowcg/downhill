"use client"

const HamMenuItem = ({ label, href, children }) => (
  <div className="block text-white font-geist font-light">
    {label}
    {children}
  </div>
);

export default HamMenuItem;
