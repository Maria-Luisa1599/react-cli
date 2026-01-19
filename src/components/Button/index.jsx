import { ButtonContainer } from './styles'
import './style.css';

 const Button = ({title, variant="primary", onClick, className }) => {
  return (
    <ButtonContainer className={className} variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}

export default Button;