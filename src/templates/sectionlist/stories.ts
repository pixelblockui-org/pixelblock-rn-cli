import { Meta, StoryObj } from '@storybook/react';
import { SectionList } from './SectionList';
import { Text } from 'react-native';

const meta: Meta<typeof SectionList> = {
  component: SectionList,
  args: {
    sections: [
      { title: 'Section 1', data: ['Item 1', 'Item 2'] },
      { title: 'Section 2', data: ['Item 3', 'Item 4'] },
    ],
    renderItem: ({ item }) => <Text>{item}</Text>,
    renderSectionHeader: ({ section }) => <Text>{section.title}</Text>,
  },
};
export default meta;

type Story = StoryObj<typeof SectionList>;
export const Default: Story = {};