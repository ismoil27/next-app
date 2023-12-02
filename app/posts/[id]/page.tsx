import axios from "axios";

async function getDetailedData(id: string) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
}

const PostsDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getDetailedData(params.id);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body} </p>
    </div>
  );
};

export default PostsDetailPage;
