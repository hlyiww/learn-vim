import { defineConfig } from "vitepress";

const sidebar = [
  {
    text: "起源",
    items: [{ text: "前言", link: "/index.md" }],
  },
  {
    text: "Vim 篇",
    items: [
      { text: "Day01 —— 存活下去", link: "/vim/day_01_ surviving.md" },
      {
        text: "Day02 —— 掌握行相关的命令",
        link: "/vim/day_02_command.md",
      },
      {
        text: "Day03 —— 掌握 vim 的语法",
        link: "/vim/day_03_grammer.md",
      },
      {
        text: "Day04 —— 单字符",
        link: "/vim/day_04_single_character.md",
      },
    ],
  },
];

const themeConfig = {
  logo: "/vim.svg",
  socialLinks: [
    { icon: "github", link: "https://github.com/hlyiww/learn-vim" },
  ],
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2022-present Luckept",
  },
  sidebar,
};

export default defineConfig({
  title: "Learn Vim",
  themeConfig,
  base: "/learn-vim/",
});
