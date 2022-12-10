# 掌握窗口的管理

## 新建窗口

- `ctrl w v` 左右切分

- `ctrl w s` 上下切分

## 窗口切换

- `ctrl w hjkl`

## 窗口互换

- `ctrl w w`

## 关闭窗口

- `ctrl + w + c`
- `cmd + k + w` 利用 VScode 的快捷键，关闭所有窗口

## 保留当前窗口，关闭其他所有的窗口

- `ctrl + w + o`

## 扩展，利用 Vscode 快捷键

新建窗口

- cmd + \
- cmd + ctrl + \

关闭窗口

- cmd + w
- cmd + k + w

窗口切换

- shift + 方向键
- 没改键的话使用 shift + ctrl + hjkl

```jsonc
// keybindings.json
// window move left
{
  "key": "shift+left",
  "command": "vim.remap",
  "when": "vim.mode == 'Normal'",
  "args": {
    "after": ["<c-w>", "h"]
  }
},

// window move right
{
  "key": "shift+right",
  "command": "vim.remap",
  "when": "vim.mode == 'normal'",
  "args": {
    "after": ["<c-w>", "l"]
  }
},

// window move up
{
  "key": "shift+up",
  "command": "vim.remap",
  "when": "vim.mode == 'normal'",
  "args": {
    "after": ["<c-w>", "k"]
  }
},

// window move down
{
  "key": "shift+down",
  "command": "vim.remap",
  "when": "vim.mode == 'normal'",
  "args": {
    "after": ["<c-w>", "j"]
  }
},
```
