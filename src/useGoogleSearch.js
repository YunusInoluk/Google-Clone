import { useEffect, useState } from "react";
import API_KEY from "./key";

const CONTEXT_KEY = "36d6b735e10ac493c";
function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };
    getData();
  }, [term]);

  return { data };
}

export default useGoogleSearch;
