import axios from "axios";
import { PostType } from "../interface";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostsPage from "../components/posts";

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("");
    }, 2000)
  );

  return data;
}

const Posts = async () => {
  const data: PostType[] = await getData();

  if (!data.length) {
    notFound();
  }
  return <PostsPage data={data} />;
};

export default Posts;
