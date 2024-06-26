export interface IButton {
  variant?: Variant;
  size?: Size;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

type Variant = 'primary' | 'secondary';

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
