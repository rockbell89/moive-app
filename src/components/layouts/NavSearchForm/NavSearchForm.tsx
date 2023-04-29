import {
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import InputFeild from "../../UI/InputField/InputFeild";
import "./NavSearchForm.scss";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";

interface NavSearchFormProps {
  onClose: () => void;
}

const NavSearchForm: React.FC<NavSearchFormProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data, setData, onChange, onReset } = useInput({
    search: "",
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/search?query=${data.search}`);
    window.location.reload();
  };

  useEffect(() => {
    setData({ search: searchParams.get("query") as string });
  }, [searchParams, setData]);

  return (
    <div className="nav-search-form">
      <div className="search-form-wrapper">
        <form onSubmit={onSubmitHandler}>
          <InputFeild
            type="text"
            name="search"
            value={data.search || ""}
            onChange={onChangeHandler}
            onReset={onReset}
            className="w-full"
          >
            <button type="submit" className="btn-icon btn-search">
              <AiOutlineSearch />
            </button>
          </InputFeild>
        </form>
        <button onClick={onClose} className="btn-icon btn-search-close">
          <AiOutlineCloseCircle />
        </button>
      </div>
    </div>
  );
};

export default NavSearchForm;
