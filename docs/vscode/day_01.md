# 操作文件

## 切换到 files explorer 区域

思路是首先在 Keyboard Shortcuts 里面找到 VScode 中的既有快捷键，比如这里的需求就搜索 `Show Explorer`，找到后再对改快捷键进行映射，方便实际的实用

```jsonc
// keybindings.json
{
  "key": "ctrl+;",
  "command": "workbench.view.explorer",
  "when": "viewContainer.workbench.view.explorer.enabled"
}
```

## 切换到 editor 区域

```jsonc
{
  "key": "ctrl+'",
  "command": "workbench.action.focusFirstEditorGroup"
}
```

## 移动光标

- hjkl

## 折叠/展开

- h
- l

## 创建文件

- `a`：在 files Explorer
- `leader n f`：在 editor
- `cmd + n`: Vscode 快捷键
- 使用插件 file Utils

```jsonc
// keybindings.json
{
  "key": "a",
  "command": "explorer.newFile",
  "when": "filesExplorerFocus && !inputFocus"
},

// settings.josn
"vim.normalModeKeyBindingsNonRecursive": [
  //...
  {
    "before": ["<leader>", "n", "f"],
    "commands": ["explorer.newFile"]
  },
]

```

## 创建文件夹

```jsonc
// keybinding.json
{
  "key": "shift+a",
  "command": "explorer.newFolder",
  "when": "filesExplorerFocus && !inputFocus"
}

// settings.json
"vim.normalModeKeyBindingsNonRecursive": [
  //...
  {
    "before": ["<leader>", "n", "d"],
    "commands": ["explorer.newFolder"]
  },
],
```

## 重命名

```jsonc
{
  "key": "r",
  "command": "renameFile",
  "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
},
```

## 删除文件

```jsonc
{
  "key": "d",
  "command": "deleteFile",
  "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
}
```
