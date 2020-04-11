import React from 'react';
import { addons, types } from '@storybook/addons';
import { useAddonState, useStorybookState, useChannel } from '@storybook/api';
import { STORY_CHANGED } from '@storybook/core-events';
import { AddonPanel } from '@storybook/components';
//console.log({ addons });

const MyPanel = () => {
  const [theme, setTheme] = useAddonState('my/addon/panel', 'default');

  return (
    <>
      <p>theme: {theme}</p>
      <select>
        <option onClick={() => setTheme('default')}>default</option>
        <option onClick={() => setTheme('dark')}>dark</option>
      </select>
    </>
  );
};

// Register the addon with a unique name.
addons.register('my/addon/panel', api => {
  // Also need to set a unique name to the panel.
  addons.add('my/addon/panel', {
    title: 'My Addon',
    type: types.TOOL,
    render: () => <MyPanel />,
  });
});
