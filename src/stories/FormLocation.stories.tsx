import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormLocation } from '../component/form/form-location/FormLocation';

export default {
    title: 'Display/FormLocation',
    component: FormLocation,

} as ComponentMeta<typeof FormLocation>;

const Template: ComponentStory<typeof FormLocation> = (args) => <FormLocation {...args} />;

export const Default = Template.bind({});
Default.args = {
    labelText: 'location'
};
