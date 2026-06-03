import React from 'react'
import MedicineCard from './MedicineCard';

const CatCard = ({ 
  cat, 
  handleEdit, 
  handleAddMedicine, 
  handleEditMedicine, 
  editingMedicine,
  deleteMedicine,
  deleteCat
  }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr]">

        {/* LEFT SIDE */}

        <div className="justify-center items-center flex flex-col p-6 border-r md:border-r border-r-0 md:border-r">

          <img
            src={cat.imageUrl}
            alt={cat.name}
            className="w-full h-48 sm:h-60 md:h-72 object-contain rounded-xl"
          />

          <div className="mt-4">
            <h2 className="text-3xl font-bold">
              {cat.name}
            </h2>

            <p className="text-gray-500">
              {cat.gender} Cat
            </p>

            <div className="mt-4 space-y-2">
              <p>
                <strong>Age:</strong> {cat.age}
              </p>

              <p>
                <strong>Weight:</strong> {cat.weight} kg
              </p>

              <p>
                <strong>Color:</strong> {cat.color}
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => handleEdit(cat)}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>

            <button
              onClick={() => {
                const confirmed = window.confirm(
                  "Are you sure you want to delete this cat?"
                );

                if (confirmed) {
                  deleteCat(cat.id);
                }
              }}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-6">

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center mb-4">

            <h3 className="text-xl font-semibold">
              Medicines
            </h3>

            <button
              onClick={() => handleAddMedicine(cat)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-200"
            >
              + Add Medicine
            </button>

          </div>

          {cat.medicines?.length === 0 && (
            <p className="text-gray-500">
              No medicines added.
            </p>
          )}

          <div className="space-y-3">

            {cat.medicines?.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                medicine={medicine}
                catId={cat.id}
                handleEditMedicine={handleEditMedicine}
                deleteMedicine={deleteMedicine}
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default CatCard