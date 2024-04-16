import { Meta, StoryObj } from '@storybook/angular';

import { UserComponent } from './user.component';

type ComponentWithCustomControls = UserComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/User',
  component: UserComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `User` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const User: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
