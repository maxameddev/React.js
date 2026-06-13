function Greeting({ count }) {
  return (
    <div>
      <h2>Count: {count}</h2>
      {count === 0 ? (
        <p>Start clicking the button 👇</p>
      ) : (
        <p>You clicked {count} times 🚀</p>
      )}
    </div>
  );
}

export default Greeting;