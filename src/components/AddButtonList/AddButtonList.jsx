import { List } from '../List/List';
import plusSvg from '../../assets/img/Group.svg';
import { useState } from 'react';

import '../AddButtonList/AddButtonList.scss';
import { Badge } from 'components/Badge/Badge';

export const AddButtonList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: 'list__add-button',
            icon: <img src={plusSvg} alt="add icon" />,
            name: 'Add List ',
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <input className="field" type="text" placeholder="Folder name" />
          <div className="add-list__popup-colors">
            <ul>
              <li>
                <Badge color="green" />
              </li>
              <li></li>
            </ul>
          </div>
          <button className="button">Add Folder</button>
        </div>
      )}
    </div>
  );
};
