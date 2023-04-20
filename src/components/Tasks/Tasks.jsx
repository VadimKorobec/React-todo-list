import './Tasks.scss';
import penSvg from '../../assets/img/pen.svg';

export const Tasks = () => {
  return (
    <div>
      <div className="tasks">
        <h2 className="tasks__title">
          Frontend
          <img src={penSvg} alt="pen icon" />
        </h2>
      </div>
    </div>
  );
};
