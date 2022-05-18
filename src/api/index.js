import { useEffect, useState } from "react";

const search = (keyword, page, type) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const format = new Intl.NumberFormat("en-US");

  const url = `https://api.github.com/search/${type}?q=${keyword}&page=${page}&per_page=7&order=asc`;

  useEffect(() => {
    if (keyword) {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setData(response.items);
          setCount(format.format(response.total_count));
          setLoading(false);
        })
        .catch((err) => {
          console.log("api error", err);
          setError(true);
          setErrorMsg(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [url]);
  return { data, loading, error, count, errorMsg, setError };
};

export default search;
