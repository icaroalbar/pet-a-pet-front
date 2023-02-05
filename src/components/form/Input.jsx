export const Input = ({type, text, name, placeholder, handleOnchange, value, multiple}) => {
    return (
        <div className="flex flex-col">
            <label className="mb-1 mt-4 px-1 font-semibold text-sm" htmlFor={name}>{text}:</label>
            <input
                className="border-gray-400 border rounded-md py-1 px-2"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnchange}
                value={value}
                {...(multiple ? { multiple } : '')}
            />
        </div>
    )
}