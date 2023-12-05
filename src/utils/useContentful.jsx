import { useState, useEffect } from "react";

const { ACCESS_TOKEN, SPACE_ID } = process.env;


function useContentful(query) {
    const [data, setData] = useState(null);
    let [errors, setErrors] = useState(null);

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
        .then(({data, errors}) => {
          if (errors) setErrors(errors)
          if (data) setData(data)
        })
      .catch(error => setErrors([error]))
    }, [query]);

      return { data, errors}
 
}

export default useContentful