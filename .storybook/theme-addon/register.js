import React from 'react';
import { addons, types } from '@storybook/addons';
import {
  useAddonState,
  useParameter,
  useStorybookState,
  useChannel,
} from '@storybook/api';
import { styled, Global, Theme, withTheme } from '@storybook/theming';
import { STORY_CHANGED } from '@storybook/core-events';
import { AddonPanel } from '@storybook/components';
//console.log({ addons });

const MyPanel = () => {
  const [theme, setTheme] = useAddonState('my/addon/panel', 'clean');
  const channel = addons.getChannel();
  channel.on('change/setTheme', setTheme);

  return (
    <>
      <p>theme: {theme}</p>
      <button onClick={() => channel.emit('change/setTheme', 'clean')}>
        default
      </button>
      <button onClick={() => channel.emit('change/setTheme', 'dark')}>
        dark
      </button>
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
