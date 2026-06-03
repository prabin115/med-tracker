import React, { useEffect, useState } from 'react'

const MedicineForm = ({ 
  handleMedicineFormClose, 
  addMedicine, 
  selectedCat, 
  editingMedicine,
  updateMedicine,
  selectedCatId
  }) => {

  const [formData, setFormData] = useState(
    editingMedicine || {
      medicineName: "",
      dosage: "",
      dosageUnit: "ml",
      frequency: "",
      startDate: "",
      endDate: "",
      timing: "",
      notes: "",
      doctorName: "",
  });

  useEffect(() => {
    if(editingMedicine) {
      setFormData(editingMedicine);
    }
  }, [editingMedicine])
  
  function handleChange(e) {
      const { name, value } = e.target;

      setFormData((prev) => ({
          ...prev,
          [name]: value,
      }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(editingMedicine)
      updateMedicine(selectedCatId, formData);
    else
      addMedicine(selectedCatId, formData)
  }

  return (
    <>
    <div className="flex justify-center px-4 py-10 min-h-screen">
      <form 
        onSubmit={handleSubmit}
        className="relative w-full max-w-xl rounded-3xl bg-white p-8 shadow-md">
        <button 
            onClick={handleMedicineFormClose}
            className='absolute top-3 right-3 mt-5 mr-3 text-xl text-gray-500 hover:text-gray-900 transition duration-200'>
            X
        </button>
        <h2 className="mb-6 text-3xl font-bold">
          Add Medicine
        </h2>

        {/* Medicine Name */}
        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Medicine Name
          </label>

          <input
            type="text"
            name="medicineName"
            value={formData.medicineName}
            onChange={handleChange}
            placeholder="Paracetamol"
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Dosage */}
        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Dosage
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="number"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              placeholder="500"
              className="flex-1 rounded-xl border px-4 py-3 outline-none"
            />

            <select
              name="dosageUnit"
              value={formData.dosageUnit}
              onChange={handleChange}
              className="rounded-xl border px-4 py-3 outline-none"
            >
              <option value="ml">ml</option>
              <option value="mg">mg</option>
              <option value="tablet">Tablet</option>
              <option value="capsule">Capsule</option>
            </select>
          </div>
        </div>

        {/* Frequency */}
        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Frequency
          </label>

          <select
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          >
            <option value="">Select Frequency</option>
            <option value="once">Once Daily</option>
            <option value="twice">Twice Daily</option>
            <option value="thrice">Three Times Daily</option>
            <option value="four">Four Times Daily</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        {/* Timing */}
        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Timing
          </label>

          <select
            name="timing"
            value={formData.timing}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          >
            <option value="">Select Timing</option>
            <option value="before-meal">Before Meal</option>
            <option value="after-meal">After Meal</option>
            <option value="with-food">With Food</option>
            <option value="empty-stomach">Empty Stomach</option>
          </select>
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Start Date
          </label>

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium">
            End Date
          </label>

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Doctor */}
        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Prescribed By
          </label>

          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            placeholder="Dr. Sharma"
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="mb-2 block font-medium">
            Notes
          </label>

          <textarea
            rows="4"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special instructions..."
            className="w-full rounded-xl border px-4 py-3 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:opacity-80"
        >
          Save Medicine
        </button>
      </form>
    </div>
    </>
  )
}

export default MedicineForm