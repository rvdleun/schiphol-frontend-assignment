import type { Meta, StoryObj } from "@storybook/react";
import { FlightList } from "@app/components/FlightList/FlightList";
import { flightFactory } from "@app/interfaces/flight.interface.factory";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/FlightList",
  component: FlightList,
} satisfies Meta<typeof FlightList>;

export default meta;
type Story = StoryObj<typeof meta>;

flightFactory.resetSequenceNumber();
export const Primary: Story = {
  args: {
    flights: flightFactory.buildList(5),
  },
};

export const EmptyFlightList: Story = {
  args: {
    flights: [],
  },
};

export const NoFlightsPassed: Story = {};
