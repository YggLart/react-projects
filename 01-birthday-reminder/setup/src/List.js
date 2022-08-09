import React from 'react';

// cria o elemento em uma variável
// pega a variável 'people', que foi passada quando List foi chamado
const List = ({people}) => {
  return (
    <>
      {/* mapeia e retorna cada elemento da variável 'people' */}
      {people.map((person) => {

        {/* desconstrói os dados da variável 'people'
        afim de facilitar o código */}
        const {id, name, age, image} = person;

        return <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
