import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import axios from "axios";

const BaseLayout = () => {
  const { pathname } = useLocation();
  const { parmas } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, parmas]);

  useEffect(() => {
    const auth = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_MONGO_API}/api/users/auth`,
          {
            withCredentials: true,
          }
        );
        console.log("auth", data);
      } catch (error) {
        console.error(error);
      }
    };
    auth();
  }, []);

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
