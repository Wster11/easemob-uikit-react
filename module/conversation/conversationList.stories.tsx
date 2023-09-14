import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConversationList } from './index';
import rootStore from '../store';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Container/ConversationList',
  component: ConversationList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ConversationList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConversationList> = args => <ConversationList {...args} />;

rootStore.conversationStore.setConversation([
  {
    chatType: 'singleChat',
    conversationId: 'user2',
    name: 'Henry',
    unreadCount: 3,
    lastMessage: {
      id: '1',
      type: 'txt',
      msg: 'hello',
      chatType: 'singleChat',
      from: 'user1',
      to: 'user2',
      time: Date.now(),
    },
  },
  {
    chatType: 'singleChat',
    conversationId: '1111',
    name: 'Tony',
    unreadCount: 0,
    lastMessage: {
      id: '1',
      type: 'txt',
      msg: 'hello',
      chatType: 'singleChat',
      from: 'user1',
      to: 'user2',
      time: Date.now(),
    },
  },
]);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
