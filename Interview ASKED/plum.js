import { useState, useEffect, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
// we have to observer till last
// now check more items then setpage call fetch to load

export default function ListingPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isItemsAvailable, setisItemsAvailable] = useState();
  const [totalCount, setTotalCount] = useState();
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const apiUrl = `https://openlibrary.org/people/mekBot/books/want-to-read.json?page=${page}`;

  const isIntersecting = useIntersectionObserver(loaderRef);
  console.log(isIntersecting, "isIntersecting");

  async function fetchData() {
    setLoading(true);
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    setData((prev) => [...prev, ...data.reading_log_entries]);
    console.log(data.length, "dede");
    setTotalCount(data.numFound);
    setLoading(false);
  }

  useEffect(() => {
    console.log(totalCount - data.length, "debug log", totalCount, data.length);
    if (totalCount - data.length > 0) {
      console.log("More items pending");

      if (isIntersecting && !loading) {
        setPage(page + 1);
      }
      // const observer = new IntersectionObserver(
      //   (entries) => {
      //     console.log(entries[0].isIntersecting, "isIntersecting");
      //     if (entries[0].isIntersecting && !loading) {
      //       setPage(page + 1);
      //     }
      //   },
      //   {
      //     root: null,
      //     rootMargin: "0px",
      //     threshold: 1.0,
      //   }
      // );
      // if (loaderRef.current) observer.observe(loaderRef.current);

      // return () => {
      //   if (loaderRef.current) observer.unobserve(loaderRef.current);
      // };
    }
  }, [totalCount, data]);

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log(data, "heree");
  return (
    <>
      <h1>Listing Page</h1>

      <div className="cards">
        {data.map((entry) => {
          return <p id={entry.cover_id}>{entry.work.title}</p>;
        })}
      </div>
      {loading && <p>Loading........</p>}

      <div ref={loaderRef}> </div>
    </>
  );
}


import { useState, useEffect } from "react";

export default function useIntersectionObserver(ref) {
  const [isIntersecting, setisIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setisIntersecting(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return isIntersecting;
}
