import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Wick",
    email: "jw@fakemail.org",
  });

  function handleChange(event) {
    setPerson((prev) => ({
      ...prev,
      [event.target.name]: event.target.value, // can name in target.name be anything? How is that working?
    }));
  }
  return (
    <>
      <form>
        <label htmlFor="firstName">firstName</label>
        <input
          name="firstName"
          id="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">lastName</label>
        <input
          name="lastName"
          id="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">email</label>
        <input
          name="email"
          id="email"
          value={person.email}
          onChange={handleChange}
        />
      </form>
      <div>
        <p>Display First: {person.firstName}</p>
        <p>Display Last: {person.lastName}</p>
        <p>Display Email: {person.email}</p>
      </div>
    </>
  );
}

export default App;
