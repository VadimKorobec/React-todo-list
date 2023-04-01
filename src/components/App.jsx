import listSvg from '../assets/img/Vector.svg';

export const App = () => {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <ul className="todo__list">
          <li className="active">
            <i>
              <img src={listSvg} alt="list icon" />
            </i>
            <span>All tasks</span>
          </li>
        </ul>
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
};
