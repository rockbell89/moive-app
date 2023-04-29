import {
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";

const BaseLayout = () => {
  const { pathname } = useLocation();
  const { parmas } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, parmas]);

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
