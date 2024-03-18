import Blogs from "./Blogs";
import Pagination from "./Pagination";
import { Suspense } from "react";
import Loading from "../loading";
const Blog = async ({ searchParams }) => {
  const page = parseInt(searchParams?.page || 1);


  const data = await fetch(`http://localhost:3001/blogs?page=${page}`, {
    cache: "no-store",
  },  { next: { tags: ['delete-blog', 'edit-id', 'new-blog-id'] } })
    .then((response) => response.json())
    .then(({ data }) => data);




    const  pagination = await fetch(
      `http://localhost:3001/blogs?page=${page}`, {
        cache: 'no-store',
        
      }, { next: { tags: ['delete-blog', 'edit-id', 'new-blog-id'] } }
    )
      .then((response) => response.json())
      .then(({  paggination }) => ( paggination ));
   
  return (
    <>
      <div className="layout">
        <div className="middle">
          <Suspense fallback={<div>Loading</div>}>
            <Blogs data = {data} />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Pagination page = {page} pagination = {pagination}/>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Blog;
