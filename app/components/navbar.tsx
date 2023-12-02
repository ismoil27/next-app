"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar-1">
      <button onClick={() => router.push("/")}>Home</button>
      <button onClick={() => router.push("/about")}>About</button>
      <button onClick={() => router.push("/contact")}>Contact </button>
      <button onClick={() => router.push("/posts")}>Posts</button>
    </div>
  );
};

export default Navbar;
