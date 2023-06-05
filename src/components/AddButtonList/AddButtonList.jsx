import { List } from '../List/List';
import axios from 'axios';
import plusSvg from '../../assets/img/Group.svg';
import { useEffect, useState } from 'react';
import { Badge } from 'components/Badge/Badge';
import closeSvg from '../../assets/img/closeSvg.svg';
import '../AddButtonList/AddButtonList.scss';

export const AddButtonList = ({ colors, onAdd }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (Array.isArray(colors)) {
      setSelectedColor(colors[0].id);
    }
  }, [colors]);

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setSelectedColor(colors[0].id);
  };

  const addList = () => {
    if (!inputValue) {
      alert('Please enter list name');
      return;
    }
    setIsLoading(true);
    axios
      .post('http://localhost:3001/lists', {
        name: inputValue,
        colorId: selectedColor,
      })
      .then(({ data }) => {
        const color = colors.filter(color => color.id === selectedColor)[0]
          .name;
        const listObj = { ...data, color: { name: color } };
        onAdd(listObj);
        onClose();
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
            onClick={onClose}
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
          <button onClick={addList} className="button">
            {isLoading ? 'Addition...' : ' Add Folder'}
          </button>
        </div>
      )}
    </div>
  );
};
