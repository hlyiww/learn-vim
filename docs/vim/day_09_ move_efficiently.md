# 更高效的移动

借助两个默认集成的插件来实现更高效的移动

## 开启插件

```jsonc
// settings.json
"vim.easymotion": true,
"vim.sneak": true,
"vim.leader": "<Space>"
```

## vim-easymotion

- `<leader><leader>w`: start of word forwards
- `<leader><leader>b`: start of word backwards
- `<leader><leader>e`: end of word forwards 
- `<leader><leader>ge`: end of word backwards
- `<leader><leader>l`: 向下匹配更多的内容 
- `<leader><leader>h`: 向上匹配更多的内容

## vim-sneak

```jsonc
// 改键替换原生的 f 功能
"vim.operatorPendingModeKeyBindingsNonRecursive": [
  {
    "before": ["f"],
    "after": ["z"]
  },
  {
    "before": ["F"],
    "after": ["Z"]
  }
],
"vim.visualModeKeyBindingsNonRecursive": [
  {
    "before": ["f"],
    "after": ["s"]
  },
],
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["f"],
    "after": ["s"]
  },
  {
    "before": ["F"],
    "after": ["S"]
  },
  {
    "before": ["s"],
    "after": ["c", "l"]
  },
  {
    "before": ["S"],
    "after": ["^", "C"]
  }
],
```

- `s`: 删除光标所在字符并进入 INSERT 模式
- `S`: 删除当前行到非 blank 字符