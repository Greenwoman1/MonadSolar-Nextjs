import styles from "./Blog.module.css";
import BlogCard from "@/components/BlogCard/BlogCard";
import Pagination2 from "@/components/pagination/Pagination";

const Pagination = async ({ searchParams }) => {
  const page = parseInt(searchParams?.page || 1);

  const  paggination = await fetch(
    `http://localhost:3001/blogs?page=${page}`, {
      cache: 'no-store'
    }
  )
    .then((response) => response.json())
    .then(({  paggination }) => ( paggination ));

  return (
    <>
     
      <Pagination2 currentPage={page} totalPages={paggination.numOfPages} />
    </>
  );
};

export default Pagination;
