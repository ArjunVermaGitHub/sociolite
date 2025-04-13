import Link from "next/link";
import Navbar from "./Header/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
        <Navbar/>
      <main >{children}</main>
    </div>
  );
}
