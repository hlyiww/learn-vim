# 在单文件中更快移动

## 滚动

- 向下滚动一屏: ctrl + f (forward)
- 向上滚动一屏: ctrl + b (backward)
- 向下滚动半屏: ctrl + d
- 向上滚动半屏: ctrl + u
- 向下滚动一行: ctrl + e
- 向上滚动一行: ctrl + y

## 滚动 —— 个性化配置

- 向上 5 行: shift + k
- 向下 5 行: shift + j

```jsonc
// 可视化模式
{
  // ...
  "vim.visualModeKeyBindings": [
    {
      "before": ["J"],
      "after": ["5", "j"]
    },
    {
      "before": ["K"],
      "after": ["5", "k"]
    }
  ]
  // ...
}
```

## 将当前行置于屏幕中央

- zz

## 将当前行置于屏幕顶部附近

- zt

## 将当前行置于屏幕底部

- zb

## 跳到文件首

- gg

## 跳到文件尾

- G

## 跳转到指定行

- 行数 + gg
- 行数 + G
