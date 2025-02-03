
interface FeatureBoxProperties {
    svg ?: string,
    label : string,
    customStyle ?: string
}

const FeatureBox = ({
    svg = "",
    label = "",
    customStyle = "p-4 border-solid border-2 rounded-lg bg-slate-300 hover:bg-slate-400 text-white"
}: FeatureBoxProperties) => {

    let svgFile = <div>{svg}</div>;

    return (
        <div>
            {svgFile}
            <p className = {customStyle}>{label}</p>
        </div>
    )
}

export default FeatureBox;