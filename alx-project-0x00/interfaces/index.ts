export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full' | 'rounded-lg' | 'rounded-none';
}
