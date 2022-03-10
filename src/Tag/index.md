---
title: Tag 标签
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
import { Tag } from 'acomps';

export default () => (
  <div>
    <Tag icon={<CheckCircleOutlined />} color="success">
      success
    </Tag>
    <Tag icon={<SyncOutlined spin />} color="processing">
      processing
    </Tag>
    <Tag icon={<CloseCircleOutlined />} color="error">
      error
    </Tag>
    <Tag icon={<ExclamationCircleOutlined />} color="warning">
      warning
    </Tag>
    <Tag icon={<ClockCircleOutlined />} color="default">
      waiting
    </Tag>
    <Tag icon={<MinusCircleOutlined />} color="default">
      stop
    </Tag>
  </div>
);
```
