import type { Meta, StoryObj } from "@storybook/react";
import { FlightList } from "@app/components/FlightList/FlightList";
import { flightFactory } from "@app/interfaces/flight.interface.factory";

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

export const WithDifferentOriginalTime: Story = {
  args: {
    flights: [
      flightFactory.build({ expectedTime: "13:00", originalTime: "12:00" }),
    ],
  },
};

export const EmptyFlightList: Story = {
  args: {
    flights: [],
  },
};

export const NoFlightsPassed: Story = {};
