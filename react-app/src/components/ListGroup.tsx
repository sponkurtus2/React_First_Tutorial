// Usamos una funcion para esta ocasion solo cuando tenemos algun parametro
/* const getMessage = () => {
  return ItemsMexico.length === 0 ? <p>No data</p> : null;
}; */

// Si no estamos usando parametros, lo podemos almacenar en una constante
/* const message = ItemsMexico.length === 0 ? <p>No data found</p> : null; */

import { useState } from "react";

// {items :[], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group list-group-numbered">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active " : "list-group-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
