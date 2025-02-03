
interface clinikoIdProp {
    clinikoId : string
}

const Bookings = ({clinikoId = ""}: clinikoIdProp) => {

    window.addEventListener('message', function handleIFrameMessage (e) {
        var clinikoBookings = document.getElementById(clinikoId);
        if (typeof e.data !== 'string') return;
        if (e.data.search('cliniko-bookings-resize') > -1) {
          var height = Number(e.data.split(':')[1]);
          if (clinikoBookings) clinikoBookings.style.height = height + 'px';
        }
        e.data.search('cliniko-bookings-page') > -1 && clinikoBookings?.scrollIntoView();
      });
    

  return (
    <div id="appointment-booking" className="bg-white">
        <h2 className="text-3xl sm:text-5xl text-center font-bold text-blue-500 mb-12 ">Book an Appointment</h2>
        <div className="flex justify-center items-center">
            <iframe id='cliniko-62289594' src='https://nick-hinton-podiatrist.au1.cliniko.com/bookings?practitioner_id=125484&embedded=true' className="w-4/5 h-98"></iframe>
        </div>
    </div>
  )
}

export default Bookings
