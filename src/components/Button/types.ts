export interface IButton {
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export interface IButtonStyled {
  variant?: 'primary' | 'secondary';
}
