'use client';
import React from 'react';
import { textPropType } from '../../lib/types/global';

export const Text: React.FC<textPropType> = ({
  style,
  children,
  clickFunc,
  as,
}: textPropType) => {
  const Component: React.FC<textPropType> = ({
    as,
    style,
    clickFunc,
    children,
  }) => {
    const Element = as ? as : 'div';
    return React.createElement(
      Element,
      { className: style, onClick: clickFunc },
      children
    );
  };
  if (as) {
    return (
      <Component style={style} clickFunc={clickFunc} as={as} children={children} />
    );
  } else {
    return (
      <h6 className={style} onClick={clickFunc}>
        {children}
      </h6>
    );
  }
};