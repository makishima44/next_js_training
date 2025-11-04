import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

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

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "PrimaryDisabled",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    children: "SecondaryDisabled",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
  },
};

export const TertiaryDisabled: Story = {
  args: {
    variant: "tertiary",
    disabled: true,
    children: "TertiaryDisabled",
  },
};
