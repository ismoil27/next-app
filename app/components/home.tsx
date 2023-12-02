"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { PostType } from "../interface";

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        setPosts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <>
      {isLoading
        ? "Loading..."
        : posts.map((post) => {
            return (
              <div key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </div>
            );
          })}

      <div>Home</div>
    </>
  );
};

export default Home;
