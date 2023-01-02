import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  let [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return [data];
};

export default useFetch;
