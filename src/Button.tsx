
// define button properties
interface ButtonProperties {
    id ?: string,
    buttonLabel : string,
    type ?: "primary" | "secondary",
    idDestination ?: string,
    styles ?: string,
    disabled ?: boolean
    click : ( id : string) => void
}

const Button = ({ id = "", buttonLabel, type = "primary", idDestination = "", click, styles = "", disabled = false }: ButtonProperties) => {
    const handleClick = () => {
        click(idDestination);
    };

    // strucutre out tailwind styles
    const styleTypes  = {
        "primary" : "rounded-2xl bg-blue-500 text-slate-50 border-none hover:scale-95 hover:bg-blue-400 ",
        "secondary" : "bg-slate-100 text-gray-800 border-none hover:bg-slate-200 hover:underline hover:underline-offset-8 rounded-none py-6 "
    }

    const finalStyle : string = styleTypes[type] + styles;

    return (
    <button
        id = {id}
        className = {finalStyle}
        disabled = {disabled}
        onClick = {handleClick}
    >
        {buttonLabel}
    </button>
    );
}

export default Button;