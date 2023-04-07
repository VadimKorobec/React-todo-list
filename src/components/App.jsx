import { List } from './List/List';
import listSvg from '../assets/img/Vector.svg';
import plusSvg from '../assets/img/Group.svg';

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
          ]}
          isRemovable
        />
        <List
          items={[
            {
              className: 'list__add-button',
              icon: <img src={plusSvg} alt="add icon" />,
              name: 'Add List ',
            },
          ]}
          isRemovable
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
};
