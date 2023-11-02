import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export function AppDrawer({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <>
      <div className="image">
        <div onClick={handleMenuClick}>
          <FaBars className={'menu-icon'} />
        </div>
        <div className={isOpen ? 'menu-drawer is-open' : 'menu-drawer'}>
          <Menu items={items} />
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
};

function Menu({ items }: Props) {
  return (
    <>
      <h3 className="menu-heading">Menu</h3>
      {items.map((item) => (
        <div className="menu-items" key={item.id}>
          <div className="menu-item">{item.title}</div>
        </div>
      ))}
    </>
  );
}
