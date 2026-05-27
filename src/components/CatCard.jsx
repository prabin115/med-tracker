import React from 'react'

const CatCard = () => {
  return (
    <div className="w-[340px] overflow-hidden rounded-md bg-white shadow-md">
      
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
        alt="cat"
        className="h-[220px] w-full object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Luna
            </h2>

            <p className="text-sm text-gray-500">
              Female Cat
            </p>
          </div>

          <button className="rounded-lg bg-black px-3 py-1 text-sm text-white transition hover:opacity-80">
            Edit
          </button>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Age:</span> 1.4 years
          </p>

          <p>
            <span className="font-semibold">Weight:</span> 4.3 kg
          </p>

          <p>
            <span className="font-semibold">Color:</span> Orange
          </p>
        </div>

      </div>

    </div>
  )
}

export default CatCard