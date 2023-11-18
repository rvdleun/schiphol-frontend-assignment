import type { Meta, StoryObj } from "@storybook/react";
import { AirportSearchForm } from "@app/components/AirportSearchForm/AirportSearchForm";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Components/AirportSearchForm",
  component: AirportSearchForm,
} satisfies Meta<typeof AirportSearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithInitialValue: Story = {
  args: {
    initialValue: "LHR",
  },
};
