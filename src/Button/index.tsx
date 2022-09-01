import * as React from 'react';
import classNames from 'classnames';

import './style/index.less';
// import { tuple } from '../_util/type';

// // Insert one space between two chinese characters automatically.
// function insertSpace(child: React.ReactChild, needInserted: boolean) {
//   // Check the child if is undefined or null.
//   if (child == null) {
//     return;
//   }
//   const SPACE = needInserted ? ' ' : '';
//   // strictNullChecks oops.
//   if (
//     typeof child !== 'string' &&
//     typeof child !== 'number' &&
//     isString(child.type) &&
//     isTwoCNChar(child.props.children)
//   ) {
//     return cloneElement(child, {
//       children: child.props.children.split('').join(SPACE),
//     });
//   }
//   if (typeof child === 'string') {
//     return isTwoCNChar(child) ? <span>{child.split('').join(SPACE)}</span> : <span>{child}</span>;
//   }
//   if (isReactFragment(child)) {
//     return <span>{child}</span>;
//   }
//   return child;
// }

// function spaceChildren(children: React.ReactNode, needInserted: boolean) {
//   let isPrevChildPure: boolean = false;
//   const childList: React.ReactNode[] = [];
//   React.Children.forEach(children, (child) => {
//     const type = typeof child;
//     const isCurrentChildPure = type === 'string' || type === 'number';
//     if (isPrevChildPure && isCurrentChildPure) {
//       const lastIndex = childList.length - 1;
//       const lastChild = childList[lastIndex];
//       childList[lastIndex] = `${lastChild}${child}`;
//     } else {
//       childList.push(child);
//     }

//     isPrevChildPure = isCurrentChildPure;
//   });

//   // Pass to React.Children.map to auto fill key
//   return React.Children.map(childList, (child) =>
//     insertSpace(child as React.ReactChild, needInserted),
//   );
// }

// const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed');

// export type ButtonType = typeof ButtonTypes[number];

// const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
// export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
  type?: 'default' | 'primary' | 'ghost' | 'dashed';
}

// export type AnchorButtonProps = {
//   href: string;
//   target?: string;
//   onClick?: React.MouseEventHandler<HTMLElement>;
// } & BaseButtonProps &
//   Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
  htmlType?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps>;

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
  // Group: typeof Group;
  // __ANT_BUTTON: boolean;
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  {
    type = 'default',
    className,
    children,
    htmlType = 'button' as ButtonProps['htmlType'],
    onClick,
    disabled,
    ...rest
  },
  ref,
) => {
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();

  const prefixCls = 'ant-btn';

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
    },
    className,
  );

  // const kids =
  //   children || children === 0
  //     ? spaceChildren(children, isNeedInserted() && autoInsertSpace)
  //     : null;

  const kids = children || children === 0 ? children : null;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e);
  };

  return (
    <button
      {...(rest as NativeButtonProps)}
      type={htmlType}
      className={classes}
      onClick={handleClick}
      ref={buttonRef}
    >
      {/* {iconNode} */}
      {kids}
    </button>
  );
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent;

Button.displayName = 'Button';

export default Button;
