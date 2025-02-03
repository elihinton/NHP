
interface OpenHourProperties {
    daysAndTimes : Array<string>
    customStyle ?: string
}

const OpenHours : React.FC<OpenHourProperties> = ({daysAndTimes,customStyle = "text-gray-700 font-normal"}) => {

    // build up paragraph elements from prop, insert into div
    const paragraphs = (daysAndTimes.length > 0) ? 
        (daysAndTimes.map((day,index) => {return <p key={index} className = {customStyle}> {day} </p>}))
        : (<p className={customStyle}>No hours available</p> );

    return (
        <div className="scroll-pt-96">
            <h2 className="font-bold text-2xl text-blue-500 py-8 text-center sm:text-left">Opening Hours: </h2>
            <p></p>
            <div>{paragraphs}</div>
            <p className="font-light text-sm text-slate-500 pt-8 text-center sm:text-left mx-2">*Hours exclude public holidays and are subject to change</p>
        </div>
    );
}

export default OpenHours;