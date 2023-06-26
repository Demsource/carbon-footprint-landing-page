import Header from "./Header";

export default {
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    sectionNavList: {
      names: { control: "object" },
      ids: { control: "object" },
    },
  },
};

export const Default = {};
