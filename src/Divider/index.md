---
title: Divider 分割线
nav:
  title: 组件
  path: /components
group:
  path: /components
---

# Tag 标签

进行标记和分类的小标签。

## 何时使用

```jsx
import React from 'react';
import { Button, Divider } from 'acomps';

const Demo = () => (
  <>
    <Button onClick={console.log}>点我</Button>
    <Divider style={{ margin: 10 }} />
    <Button type="primary" onClick={console.log}>
      点我
    </Button>
  </>
);

export default Demo;
```

<API></API>
