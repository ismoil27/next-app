import Link from "next/link";

function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href={"/users"}>Users</Link>
      </p>
    </main>
  );
}

export default Home;
