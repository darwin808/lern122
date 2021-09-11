import React, { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Iprops) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
