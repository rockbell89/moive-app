import { AiOutlineSearch } from "react-icons/ai";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>BONGFLIX</h1>
      <div>
        <button className="btn-search">
          <AiOutlineSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
