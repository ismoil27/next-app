import axios from "axios";
import { PostType } from "../interface";
import { notFound } from "next/navigation";
import PostsPage from "../components/posts";

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
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
