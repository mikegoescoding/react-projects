import { useState, useEffect } from "react";

export default function App() {
  const testIngredients = [
    "salt",
    "pepper",
    "garlic",
    "paprika",
    "cumin",
  ];
  const [ingredients, setIngredients] = useState([]);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   console.log(ingredients);
  // }, [ingredients]);

  const ingredientsListItems = ingredients.map((ingredient, key) => (
    <li key={key}>{ingredient}</li>
  ));

  function handleAddSpice() {
    setIndex(index + 1);
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      testIngredients[index],
    ]);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  function handleAddIngredient(e) {
    e.preventDefault();
    setIngredients((prev) => [...prev, inputValue]);
    setInputValue("");
  }
  return (
    <div className="quick-rep">
      <form style={{ display: "flex", gap: "0.5rem" }}>
        <input
          style={{ flex: 1 }}
          type="text"
          placeholder="add ingredient"
          name="ingredient"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handleAddIngredient}
          aria-label="Press button to add ingredient to list"
        >
          Click to Add
        </button>
      </form>
      <button
        style={{ width: "100%", marginTop: "1rem" }}
        onClick={handleAddSpice}
        disabled={index >= testIngredients.length}
      >
        Add spice: {testIngredients[index] ?? "no more spice"}
      </button>
      <ul>{ingredientsListItems}</ul>
    </div>
  );
}
