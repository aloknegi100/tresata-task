import type { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import './Input.css'

type InputType = 'text' | 'textarea';

interface BaseInputProps {
  type?: InputType;
  error?: string;
}

type InputProps = BaseInputProps & (
  | { type?: 'text' } & InputHTMLAttributes<HTMLInputElement>
  | { type: 'textarea' } & TextareaHTMLAttributes<HTMLTextAreaElement>
);

const Input: FC<InputProps> = ({ 
  type = 'text', 
  error,
  ...props 
}) => {
  const commonClasses = `input-field ${error ? 'input-error' : ''} ${props.className || ''}`;

  const renderInput = () => {
    if (type === 'textarea') {
      const { className, ...textareaProps } = props as TextareaHTMLAttributes<HTMLTextAreaElement>;
      return (
        <textarea
          className={commonClasses}
          {...textareaProps}
        />
      );
    }

    const { className, ...inputProps } = props as InputHTMLAttributes<HTMLInputElement>;
    return (
      <input
        type={type}
        className={commonClasses}
        {...inputProps}
      />
    );
  };

  return (
    <div className="input-container">
      {renderInput()}
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
}

export default Input;