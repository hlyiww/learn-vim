# 替换字符

## 替换命令

### 公式

`:[range]s/{pattern}/{string}/[flags]`：`[]` 是可选的

### 详情

`range`

- $ 到尾部
- % 全文
- number,number —— 起始行,结束行

`flag`

- g
- c

`可视化模式下无需指定范围，此时范围就是选中的区域`

## 多选操作

- gb —— 区分大小写
