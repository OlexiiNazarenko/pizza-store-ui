import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data from "./data.js";
import { useState } from "react";

function App() {
  const { products } = data;
  console.log(data);
  console.log(products);
  const [cartItems, setCartitems] = useState([]);
  const onAdd = (product) => {
    const exists = cartItems.find(x => x.id === product.id);
    if (exists) {
      setCartitems(
        cartItems.map(x =>
          x.id === product.id ? {...exists, qty: exists.qty + 1} : x
        )
      );
    } else {
      setCartitems([...cartItems, {...product, qty: 1}]);
    }
  }
  const onRemove = (product) => {
    const exists = cartItems.find(x => x.id === product.id);
    if (exists.qty === 1) {
      setCartitems(
          cartItems.filter((x) => x.id !== product.id)
      );
    } else {
      setCartitems(
          cartItems.map(x =>
              x.id === product.id ? {...exists, qty: exists.qty - 1} : x
          )
      );
    }
  }

  return (
    <div className="App">
      <Header/>
      <div className="row">
        <Main onAdd={onAdd}  products={products}/>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      </div>
    </div>
  );
}

export default App;
