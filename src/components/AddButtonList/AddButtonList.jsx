import { List } from '../List/List';
import plusSvg from '../../assets/img/Group.svg';

export const AddButtonList = () => {
  return (
    <div>
      <List
        items={[
          {
            className: 'list__add-button',
            icon: <img src={plusSvg} alt="add icon" />,
            name: 'Add List ',
          },
        ]}
      />
      <div className="add-list-form"></div>
    </div>
  );
};
