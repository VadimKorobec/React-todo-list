import axios from 'axios';
import { List } from './List/List';
import { AddButtonList } from './AddButtonList/AddButtonList';
import { useState, useEffect } from 'react';
import { Tasks } from './Tasks/Tasks';
import listSvg from '../assets/img/Vector.svg';

export const App = () => {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/lists?_expand=color').then(({ data }) => {
      setLists(data);
    });
    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    });
  }, []);

  const onAddList = obj => {
    const newList = [...lists, obj];
    setLists(newList);
  };

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
        <List items={lists} onRemove={list => console.log(list)} isRemovable />
        <AddButtonList onAdd={onAddList} colors={colors} />
      </div>
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
};
