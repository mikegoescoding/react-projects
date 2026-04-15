import { useState } from "react";
import CelsiusInput from "./components/CelsiusInput";
import FahrenheitInput from "./components/FahrenheitInput";

export default function App() {
  const [celsius, setCelsius] = useState(0);

  return (
    <div>
      <h1>Temp: {celsius}°C</h1>
      <CelsiusInput
        celsius={celsius}
        onCelsiusChange={setCelsius}
      />
      <FahrenheitInput
        celsius={celsius}
        onFahrenheitChange={setCelsius}
      />
    </div>
  );
}
