import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={{color: theme.color, background: theme.backgroundColor}}>Press me</button>
    </div>
  );
}

export default HeaderButton;
