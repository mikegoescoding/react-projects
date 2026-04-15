export default function FahrenheitInput({
  celsius,
  onFahrenheitChange,
}) {
  return (
    <div>
      <h5>Fahrenheit Component</h5>
      <input
        name="fahrenheit"
        type="number"
        value={(celsius * 9) / 5 + 32}
        onChange={(e) =>
          onFahrenheitChange(((Number(e.target.value) - 32) * 5) / 9)
        }
      />
    </div>
  );
}
