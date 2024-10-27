import React from "react";
import MainLayout from "./layouts/MainLayout";
import AddCart from "./components/AddCard";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      {" "}
      <MainLayout>
        <AddCart></AddCart>
        <Cart></Cart>
      </MainLayout>
    </div>
  );
}

export default App;
