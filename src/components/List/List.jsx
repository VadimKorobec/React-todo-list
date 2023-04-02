import React from 'react';
import '../List/List.scss';

export const List = ({ items }) => {
  return (
    <>
      <ul className="list">
        {items.map(({ icon, name, color, active }) => (
          <li class={active ? 'active' : ''}>
            <i>{icon ? icon : <i className={`badge badge--${color}`}></i>}</i>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
