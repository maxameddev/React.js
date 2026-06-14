import { useState } from "react";

function Greeting() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      quantity: 1,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  };

  const increaseQty = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Shopping Cart</h1>

      <h2>Add a Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add to Cart</button>

      <h2>Products in Cart</h2>

      {products.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <strong>
                {item.name} - ${item.price.toFixed(2)}
              </strong>

              <div>
                Quantity:
                <button onClick={() => decreaseQty(item.id)}>
                  -
                </button>

                {item.quantity}

                <button onClick={() => increaseQty(item.id)}>
                  +
                </button>
              </div>

              <button onClick={() => removeProduct(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default Greeting;