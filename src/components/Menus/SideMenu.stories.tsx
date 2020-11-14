import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SideMenuProps, SideMenu } from './SideMenu';

export default {
  title: 'SideMenu',
  component: SideMenu,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<SideMenuProps> = args => <SideMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true,
};
