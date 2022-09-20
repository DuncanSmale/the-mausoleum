import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Block = ({ children }: Props) => {
  return (
    <div className="bg-light rounded p-2 m-4 shadow-md block max-w-sm min-w-min">
      {children}
    </div>
  );
};

export default Block;
