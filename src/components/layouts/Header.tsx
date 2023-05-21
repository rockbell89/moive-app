import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import NavSearchForm from "./NavSearchForm/NavSearchForm";
import "./Header.scss";
import { api } from "../../uils";

const Header = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [isToggle, setIstoggle] = useState(false);
  const [isToggleMenu, setIstoggleMenu] = useState(false);

  const onSearchHandler = () => {
    setIstoggle((prevState) => !prevState);
  };

  const onMenuHandler = () => {
    setIstoggleMenu((prevState) => !prevState);
  };

  const onLogoutHander = async () => {
    const { data } = await api.get("/users/logout");
    if (data.success) {
      localStorage.removeItem("userId");
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!search) {
      setIstoggle(false);
    } else {
      setIstoggle(true);
    }
  }, [search]);

  let items = [];

  if (!localStorage.getItem("userId")) {
    items = [
      {
        key: "logout",
        label: (
          <button className="header-nav-btn" onClick={() => navigate("/login")}>
            로그인
          </button>
        ),
      },
    ];
  } else {
    items = [
      {
        key: "logout",
        label: (
          <button className="header-nav-btn" onClick={onLogoutHander}>
            로그아웃
          </button>
        ),
      },
    ];
  }

  return (
    <>
      {!isToggle && (
        <header className="header">
          <div className="container">
            <h1 className="logo">
              <Link to="/">BONGFLIX</Link>
            </h1>
            <div className="header-nav-group">
              <button
                onClick={onSearchHandler}
                className="btn-nav btn-search-open"
              >
                <AiOutlineSearch />
              </button>
              <div className="header-nav-dropdown">
                <button
                  className="btn-nav btn-nav-menu-toggle"
                  onClick={onMenuHandler}
                >
                  <AiOutlineMenu />
                </button>
                {isToggleMenu && (
                  <div className="nav-dropdown">
                    {items.length > 0 && (
                      <>
                        {items.map((item) => (
                          <div key={item.key} className="nav-dropdown-item">
                            {item.label}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      )}
      {isToggle && <NavSearchForm onClose={onSearchHandler} />}
    </>
  );
};

export default Header;
