import React from "react";
import { toast } from "react-toastify";

function DeleteConfirmModal({ deletingDoctor, refetch, setDeletingDoctor }) {
  const { name, email } = deletingDoctor;
  const handleDelete = () => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deleteCount) toast.success(`Doctor: ${name} is dleted.`);
        setDeletingDoctor(null);
        refetch();
      });
  };

  return (
    <div>
      <dialog
        id="delete-confirm-modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            are you sure you want to delete ${name}
          </h3>
          <p className="py-4">
            Press ESC key or click the button below to cancel
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default DeleteConfirmModal;
