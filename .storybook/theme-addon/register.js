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
      <Global
        styles={{
          [`#storybook-preview-iframe`]: {
            margin: `auto`,
            transition: 'width .3s, height .3s',
            position: 'relative',
            border: `1px solid black`,
            boxShadow:
              '0 0 100px 1000px rgba(0,0,0,0.5), 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
          },
          [`#storybook-preview-wrapper`]: {
            padding: theme.layoutMargin,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            overflow: 'auto',

            display: 'grid',
            gridTemplateColumns: '100%',
            gridTemplateRows: '100%',
          },
        }}
      />
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
