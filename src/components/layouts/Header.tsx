import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import "./Header.scss";

const Header = () => {
  const onSearchHandler = () => {
    console.log("검색 이벤트");
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">BONGFLIX</Link>
        </h1>
        <div className="header-nav-group">
          <button onClick={onSearchHandler} className="btn-search">
            <AiOutlineSearch />
          </button>
          <button onClick={onSearchHandler} className="btn-search">
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
