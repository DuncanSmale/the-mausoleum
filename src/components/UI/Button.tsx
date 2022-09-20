import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="transition-all ease-in-out bg-gradient-to-r hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-pos from-red to-pink rounded-md pl-4 pr-4 pt-1 pb-1 text-center text-lg w-40 mt-2"
    >
      {!!children && children}
    </button>
  );
};

export default Button;
