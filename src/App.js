import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [checked, setChecked] = useState({
    selectAll: false,
    fruits: false,
    vegetables: false,
    apple: false,
    banana: false,
    orange: false,
    carrot: false,
    potato: false,
    tomato: false,
  });

  const handleChange = (name) => {
    const updated = { ...checked };

    if (name === "selectAll") {
      const newVal = !checked.selectAll;
      Object.keys(updated).forEach((key) => (updated[key] = newVal));
    }
    else if (name === "fruits") {
      const newVal = !checked.fruits;
      updated.fruits = newVal;
      updated.apple = newVal;
      updated.banana = newVal;
      updated.orange = newVal;
    }
    else if (name === "vegetables") {
      const newVal = !checked.vegetables;
      updated.vegetables = newVal;
      updated.carrot = newVal;
      updated.potato = newVal;
      updated.tomato = newVal;
    }
    else {
      // toggle child
      updated[name] = !checked[name];
    }

    // update parents
    updated.fruits = updated.apple && updated.banana && updated.orange;
    updated.vegetables = updated.carrot && updated.potato && updated.tomato;
    updated.selectAll =
        updated.fruits &&
        updated.vegetables &&
        updated.apple &&
        updated.banana &&
        updated.orange &&
        updated.carrot &&
        updated.potato &&
        updated.tomato;

    setChecked(updated);
  };

  return (
      <div className="container">
        <h2 className="title">Nested Checkbox Example</h2>

        {/* Select All */}
        <label className="checkbox">
          <input
              type="checkbox"
              checked={checked.selectAll}
              onChange={() => handleChange("selectAll")}
          />
          Select All
        </label>

        {/* Fruits */}
        <div className="group">
          <label className="checkbox parent">
            <input
                type="checkbox"
                checked={checked.fruits}
                onChange={() => handleChange("fruits")}
            />
            Fruits
          </label>
          <div className="children">
            <label className="checkbox">
              <input
                  type="checkbox"
                  checked={checked.apple}
                  onChange={() => handleChange("apple")}
              />
              Apple
            </label>
            <label className="checkbox">
              <input
                  type="checkbox"
                  checked={checked.banana}
                  onChange={() => handleChange("banana")}
              />
              Banana
            </label>
            <label className="checkbox">
              <input
                  type="checkbox"
                  checked={checked.orange}
                  onChange={() => handleChange("orange")}
              />
              Orange
            </label>
          </div>
        </div>

        {/* Vegetables */}
        <div className="group">
          <label className="checkbox parent">
            <input
                type="checkbox"
                checked={checked.vegetables}
                onChange={() => handleChange("vegetables")}
            />
            Vegetables
          </label>
          <div className="children">
            <label className="checkbox">
              <input
                  type="checkbox"
                  checked={checked.carrot}
                  onChange={() => handleChange("carrot")}
              />
              Carrot
            </label>
            <label className="checkbox">
              <input
                  type="checkbox"
                  checked={checked.potato}
                  onChange={() => handleChange("potato")}
              />
              Potato
            </label>
            <label className="checkbox">
              <input
                  type="checkbox"
                  checked={checked.tomato}
                  onChange={() => handleChange("tomato")}
              />
              Tomato
            </label>
          </div>
        </div>
      </div>
  );
};

export default App;
