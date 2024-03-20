import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ children }) => {
  return (
    <button
      style={{
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
