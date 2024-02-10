import React, { useState } from "react";
import Footar from "../Shared/Footar";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

function Appointment() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />

      <Footar />
    </div>
  );
}

export default Appointment;
