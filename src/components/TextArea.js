import { forwardRef, useEffect, useRef } from "react";

export default function TextArea({ name, className, variant = "primary", autoComplete, required, isFocused, placeholder, isError, defaultValue, color, border, rows = 4, ...props }) {
  const textareaRef = useRef();

  useEffect(() => {
    if (isFocused) {
      textareaRef.current.focus();
    }
  }, [isFocused]);

  return (
    <textarea
      {...props}
      name={name}
      ref={textareaRef}
      className={`rounded-2xl py-[13px] sm:text-[18px] text-[17px] px-7 w-full text-${color} border-2 ${border} bg-transparent hover:border-[#F2B10D] ${className}`}
      autoComplete={autoComplete}
      required={required}
      defaultValue={defaultValue}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  );
}
