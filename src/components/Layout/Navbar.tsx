import Link from "next/link";
import { useRouter } from "next/router";
import NavLink from "./NavLink";

const Navbar = () => {
  const router = useRouter();
  const buttonHandler = () => {
    return;
  };
  const classes =
    "transition-all ease-in-out bg-gradient-to-r hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-pos from-red to-pink rounded-md pl-4 pr-4 pt-1 pb-1 text-center text-lg w-40 mt-2";
  return (
    <>
      <div className="bg-light md:max-w-lg w-2/12 h-screen pt-20 shadow-lg drop-shadow-lg">
        <div className="flex flex-col items-center">
          <NavLink href="/" name="Home"></NavLink>
          <NavLink href="/activity" name="Activities"></NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
