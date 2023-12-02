import { FC } from "react";
import { PostType } from "../interface";
import Link from "next/link";

const PostsPage: FC<{ data: PostType[] }> = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/posts/${item.id}`}>{item.title}</Link>
          </div>
        );
      })}
    </>
  );
};

export default PostsPage;
