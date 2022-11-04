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
