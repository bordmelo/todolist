import React from 'react';

import Tab from './menuTab/Tab';

const MenuTab = () => {
  return (
    <div className="tabs is-fullwidth has-text-weight-bold">
      <ul>
        <Tab
          text="Em progresso"
          quantity={1}
          className={'is-active'}
        />

        <Tab
          text="Finalizada"
          quantity={0}
          className={''}
        />
      </ul>
    </div>
  );
};

export default MenuTab;