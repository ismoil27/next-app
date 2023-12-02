"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { PostType } from "../interface";
import Text from "./text/text";

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
      <h2>Welcone Home</h2>

      <Text text="Home Page" />
    </>
  );
};

export default Home;
