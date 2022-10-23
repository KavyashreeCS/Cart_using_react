import ShoppingCart from "./ShoppingCart";
import InitialProducts from "./Data";
import "./styles.css";

export default function App(props) {
  const { data } = props;
  return (
    <div className="App">
      <ShoppingCart InitialProducts={InitialProducts} />
    </div>
  );
}
