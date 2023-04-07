import { useState } from 'react';
import { List } from './List/List';
import { AddButtonList } from './AddButtonList/AddButtonList';
import listSvg from '../assets/img/Vector.svg';

export const App = () => {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            {
              icon: <img src={listSvg} alt="list icon" />,
              name: 'All tasks',
              active: true,
            },
          ]}
        />
        <List
          items={[
            {
              color: 'green',
              name: 'Shopping',
            },
            {
              color: 'blue',
              name: 'Frontend',
            },
            {
              color: 'pink',
              name: 'Movies and serials',
              active: true,
            },
            {
              color: 'greening',
              name: 'Books',
            },
            {
              color: 'gree',
              name: 'Personal',
            },
          ]}
          isRemovable
        />
        <AddButtonList />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
};
