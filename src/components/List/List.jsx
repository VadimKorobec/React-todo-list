import React from 'react';
import '../List/List.scss';

export const List = ({ items }) => {
  return (
    <>
      <ul className="list">
        {items.map(({ icon, name }) => (
          <li className="active">
            <i>
              {icon ? icon : <i className={`badge badge--${items.color}`}></i>}
            </i>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
