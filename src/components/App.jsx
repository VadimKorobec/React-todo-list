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
            },
          ]}
        />
        <List
          items={[
            {
              color: '#42B883',
              name: 'Shopping',
            },
            {
              color: '#64C4ED',
              name: 'Frontend',
            },
            {
              color: '#FFBBCC',
              name: 'Movies and serials',
            },
          ]}
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
};
