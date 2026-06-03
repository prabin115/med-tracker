import React from 'react'

const MedicineCard = ({ medicine, handleEditMedicine, catId, deleteMedicine }) => {
  
  function handleEdit() {
    console.log('edit');
    handleEditMedicine(catId, medicine);
  }

  function handleDelete() {
    console.log('delete medicine')
    deleteMedicine(catId, medicine.id)
  }

  return (
    <div className="relative border rounded-xl p-4 pb-12 bg-gray-50">
      
      {/* Edit button */}
      <button 
        onClick={handleEdit}
        className='absolute bottom-3 right-3 hover:text-gray-500 transition-color duration-200'>
        <i className="fa-regular fa-pen-to-square"></i>
      </button>

      {/* Delete button */}
      <button 
        onClick={() => {
          const confirmed = window.confirm(
            "Are you sure you want to delete this medicine?"
          )

          if(confirmed) {
            handleDelete()
          }
        }}
        className='absolute bottom-3 right-10 hover:text-gray-500 transition-color duration-200'>
        <i className="fa-solid fa-trash"></i>
      </button>
      
      <h4 className="font-bold text-lg">
        {medicine.medicineName}
      </h4>

      <p>
        Dosage: {medicine.dosage} {medicine.dosageUnit}
      </p>

      <p>
        Frequency: {medicine.frequency}
      </p>

      <p>
        Duration:
        {" "}
        {new Date(medicine.startDate).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })}
        {" - "}
        {new Date(medicine.endDate).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })}
      </p>

      <p>
        Timing: {medicine.timing}
      </p>

      <div className="mt-4 rounded-lg bg-pink-100 p-3">
        <p className="font-medium mb-1">Notes</p>
        <p className="text-sm break-words">
          {medicine.notes || "No notes"}
        </p>
      </div>

    </div>
  )
}

export default MedicineCard