import * as React from 'react';
import classNames from 'classnames';

import CheckableTag from './CheckableTag';

import './style/index.less';
// import { PresetColorTypes, PresetStatusColorTypes } from '../_util/colors';

// const PresetColorRegex = new RegExp(`^(${PresetColorTypes.join('|')})(-inverse)?$`);
// const PresetStatusColorRegex = new RegExp(`^(${PresetStatusColorTypes.join('|')})$`);

// const isPresetColor = (color: string | undefined): boolean => {
//   if (!color) {
//     return false;
//   }
//   return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
// };

// export { CheckableTagProps } from './CheckableTag';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefixCls?: string;
  className?: string;
  // color?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

export interface TagType
  extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {
  CheckableTag: typeof CheckableTag;
}

const InternalTag: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = (
  {
    prefixCls: customizePrefixCls,
    className,
    style,
    // color,
    children,
    icon,
    ...props
  },
  ref,
) => {
  const tagProps = {
    // 处理props
    ...props,
  };
  // const presetColor = isPresetColor(color);
  const prefixCls = 'ant-tag';
  const tagClassName = classNames(
    // 处理classname
    prefixCls,
    // {
    //   [`${prefixCls}-${color}`]: presetColor,
    // },
    className,
  );
  const tagStyle = {
    // 处理样式
    // backgroundColor: color && !isPresetColor(color) ? color : undefined,
    // backgroundColor: color ? color : undefined,
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
    <span {...tagProps} ref={ref} className={tagClassName} style={tagStyle}>
      {kids}
    </span>
  );
};

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(InternalTag) as TagType;

Tag.displayName = 'Tag';

Tag.CheckableTag = CheckableTag;

export default Tag;
