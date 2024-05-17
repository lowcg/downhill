import Navbar from "@/components/navbar/Navbar";

const Layout = ({ children }) => (
  <div>
    <Navbar alwaysSolid={true}/>
    <div>{children}</div>
  </div>
);

export default Layout;