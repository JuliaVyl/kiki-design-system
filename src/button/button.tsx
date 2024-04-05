import { PropsWithChildren } from 'react';
import { IButton } from './button.types';
import { buttonStyle } from './button.styles';

export const Button: React.FC<PropsWithChildren<IButton>> = ({
  children,
  onClick,
  variant = 'primary',
  size = 's',
}) => {
  return (
    <button className={buttonStyle({ variant, size })} onClick={onClick}>
      {children}
    </button>
  );
};
