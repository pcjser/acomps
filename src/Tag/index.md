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
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
const { CheckableTag } = Tag;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

class HotTags extends React.Component {
  state = {
    selectedTags: ['Books'],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <>
        <span style={{ marginRight: 8 }}>Categories:</span>
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={(checked) => this.handleChange(tag, checked)}
            icon={<TwitterOutlined />}
          >
            {tag}
          </CheckableTag>
        ))}
      </>
    );
  }
}
export default HotTags;
```
