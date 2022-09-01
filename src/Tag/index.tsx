import * as React from 'react';
import classNames from 'classnames';
import CheckableTag from './CheckableTag';

import './style/index.less';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

export interface TagType
  extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {
  CheckableTag: typeof CheckableTag;
}

const InternalTag: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = (
  { prefixCls: customizePrefixCls, className, style, children, icon, ...props },
  ref,
) => {
  const tagProps = {
    // 处理props
    ...props,
  };
  const prefixCls = 'ant-tag';
  const classes = classNames(
    // 处理classname
    prefixCls,
    className,
  );
  const tagStyle = {
    // 处理样式
    ...style,
  };

  // 处理子节点
  const kids = icon ? (
    <>
      {icon}
      <span>{children}</span>
    </>
  ) : (
    children
  );

  return (
    <span {...tagProps} ref={ref} className={classes} style={tagStyle}>
      {kids}
    </span>
  );
};

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(InternalTag) as TagType;

Tag.displayName = 'Tag';

Tag.CheckableTag = CheckableTag;

export default Tag;
