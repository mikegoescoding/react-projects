import { useState, useEffect } from "react";
const items = [
  "apple",
  "banana",
  "cherry",
  "grape",
  "mango",
  "orange",
  "strawberry",
];
export default function App() {
  const [search, setSearch] = useState("");

  function handleInputValue(event) {
    const value = event.target.value;
    setSearch(value);
  }

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className="quick-rep">
      <input
        type="text"
        name="itemSearch"
        placeholder="Type something to filter..."
        aria-label="Search filter input"
        onChange={handleInputValue}
      />
      {items
        .filter((item) =>
          item.toLowerCase().includes(search.toLowerCase().trim()),
        )
        .map((item, key) => (
          <li key={key}>{item}</li>
        ))}
    </div>
  );
}
