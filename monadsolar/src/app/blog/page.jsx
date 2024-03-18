import Blogs from "./Blogs";
import Pagination from "./Pagination";
import { Suspense } from "react";
import Loading from "../loader";
const Blog = async ({ searchParams }) => {
  return (
    <>
      <div className="layout">
        <div className="middle">
          <Suspense fallback={<Loading/>}>
            <Blogs />
          </Suspense>
          <Suspense fallback={<Loading/>}>
            <Pagination />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Blog;
