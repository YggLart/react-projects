import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// API com infos em json
const url = "https://course-api.com/react-tours-project";

function App() {
  // desconstróis os componentes Loading e Tours
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // pega o id do elemento que ativa a função e
    // coloca todos os itens que não tem aquele id na array que mostra na tela
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // cria uma variável pra puxar e listar as infos de Tours
  const fetchTours = async () => {
    // muda o status do Loading pra true
    setLoading(true);

    // tenta puxar as infos
    try {
      const response = await fetch(url); // puxa as infos da API
      const tours = await response.json(); // traduz o json
      setLoading(false); // retira a tela de loading
      setTours(tours); // mostra as infos puxadas da API
    } catch (error) {
      // se não conseguir puxar as infos, mostra o erro no console
      setLoading(false);
      console.log(error);
    }
  };

  // useEffect() roda em paralelo com a página
  useEffect(() => {
    fetchTours();
  }, []);

  // se a tela de loading for true, mostra o componente Loading
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // se o tamanho da lista for 0, mostra um botão de refresh
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  // se não, mostra o componente Tours
  return (
    <main>
      {/* envia a array puxada na API como prop */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
