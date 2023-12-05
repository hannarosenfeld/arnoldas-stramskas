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
  else console.log("🌸", data.itemCollection.items)

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="container">
        {data.itemCollection.items.map(item => (
        <div className="card">
          <div className="card-body">
            <h3>{item.name}</h3>

          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
