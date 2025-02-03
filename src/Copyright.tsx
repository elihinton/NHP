
const Copyright = () => {

    const time = new Date();
    const currentYear = time.getFullYear();

    return (
        <div className="bg-slate-200 h-12 w-screen flex justify-center items-center">
        <p className="text-center font-bold text-gray-700">&copy; {currentYear} Nick Hinton Podiatrist</p>
      </div>
    )
}

export default Copyright;