import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  //  desconstrói o dados de './data.js' e coloca dentro da const 'people'
  //  dessa forma, é possível usar os dados chamando a variável
  const [people, setPeople] = useState(data);

  return <main>

    <section className="container">

      <h3>{people.length} birthdays today</h3>

      {/* envia os dados de './data.js' para o componente
          através da variável 'people' estabelecida antes */}
      <List people={people} alt="asdasdasdasdasdasfqwe" key="12341214612" status="12356411264511241" className="12631126351245741" />

      {/* esvazia a variável 'people' através do comando useState()
          ao clicar no botão */}
      <button onClick={() => setPeople([])}>Clear All</button>

    </section>

  </main>;
}

export default App;
