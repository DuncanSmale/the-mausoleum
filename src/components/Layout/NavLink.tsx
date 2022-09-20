import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  href: string;
}
const NavLink = (props: Props) => {
  return (
    <Link href={props.href} passHref>
      <a className="transition-all ease-in-out bg-gradient-to-r hover:-translate-y hover:scale-105 duration-300 hover:bg-pos from-red to-pink rounded-md pl-4 pr-4 pt-1 pb-1 text-center text-lg w-40 mt-2">
        {props.name}
      </a>
    </Link>
  );
};

export default NavLink;
