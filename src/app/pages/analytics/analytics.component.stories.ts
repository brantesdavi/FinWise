import { Meta, StoryObj } from '@storybook/angular';

import { AnalyticsComponent } from './analytics.component';

type ComponentWithCustomControls = AnalyticsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Analytics',
  component: AnalyticsComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Analytics` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Analytics: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
