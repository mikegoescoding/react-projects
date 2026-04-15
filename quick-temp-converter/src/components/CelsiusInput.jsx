export default function CelsiusInput({ celsius, onCelsiusChange }) {
  return (
    <div>
      <h5>Celsius Component</h5>
      <input
        name="celsius"
        type="number"
        value={celsius}
        onChange={(e) => onCelsiusChange(e.target.value)}
      />
    </div>
  );
}
