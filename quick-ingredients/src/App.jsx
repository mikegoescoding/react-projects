import { useState, useEffect } from "react";

export default function App() {
  const testIngredients = ["salt", "pepper", "garlic", "paprika"];
  const [ingredients, setIngredients] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  const ingredientsListItems = ingredients.map((ingredient, key) => (
    <li key={key}>{ingredient}</li>
  ));

  function handleSubmit() {
    setIndex(index + 1);
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      testIngredients[index],
    ]);
  }

  return (
    <div className="quick-rep">
      <button
        onClick={handleSubmit}
        disabled={
          ingredients.length < testIngredients.length ? false : true
        }
      >
        Click to add next
      </button>
      <ul>{ingredientsListItems}</ul>
    </div>
  );
}
