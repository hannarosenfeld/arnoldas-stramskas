import useContentful from "./utils/useContentful"
import Header from "./components/Header"

// import "./App.css";

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
  let { data, errors } = useContentful(query);

  if (errors) return (
    <span style={{color: "red"}}>
      {errors?.map((error) => error.message).join(",")}
      </span>
    )
    
  if (!data) return <span>Loading...</span>;

  return (
    <div className="App">
      <header className="App-header">
        <Header/>      
      </header>
    </div>
  );
}

export default App;
