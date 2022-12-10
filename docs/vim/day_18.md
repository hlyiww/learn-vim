# 调用 Vscode 的命令

## 格式化文档

```jsonc
// format document
"vim.normalModeKeyBindingsNonRecursive": [
  // ...
  {
    "before": ["<Leader>", "f", "d"],
    "commands": ["editor.action.formatDocument"]
  },
]
```

## 重命名

```jsonc
"vim.normalModeKeyBindingsNonRecursive": [
  // ...
  {
    "before": ["<Leader>", "r", "n"],
    "commands": ["editor.action.rename"]
  },
]
```

## 折叠代码

```jsonc

"vim.normalModeKeyBindingsNonRecursive": [
  // ...
  {
    "before": ["<Leader>", "["],
    "commands": [
      {
        "command": "editor.fold"
      },
      {
        "command": "vim.remap",
        "args": {
          "after": ["$", "%"]
        }
      }
    ]
  },
]
```
