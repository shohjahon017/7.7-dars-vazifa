import React from "react";
import { useDispatch } from "react-redux";

function Theme() {
  const dispatch = useDispatch();

  const handleThemeChange = (e) => {
    dispatch({ type: "SET_THEME", payload: e.target.value });
  };

  return (
    <div>
      <select onChange={handleThemeChange} className="border rounded-lg p-2">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default Theme;
