import './Tasks.scss';
import penSvg from '../../assets/img/pen.svg';
import checkSvg from '../../assets/img/check.w.svg';

export const Tasks = () => {
  return (
    <div>
      <div className="tasks">
        <h2 className="tasks__title">
          Frontend
          <img src={penSvg} alt="pen icon" />
        </h2>
        <div className="tasks__items">
          <div className="tasks__items-row">
            <div className="checkbox">
              <input id="check" type="checkbox" />
              <label htmlFor="check">
                <img src={checkSvg} alt="check icon" />
              </label>
              <input value="ReactJS Hooks (useState, useReducer, useEffect)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
