import Link from "next/link";

function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href={"/about"}>Go to About Page</Link>
    </main>
  );
}

export default Home;
