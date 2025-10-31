import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {

  const chemists = people.filter(person => person.profession === 'químico');
  const others = people.filter(person => person.profession !== 'químico');

  const chemistList = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

  const otherList = others.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Químicos</h1>
      <ul>{chemistList}</ul>
      <h1>Todos los demás</h1>
      <ul>{otherList}</ul>
    </article>
  );
}