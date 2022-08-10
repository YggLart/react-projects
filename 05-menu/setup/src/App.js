import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// muito do js funciona igual python, mas escrevendo mais

// use map() sempre que quiser listar itens de um objeto na mesma
// estrutura do python, como.. lista.map(item)
// o uso comum é conseguir acessar itens de dentro dessas listas
// é possível pegar através da desestruturação.. const {name, job, age} = lista
//                                       então.. lista.map((item) => job)
// ou caso seja um uso único no código.. lista.map((item) => item.job)
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
