import Blogs from "./Blogs";
import Pagination from "./Pagination";
import { Suspense } from "react";
import Loading from "../loader";

export const metadata = {
  title: {
    absolute: "",
    default: "Blog",
    template: "",
  },
  description: "(555) 555-5555",
};

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams?.page || 1);

  return (
    <>
      <div className="layout">
        <div className="middle">
          <Suspense fallback={<div>loading</div>}>
            <Blogs page={page} />
          </Suspense>
          <Suspense fallback={<div>loading </div>}>
            <Pagination page={page} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Blog;
