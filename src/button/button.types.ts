export interface IButton {
  variant?: Variant;
  size?: Size;
  onClick: () => void;
}

type Variant = 'primary' | 'secondary';

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
