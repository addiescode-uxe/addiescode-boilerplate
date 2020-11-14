import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HelloProps, HelloButton } from './HelloButton';

export default {
  title: 'Button',
  component: HelloButton,
  decorators: [withKnobs],
} as Meta;

const Template: Story<HelloProps> = args => <HelloButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Confirmed = Template.bind({});
Confirmed.args = {
  color: 'green',
};

export const Italic = Template.bind({});
Italic.args = {
  italic: 'italic',
};

export const Underline = Template.bind({});
Underline.args = {
  underline: 'underline',
};
