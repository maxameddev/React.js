function Toggle({ isOn }) {
  return (
    <div>
      <p>
        {isOn
          ? "The button is turned on"
          : "The button is turned off"}
      </p>
    </div>
  );
}

export default Toggle;