import { EmailAuthCredential } from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";

function DoctorRow(doctor, index, refetch, setDeletingDoctor) {
  const { name, specialty, img, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          for="delete-confirm-madal"
          className="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
}

export default DoctorRow;
