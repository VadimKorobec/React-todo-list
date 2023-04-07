import { List } from './List/List';
import { useState } from 'react';

import listSvg from '../assets/img/Vector.svg';
import { AddButtonList } from './AddButtonList/AddButtonList';

export const App = () => {
  const [state, setState] = useState('hello world');

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <button onClick={() => alert('ku-ku')}>reset</button>
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
