import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import { useAddonState } from '@storybook/api';

export default makeDecorator({
  name: 'withMyAddon',
  parameterName: 'myParameter',
  // This means don't run this decorator if the notes decorator is not set
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();
    //const [theme] = useAddonState('my/addon/panel', '');

    //console.log(theme);

    // Our API above sets the notes parameter to a string,
    // which we send to the channel
    channel.emit('my/customEvent', parameters);
    // we can also add subscriptions here using channel.on('eventName', callback);

    return <>{getStory(context)}teste</>;
  },
});
