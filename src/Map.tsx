import OpenHours from "./OpenHours.tsx"

const Map = () => {

    const dailyHoursMagill : Array<string> = ["Tuesday: 9:00am - 2:00pm", "Wednesday: 9:00am - 5:00pm","Thursday: 9:00am - 5:00pm"];

    const dailyHoursMtBarker : Array<string> = ["Monday: 9:00am - 5:00pm", "Friday: 9:00am - 5:00pm"];

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center my-12 bg-white'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.9822672281298!2d138.66819588273708!3d-34.913013568358906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cbadf86263d5%3A0x3f14273b9bf922fb!2sNick%20Hinton%20Podiatrist!5e0!3m2!1sen!2sau!4v1738102959927!5m2!1sen!2sau" className="w-80 h-80 m-8"  loading="lazy" ></iframe>
        <OpenHours
            daysAndTimes={dailyHoursMagill}
            customStyle="text-gray-700 py-1 text-center sm:text-left"
        ></OpenHours>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020.8765585814707!2d138.86652017978824!3d-35.07983887839695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab7305e407a1755%3A0x2463702b87a0e0bb!2sMount%20Barker%20%26%20Balhannah%20Medical%20Centres!5e0!3m2!1sen!2sau!4v1738109894168!5m2!1sen!2sau" className="w-80 h-80 m-8" loading="lazy"></iframe>
        <OpenHours
            daysAndTimes={dailyHoursMtBarker}
            customStyle="text-gray-700 py-1 text-center sm:text-left"
        ></OpenHours>
    </div>
  )
}

export default Map
