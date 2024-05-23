# Paintartisan

我是一个粉刷匠，粉刷本领强。

## 使用

### `tailwindPluginEllipsis`

tailwindcss 的文本溢出省略样式插件。

引入：

```js
// tailwind.config.js
import { tailwindPluginEllipsis } from 'paintartisan'

export default {
  plugins: [
		tailwindPluginEllipsis
	],
}
```

单行：

```html
<div class="ellipsis">content</div>
```

多行：

```html
<div class="ellipsis-3">content</div>
```
