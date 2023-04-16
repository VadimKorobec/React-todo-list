import { List } from '../List/List';
import plusSvg from '../../assets/img/Group.svg';
import { useState } from 'react';
import { Badge } from 'components/Badge/Badge';
import closeSvg from '../../assets/img/closeSvg.svg';
import '../AddButtonList/AddButtonList.scss';

export const AddButtonList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
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
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt="clous btn"
            className="add-list__popup-clouse-btn"
          />
          <input
            value={inputValue}
            onChange={event => setInputValue(event.currentTarget.value)}
            className="field"
            type="text"
            placeholder="Folder name"
          />
          <div className="add-list__popup-colors">
            {colors.map(color => (
              <Badge
                onClick={() => setSelectedColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && 'active'}
              />
            ))}
          </div>
          <button className="button">Add Folder</button>
        </div>
      )}
    </div>
  );
};
