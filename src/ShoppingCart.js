import { useState } from "react";

const ShoppingCart = (props) => {
  const { product } = props; //usestate variable
  const [ring, setring] = useState(props.InitialProducts);
  console.log(product, "=");

  const incre = (id) => {
    const newring = [...ring];
    for (let i = 0; i < newring.length; i++) {
      if (newring[i].id === id) {
        newring[i].count += 1;
      }
    }
    setring(newring);
  };

  const decre = (id) => {
    const newring = [...ring];
    for (let i = 0; i < newring.length; i++) {
      if (newring[i].id === id) {
        newring[i].count -= 1;
      }
    }
    setring(newring);
  };

  return (
    <div classname="App">
      <strong> This is my Daily basket Cart </strong>
      {ring.map((val) => (
        <p key={val.id}>
          {val.name}:{val.count}
          <button onClick={() => incre(val.id)}>+</button>
          <button onClick={() => decre(val.id)}>-</button>
        </p>
      ))}
    </div>
  );
};
export default ShoppingCart;
