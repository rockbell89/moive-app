import { Outlet } from "react-router-dom";
import Header from "./Header";

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
