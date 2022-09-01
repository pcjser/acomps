import * as React from 'react';
import classNames from 'classnames';

export interface BaseDividerProps {
  type?: 'horizontal' | 'vertical';
  orientation?: 'left' | 'right' | 'center';
  dashed?: boolean;
  plain?: boolean;
  // className?: string;
}

export type DividerProps = BaseDividerProps & Omit<React.HTMLAttributes<any>, ''>;

// console.log(DividerProps);

const Divider: React.FC<DividerProps> = ({
  type = 'horizontal',
  orientation = 'center',
  dashed,
  plain,
  children,
  className,
  style,
}) => {
  const prefixCls = 'ant-divider';

  const orientationPrefix = orientation.length > 0 ? `-${orientation}` : orientation;

  const classes = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: !!children,
      [`${prefixCls}-with-text${orientationPrefix}`]: !!children,
      [`${prefixCls}-dashed`]: !!dashed,
      [`${prefixCls}-plain`]: !!plain,
    },
    className,
  );

  const kids = children;
  return (
    <div className={classes} style={style}>
      {kids}
    </div>
  );
};

export default Divider;
