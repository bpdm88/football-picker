const FormField = ({ name, label, type, handleChange, value, min, max }) => {
    return (
        <div>
            <label className="heading-charlie" htmlFor={name}>
                {label}
            </label>
            <input
                className="heading-charlie"
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
