const FormField = ({
    name,
    label,
    type,
    handleChange,
    value,
    min,
    max,
    className,
}) => {
    return (
        <div>
            <label className={className} htmlFor={name}>
                {label}
            </label>
            <input
                className={className}
                id={name}
                type={type}
                onChange={handleChange}
                value={value}
                min={min}
                max={max}
            />
        </div>
    );
};

export default FormField;
