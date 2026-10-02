import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border";

  const sizeStyles = {
    sm: "text-[0.68rem] px-5 py-2.5 gap-2",
    md: "text-[0.72rem] px-8 py-3.5 gap-2.5",
    lg: "text-[0.78rem] px-10 py-4 gap-3",
  };

  const variantStyles = {
    primary: "bg-[var(--elara-gold)] text-[var(--elara-black)] border-[var(--elara-gold)] hover:bg-[var(--elara-gold-light)] hover:border-[var(--elara-gold-light)] font-medium",
    secondary: "bg-transparent text-[var(--elara-ivory)] border-[rgba(245,240,232,0.3)] hover:border-[var(--elara-gold)] hover:text-[var(--elara-gold)]",
    ghost: "bg-transparent text-[var(--elara-gold)] border-transparent hover:text-[var(--elara-gold-light)] underline-offset-4 hover:underline px-0",
    outline: "bg-transparent text-[var(--elara-charcoal)] border-[var(--elara-charcoal)] hover:bg-[var(--elara-charcoal)] hover:text-[var(--elara-ivory)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={14} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={14} />}
    </button>
  );
}
