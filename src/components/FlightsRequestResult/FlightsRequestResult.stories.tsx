import type { Meta, StoryObj } from "@storybook/react";
import { flightFactory } from "@app/interfaces/flight.interface.factory";
import { FlightsRequestResult } from "@app/components/FlightsRequestResult/FlightsRequestResult";

const meta = {
  title: "Components/FlightsRequestResult",
  component: FlightsRequestResult,
} satisfies Meta<typeof FlightsRequestResult>;

export default meta;
type Story = StoryObj<typeof meta>;

flightFactory.resetSequenceNumber();
export const WithFlights: Story = {
  args: {
    result: {
      flights: flightFactory.buildList(5),
    },
  },
};

export const WithEmptyFlightList: Story = {
  args: {
    result: {
      flights: [],
    },
  },
};

export const HasError: Story = {
  args: {
    result: {
      hasError: true,
    },
  },
};

export const IsLoading: Story = {
  args: {
    result: {
      isLoading: true,
    },
  },
};
