import { JSX } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	elementInside?: JSX.Element | JSX.Element[];
	onClick?: () => void;
};

const Button = ({ elementInside, onClick,  ...props }: ButtonProps) => (
	<button 
		onClick={onClick} 
		{...props}
	>
		{elementInside}
	</button>
);

export default Button;
