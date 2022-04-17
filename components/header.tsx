import Link from "next/link";
import { FunctionComponent } from "react";
import Logo from "./logo";

const Header: FunctionComponent = () => (
  <header>
    <Link href="/">
      <a tabIndex={1} className="logo">
        <Logo />
      </a>
    </Link>
    <button className="button__blue">
      <div className="button__content">
        <p className="button__text">Sign Up</p>
      </div>
    </button>
  </header>
);

export default Header;
