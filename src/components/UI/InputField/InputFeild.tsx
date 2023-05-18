import React, { ChangeEvent } from "react";
import "./InputFeild.scss";
import { defaultProps } from "../../../core";
import { AiOutlineClose } from "react-icons/ai";

interface InputFeildProps extends defaultProps {
  name: string;
  type: string;
  value?: any;
  icon?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onReset?: () => void;
}

const InputFeild: React.FC<InputFeildProps> = (
  { name, type, value, icon, onChange, onReset, className, children },
  props
) => {
  return (
    <div className={`input-field ${className}`}>
      {icon && <span className="input-icon">{icon}</span>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      {value && value.length > 0 && (
        <span className="btn-icon" onClick={onReset}>
          <AiOutlineClose />
        </span>
      )}
      {children}
    </div>
  );
};

export default InputFeild;
