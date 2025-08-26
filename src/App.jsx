// App.jsx
import React, { useState } from "react";
import Card from "./Component/Card";

const App = () => {
  const [count, setCount] = useState(0);

  const addValue = () => setCount(count + 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card addValue={addValue} name="Click Me">
        <p className="text-lg font-semibold text-gray-700 mt-3">
          Count : <span className="text-blue-600">{count}</span>
        </p>
      </Card>
    </div>
  );
};

export default App;
