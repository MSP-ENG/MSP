import React from 'react';

export function FormInput({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helperText,
  className = '',
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={id || name} className="text-xs font-bold text-on-surface uppercase tracking-wider">
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <input
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 bg-surface-container-lowest border rounded text-sm md:text-base text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 transition-all ${
          error
            ? 'border-error focus:ring-error/20 focus:border-error'
            : 'border-outline-variant focus:border-primary focus:ring-primary/20'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-error mt-0.5">{error}</span>}
      {!error && helperText && <span className="text-xs text-on-surface-variant mt-0.5">{helperText}</span>}
    </div>
  );
}

export function FormSelect({
  label,
  id,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error,
  className = '',
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={id || name} className="text-xs font-bold text-on-surface uppercase tracking-wider">
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <select
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 bg-surface-container-lowest border rounded text-sm md:text-base text-on-surface focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
          error
            ? 'border-error focus:ring-error/20 focus:border-error'
            : 'border-outline-variant focus:border-primary focus:ring-primary/20'
        } ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value || opt} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-error mt-0.5">{error}</span>}
    </div>
  );
}

export function FormTextarea({
  label,
  id,
  name,
  rows = 4,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  className = '',
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={id || name} className="text-xs font-bold text-on-surface uppercase tracking-wider">
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <textarea
        id={id || name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 bg-surface-container-lowest border rounded text-sm md:text-base text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 transition-all resize-y ${
          error
            ? 'border-error focus:ring-error/20 focus:border-error'
            : 'border-outline-variant focus:border-primary focus:ring-primary/20'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-error mt-0.5">{error}</span>}
    </div>
  );
}
