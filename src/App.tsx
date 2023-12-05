import useContentful from "./utils/useContentful.jsx"
import "./App.css";

const query = `
  query {
    itemCollection {
      items {
        name
        description
        available
      }
    }
  }
`;

function App() {
  let { data } = useContentful(query)
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
