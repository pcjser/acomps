import * as React from 'react';
import classNames from 'classnames';

export interface CheckableTagProps {
  className?: string;
  style?: React.CSSProperties;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const CheckableTag: React.FC<CheckableTagProps> = ({
  className,
  checked,
  onChange,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    onChange?.(!checked);
    onClick?.(e);
  };

  const prefixCls = 'ant-tag';

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-checkable`]: true,
      [`${prefixCls}-checkable-checked`]: checked,
    },
    className,
  );

  return <span {...props} className={cls} onClick={handleClick} />;
};

export default CheckableTag;
