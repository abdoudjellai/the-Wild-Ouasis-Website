import DateSelector from "./DateSelector"
import ReservationForm from "./ReservationForm"
import { getSettings, getBookedDatesByCabinId } from "@/app/_lib/data-service";
async function Reservation({params,cabin}) {
    const [ settings, bookedDates] = await Promise.all([
    await getSettings(),
    await getBookedDatesByCabinId(cabin.id),
  ]);
    return (
        <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
          
          <DateSelector settings = {settings} bookedDates = {bookedDates} cabin= {cabin} />
          <ReservationForm cabin = {cabin}  />
        </div>
    )
}

export default Reservation
