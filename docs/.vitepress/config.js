import { defineConfig } from 'vitepress'

const sidebar = [
  {
    text: '起源',
    items: [{ text: '前言', link: '/index.md' }],
  },
  {
    text: 'Vim 篇',
    items: [
      { text: 'Day01 —— 存活下去', link: '/vim/day_01_ surviving.md' },
      {
        text: 'Day02 —— 掌握行相关的命令',
        link: '/vim/day_02_command.md',
      },
      {
        text: 'Day03 —— 掌握 vim 的语法',
        link: '/vim/day_03_grammer.md',
      },
      {
        text: 'Day04 —— 单字符',
        link: '/vim/day_04_single_character.md',
      },
      {
        text: 'Day05 —— 掌握可视化模式',
        link: '/vim/day_05_visual.md',
      },
      {
        text: 'Day06 —— 文本对象',
        link: '/vim/day_06_text.md',
      },
      {
        text: 'Day07 —— 在单文件中更快移动',
        link: '/vim/day_07_move_faster',
      },
      {
        text: 'Day08 —— 掌握搜索命令',
        link: '/vim/day_08_search.md',
      },
      {
        text: 'Day09 —— 更高效的移动',
        link: '/vim/day_09_move_efficiently.md',
      },
      {
        text: 'Day10 —— 认识数字&点的威力',
        link: '/vim/day_10_dot.md',
      },
      {
        text: 'Day11 —— 掌握多文件之间的跳转',
        link: '/vim/day_11_multi_file.md',
      },
      {
        text: 'Day12 —— 处理包裹字符的符号',
        link: '/vim/day_12_signal.md',
      },
      {
        text: 'Day13 —— 替换字符',
        link: '/vim/day_13_change.md',
      },
      {
        text: 'Day14 —— 掌握悬浮显示 & 大小写 & 注释',
        link: '/vim/day_14.md',
      },
      {
        text: 'Day15 —— 掌握窗口的管理',
        link: '/vim/day_15.md',
      },
      {
        text: 'Day16 —— 删除函数',
        link: '/vim/day_16.md',
      },
      {
        text: 'Day17 —— 掌握宏',
        link: '/vim/day_17.md',
      },
      {
        text: 'Day18 —— 调用 Vscode 的命令',
        link: '/vim/day_18.md',
      },
    ],
  },
  {
    text: 'Vscode 篇',
    items: [
      { text: 'Day01 —— 操作文件', link: 'vscode/day_01.md' },
      { text: 'Day02 —— 操作多个 vscode 窗口', link: 'vscode/day_02.md' },
      { text: 'Day03 —— 掌握搜索', link: 'vscode/day_03.md' },
    ],
  },
]

const themeConfig = {
  logo: '/vim.svg',
  socialLinks: [
    { icon: 'github', link: 'https://github.com/hlyiww/learn-vim' },
  ],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2022-present Luckept',
  },
  sidebar,
}

export default defineConfig({
  title: 'Learn Vim',
  themeConfig,
  base: '/learn-vim/',
})
