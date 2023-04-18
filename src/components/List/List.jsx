import React from 'react';
import classNames from 'classnames';
import closeX from '../../assets/img/closeX.svg';
import '../List/List.scss';
import { Badge } from 'components/Badge/Badge';

export const List = ({ items, isRemovable, onClick }) => {
  return (
    <div>
      <ul onClick={onClick} className="list">
        {items.map((item, index) => (
          <li
            key={index}
            className={classNames(item.className, { active: item.active })}
          >
            <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
            <span>{item.name}</span>
            {isRemovable && (
              <img className="list__remove-icon" src={closeX} alt="close X" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
