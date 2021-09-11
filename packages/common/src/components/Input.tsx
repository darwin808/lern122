import React from "react";

interface props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ value, onChange }: props) => {
  return (
    <div>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
