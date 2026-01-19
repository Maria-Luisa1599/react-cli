import { ButtonContainer } from './styles';
import { IButton } from './types';

const Button = ({
  title,
  variant = 'primary',
  onClick,
  className,
}: IButton) => {
  return (
    <ButtonContainer
      className={className}
      variant={variant}
      onClick={onClick}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
