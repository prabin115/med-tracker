import React from 'react'

const MedicineCard = ({ medicine, handleEditMedicine, catId }) => {
  
  function handleEdit(e) {
    e.preventDefault();
    console.log('edit');
    handleEditMedicine(catId, medicine);
  }

  return (
    <div className="relative border rounded-xl p-4 bg-gray-50">
      
      {/* Edit button */}
      <button 
        onClick={handleEdit}
        className='absolute top-3 right-3'>
        <i className="fa-regular fa-pen-to-square"></i>
      </button>

      {/* Delete button */}
      <button className='absolute top-3 right-10'>
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

      <p className='bg-red-200 mt-2'>
        Notes: {medicine.notes}
      </p>

    </div>
  )
}

export default MedicineCard