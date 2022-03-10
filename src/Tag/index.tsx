import * as React from 'react';
import classNames from 'classnames';
import { PresetColorTypes, PresetStatusColorTypes } from '../_util/colors';

const PresetColorRegex = new RegExp(`^(${PresetColorTypes.join('|')})(-inverse)?$`);
const PresetStatusColorRegex = new RegExp(`^(${PresetStatusColorTypes.join('|')})$`);

const isPresetColor = (color: string | undefined): boolean => {
  if (!color) {
    return false;
  }
  return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
};

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefixCls?: string;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  // icon?: React.ReactNode;
}

export interface TagType
  extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {
  // CheckableTag: object;
}

const InternalTag: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = (
  {
    prefixCls: customizePrefixCls,
    className,
    style,
    color,
    children,
    // icon
    ...props
  },
  ref,
) => {
  const tagProps = {
    // 处理props
    ...props,
  };
  const presetColor = isPresetColor(color);
  const prefixCls = 'ant-tag';
  const tagClassName = classNames(
    // 处理classname
    prefixCls,
    {
      [`${prefixCls}-${color}`]: presetColor,
    },
    className,
  );
  const tagStyle = {
    // 处理样式
    backgroundColor: color && !isPresetColor(color) ? color : undefined,
    ...style,
  };

  const kids = children; // 处理子节点

  return (
    <span {...tagProps} ref={ref} className={tagClassName} style={tagStyle}>
      {kids}
    </span>
  );
};

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(InternalTag) as TagType;

Tag.displayName = 'Tag';

export default Tag;
