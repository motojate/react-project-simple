import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Pagination',
  component: Pagination,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BasicPagination: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    onPageChange: (pageNumber) => console.log(`페이지 이동 ${pageNumber}`),
  },
};

