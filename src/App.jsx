import useContentful from './utils/useContentful.jsx';
import Header from "./components/Header.jsx"

import "./App.css";

const query = `
  query {
    itemCollection {
      items {
        name
        description
        available
        dimensions
        image {
          url
        }
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
        {data.itemCollection.items.map((item) => (
        <div className="card">
          <div className="image-container">
            <img className="card-img-top" alt={item.name} src={item.image.url} />
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.dimensions}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
