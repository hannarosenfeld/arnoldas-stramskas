import { useState, useEffect } from "react";
import "./App.css";

const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`;

const { ACCESS_TOKEN, SPACE_ID } = process.env;

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    console.log("💅🏻 in useEffect");
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/?access_token=${ACCESS_TOKEN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer JjxBmPXFxdVMU45d0BQ0OVO3KB3zATWxERqcmUxgGEo",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then((json) => setContent(json.data));
  }, []);

  if (!content) {
    return "Loading...";
  } else {
    console.log("🌸 content: ", content);
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        {/* Render your content here */}
      </header>
    </div>
  );
}

export default App;
