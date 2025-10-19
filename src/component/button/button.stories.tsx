import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

// export const PrimaryFocus: Story = {
//   args: {
//     variant: "primary",
//     children: "Primary Button",
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const button = canvas.getByRole("button");
//     button.focus(); // ставим фокус на кнопку
//   },
// };

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Primary Button",
  },
};
