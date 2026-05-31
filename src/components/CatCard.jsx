import React from 'react'

const CatCard = ({ cat, handleEdit, handleAddMedicine }) => {
  return (
    <div className="w-[340px] overflow-hidden rounded-md bg-white shadow-md">
      
      {/* Image */}
      <img
        src={cat.image ? URL.createObjectURL(cat.image) : "/placeholder-cat.png"}
        alt="cat"
        className="h-[220px] w-full object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {cat.name}
            </h2>

            <p className="text-sm text-gray-500">
              {cat.gender} cat
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(cat)}
              className="rounded-lg bg-black px-3 py-1 text-sm text-white transition hover:opacity-80"
            >
              Edit
            </button>

            <button
              onClick={() => handleAddMedicine(cat)}
              className="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white transition hover:opacity-80"
            >
              <i className="fa-solid fa-briefcase-medical"></i>
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Age:</span> {cat.age} years
          </p>

          <p>
            <span className="font-semibold">Weight:</span> {cat.weight} kg
          </p>

          <p>
            <span className="font-semibold">Color:</span> {cat.color}
          </p>
        </div>

      </div>

    </div>
  )
}

export default CatCard