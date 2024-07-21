import React, { useState } from 'react';

const menuData = {
  "Home": null,
  "Purchase Orders": {
    "View Purchase Order": null,
    "Create Purchase Order": null
  },
  "Inventory": {
    "Stores": null,
    "Warehouses": null
  }
};

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="sidebar">
      {Object.entries(menuData).map(([item, subitems]) => (
        <div key={item}>
          <button 
            onClick={() => setActiveItem(item === activeItem ? null : item)}
            className={item === activeItem ? 'active' : ''}
          >
            {item}
          </button>
          {subitems && item === activeItem && (
            <ul>
              {Object.keys(subitems).map(subitem => (
                <li key={subitem}>
                  <a href="#">{subitem}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;