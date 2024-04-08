import { PropsWithChildren } from 'react';
import { IButton } from './button.types';
import { buttonStyle } from './button.styles';

export const Button: React.FC<PropsWithChildren<IButton>> = ({
  children,
  onClick,
  variant = 'primary',
  size = 's',
  disabled = false,
  className,
}) => {
  return (
    <button
      className={buttonStyle({ variant, size, disabled, className })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
