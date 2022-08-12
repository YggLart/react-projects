import React, { useState, useEffect } from "react";
import People from "./People";
import Button from "./Button";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data); // puxa as infos de data e coloca na var "people"
  const [index, setIndex] = useState(0); // define a pessoa inicial no carregamento da página

  // loop entre "people"
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // loop automático após 3s
  // roda sempre que o "index" for alterado
  // importante dar clear no interval para resetar o loop no clique
  useEffect(() => {
    let slider = setInterval(() => setIndex(index + 1), 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    // return do App
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        <People people={people} index={index} />
        <Button
          key={people.id}
          index={index}
          setIndex={setIndex}
          direction="prev"
        />
        <Button
          key={people.id}
          index={index}
          setIndex={setIndex}
          direction="next"
        />
      </div>
    </section>
  );
}

export default App;
