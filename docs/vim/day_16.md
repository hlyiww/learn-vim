# 删除函数

## vim-indent-object

- vii 匹配括号里面的内容
- vai 匹配整个函数的内容
- vaI 匹配整个函数的内容，包括最后一个大括号

## 匹配大、中、小括号

- `%`

## 删除函数的方式

- dap 基于段落 text-object
- daI 基于 vim-indent-object
- V$%d 需要改配置进行优化，最终优化为 `<Leader> d f`，使用时在函数名所在行使用即可

```jsonc
// settings.json
// 将 dai 映射为 daI，方便函数的删除操作
"vim.operatorPendingModeKeyBindings": [
  // ...
  {
    "before": ["a", "i"],
    "after": ["a", "I"]
  }
]
"vim.visualModeKeyBindings": [
  // ...
  {
    "before": ["a", "i"],
    "after": ["a", "I"]
  }
]
"vim.normalModeKeyBindings": [
  {
    "before": ["<Leader>", "d", "f"],
    "after": ["V", "$", "%", "d"]
  },
]
```
