
// import { useRouter } from "next/router";
// import React, { useEffect, useState, useRef } from "react";

// const blogpost = () => {
//   const [blogs, setBlog] = useState(null);
//   useEffect(() => {
//     if (!router.isReady) return;
//     const router = useRouter();
//     const {slug} = router.query;
//     fetch(`http://localhost:3000/api/blog?slug={slug}`)
//     .then((response) => response.json())
//     .then((parsed) => {
//       console.log("i am here");
//       setBlog(parsed);
//     });
//   }, [router.isReady])

//   return (
//     <div className="blogdata">
//       <h1>{blog.title}</h1>
//       <hr />
//       <br />
//       <p>
//       { blog.content}
//       </p>
//       <br />
//       <hr />
//     </div>
//   );
// };

// export default blogpost;
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BlogPost = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query,"query")

    const  {slug}  = router.query;
  console.log("slug---->",slug)

    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
      .then((response) => response.json())
      .then((parsed) => {
        console.log(parsed,"response");
        setBlog(parsed);
      });
  },[]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blogdata">
      <h1>{blog.slug}</h1>
      <hr />
      <br />
      <p>{blog.content}</p>
      <br />
      <hr />
    </div>
  );
};

export default BlogPost;
