import { ChangeEvent, useState } from "react";

interface useInputReturnType<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

const useInput = <T extends object>(initailState: T): useInputReturnType<T> => {
  const [data, setData] = useState<T>(initailState);
  const onReset = () => setData(initailState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  return {
    data,
    setData,
    onChange,
    onReset,
  };
};

export default useInput;
