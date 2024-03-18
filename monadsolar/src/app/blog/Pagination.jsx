import styles from "./Blog.module.css";
import BlogCard from "@/components/BlogCard/BlogCard";
import Pagination2 from "@/components/pagination/Pagination";

const Pagination = async ({page, pagination}) => {

  return (
    <>
     
      <Pagination2 currentPage={page} totalPages={pagination.numOfPages} />
    </>
  );
};

export default Pagination;
