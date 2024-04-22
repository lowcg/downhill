const { Link } = require("@radix-ui/react-navigation-menu");

const HamMenuItem = ({ label, href, children }) => (
  <div className="block text-white font-geist font-light">
    {label}
    {children}
  </div>
);

export default HamMenuItem;
