import { useState, useEffect } from "react";

const { ACCESS_TOKEN, SPACE_ID } = process.env;


function useContentful(query) {
    const [data, setData] = useState(null);

    useEffect(() => {
      console.log("💅🏻 in useEffect");
      window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then((json) => setData(json.data));
    }, []);

    if (!data) {
      return "Loading...";
    } else {
      console.log("🌸 content: ", data);
      return { data }
    }
}

export default useContentful