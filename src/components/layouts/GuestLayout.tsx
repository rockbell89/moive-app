import { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";

const GuestLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (user) {
      console.log(true);
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
