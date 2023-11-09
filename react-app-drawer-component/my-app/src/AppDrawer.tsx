import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export function AppDrawer({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }
  function handleSelect() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="image">
        <div onClick={handleMenuClick}>
          <FaBars className={'menu-icon'} />
        </div>
        <div className={isOpen ? 'menu-drawer is-open' : 'menu-drawer'}>
          <Menu items={items} onSelect={handleSelect} />
        </div>
        <div
          onClick={handleMenuClick}
          className={isOpen ? 'menu-shade is-drawn' : 'menu-shade'}></div>
      </div>
    </>
  );
}

type Topic = {
  id: number;
  title: string;
};
type Props = {
  items: Topic[];
  onSelect: (item: string) => void;
};

function Menu({ items, onSelect }: Props) {
  return (
    <>
      <h3 className="menu-heading">Menu</h3>
      {items.map((item) => (
        <div className="menu-items" key={item.id}>
          <div onClick={() => onSelect(item.title)} className="menu-item">
            {item.title}
          </div>
        </div>
      ))}
    </>
  );
}
