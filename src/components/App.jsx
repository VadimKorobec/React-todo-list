import { List } from './List/List';
import { AddButtonList } from './AddButtonList/AddButtonList';
import listSvg from '../assets/img/Vector.svg';
import DB from '../assets/db.json';
import { useState } from 'react';

export const App = () => {
  const [lists, setLists] = useState(
    DB.lists.map(list => {
      list.color = DB.colors.filter(color => color.id === list.colorId)[0].name;
      return list;
    })
  );

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
        <List items={lists} isRemovable />
        <AddButtonList colors={DB.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
};
