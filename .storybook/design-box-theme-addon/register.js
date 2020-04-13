import React, { useState, useEffect } from 'react';
import { addons, types } from '@storybook/addons';
import { styled } from '@storybook/theming';
import { useParameter } from '@storybook/api';
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from '@storybook/components';

const IconButtonWithLabel = styled(IconButton)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s2 - 1,
  padding: 10,
}));

const IconButtonLabel = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  marginRight: 10,
}));

const ChangeThemeTool = () => {
  const storedTheme = localStorage.getItem('design-box-theme');
  const [theme, setTheme] = useState(storedTheme);
  const channel = addons.getChannel();
  const handleChange = themeName => {
    localStorage.setItem('design-box-theme', themeName);
    channel.emit('design-box/theme', themeName);
    setTheme(themeName);
  };
  const themes = useParameter('designboxThemes');
  const links = closeTooltip =>
    themes.values.map((theme, key) => ({
      key: key,
      title: theme,
      onClick: () => {
        handleChange(theme);
        closeTooltip();
      },
    }));

  useEffect(() => {
    if (themes && !storedTheme) {
      const initialTheme = themes.default || themes.values[0];
      localStorage.setItem('design-box-theme', initialTheme);
      handleChange(initialTheme);
    }
  }, [themes]);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={({ onHide }) => <TooltipLinkList links={links(onHide)} />}
    >
      <IconButtonWithLabel title="Change the theme">
        <IconButtonLabel>{theme} theme</IconButtonLabel>
        <Icons icon="arrowdown" />
      </IconButtonWithLabel>
    </WithTooltip>
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
