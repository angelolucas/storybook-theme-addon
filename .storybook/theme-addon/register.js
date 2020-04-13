import React, { useState } from 'react';
import { addons, types } from '@storybook/addons';

const ChangeThemeTool = () => {
  const storedTheme = localStorage.getItem('design-box-theme');
  const [theme, setTheme] = useState(storedTheme);
  const channel = addons.getChannel();
  const handleChange = themeName => {
    localStorage.setItem('design-box-theme', themeName);
    channel.emit('design-box/theme', themeName);
    setTheme(themeName);
  };

  return (
    <>
      <p>theme: {theme}</p>
      <button onClick={() => handleChange('clean')}>default</button>
      <button onClick={() => handleChange('dark')}>dark</button>
    </>
  );
};

// Register the addon with a unique name.
addons.register('design-box/change-theme', api => {
  // Also need to set a unique name to the panel.
  addons.add('design-box/change-theme', {
    title: 'Theme',
    type: types.TOOL,
    render: () => <ChangeThemeTool />,
  });
});
