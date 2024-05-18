import Navbar from "@/components/navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar alwaysSolid={true} />
      {children}
    </div>
  );
};

export default layout;
