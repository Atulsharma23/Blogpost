import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    console.log("use effect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((response) => {response.json()})
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);
  console.log(blogs,"blogs")

  return (
    <div className="personalblogs">
      <div className="blogs">
        
        {blogs.map((blogitem) => (
          
           <div className="blogitem" key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h2>{blogitem.title}</h2>
            </Link>
            <p className="blogitempara">{blogitem.content.substr(0,300)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
