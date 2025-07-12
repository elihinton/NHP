
interface FeatureBoxProperties {
    svg ?: string,
    label : string,
    index : number,
    customStyle ?: string
}

const FeatureBox = ({
    svg = "",
    label = "",
    index = 0,
    customStyle = "p-4 border-solid border-2 rounded-lg bg-slate-300 hover:bg-slate-400 text-white"
}: FeatureBoxProperties) => {

    let svgFile = <div>{svg}</div>;

    return (
        <div key={index}>
            {svgFile}
            <p key={index} className = {customStyle}>{label}</p>
        </div>
    )
}

export default FeatureBox;