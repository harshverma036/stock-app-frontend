const Input = ({
    className,
    children,
    type,
    name,
    placeholder,
    id,
    label,
    required,
    ...rest
  }) => {
    return (
      <div>
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900 text-left"
        >
          {label}
        </label>
        <div className="">
          <input
            id={id}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            className="block w-full text-black  rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            {...rest}
          />
        </div>
      </div>
    );
  };
  
  Input.defaultProps = {
    id: "name",
    label: "",
    type: "text",
    name: "name",
    required: false,
  };
  
  export default Input;
  