import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "@app/components/Loader/Loader";
import { IconAndMessage } from "@app/components/IconAndMessage/IconAndMessage";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import styles from "./IconAndMessage.module.scss";

const meta = {
  title: "Components/IconAndMessage",
  component: IconAndMessage,
} satisfies Meta<typeof IconAndMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <QuestionMarkIcon className={styles.test} />,
    message: "Testing, is this thing working?",
  },
};
