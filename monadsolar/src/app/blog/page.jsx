import Blogs from "./Blogs";
import Pagination from "./Pagination";
import { Suspense } from "react";
const Blog = async ({ searchParams }) => {
  return (
    <>
      <div className="layout">
        <div className="middle">
          <Suspense fallback={<div>Loading</div>}>
            <Blogs />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Pagination />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Blog;
