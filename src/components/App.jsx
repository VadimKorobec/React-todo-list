import { List } from './List/List';
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
            },
          ]}
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
};
