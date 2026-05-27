import React, { useState } from 'react'

const Form = () => {
  const [fileName, setFileName] = useState("Upload Cat Image");
  const [imagePreview, setImagePreview] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if(file) {
      setFileName(file.name);

      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  }

  return (
    //  <div className='flex justify-center px-4 py-10'>
    //   <form className="flex w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-sm">
        
    //     {/* Left Side */}
    //     <div 
    //       className="flex w-1/2 items-center justify-center bg-gray-100 p-6"
    //       style={{
    //         backgroundImage: imagePreview ? `url(${imagePreview})` : "none",
    //         backgroundSize: "cover", 
    //         backgroundPosition: "center",
    //       }}
    //     >
          
    //       <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300">
            
    //         <p className="mb-4 text-lg font-semibold">
    //           {fileName}
    //         </p>

    //         {/* Hidden Input */}
    //         <input
    //           type="file"
    //           accept="image/*"
    //           id="image-upload"
    //           className="hidden"
    //           onChange={handleImageChange}
    //         />

    //         {/* Custom Button */}
    //         <label
    //           htmlFor="image-upload"
    //           className="cursor-pointer rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-80"
    //         >
    //           Choose Image
    //         </label>

    //       </div>

    //     </div>

    //     {/* Right Side */}
    //     <div className="w-1/2 p-8">
          
    //       <h2 className="mb-6 text-2xl font-bold">
    //         Pet Form
    //       </h2>

    //       {/* Name */}
    //       <div className="mb-4">
    //         <label className="mb-2 block text-sm font-medium">
    //           Name
    //         </label>

    //         <input
    //           type="text"
    //           placeholder="Enter name"
    //           className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
    //         />
    //       </div>

    //       {/* Age */}
    //       <div className="mb-4">
    //         <label className="mb-2 block text-sm font-medium">
    //           Age
    //         </label>

    //         <input
    //           type="number"
    //           step="0.1"
    //           placeholder="years"
    //           className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
    //         />
    //       </div>

    //       {/* Weight */}
    //       <div className="mb-4">
    //         <label className="mb-2 block text-sm font-medium">
    //           Weight
    //         </label>

    //         <input
    //           type="number"
    //           step="0.1"
    //           placeholder="Kg"
    //           className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
    //         />
    //       </div>

    //       {/* Color */}
    //       <div className="mb-4">
    //         <label className="mb-2 block text-sm font-medium">
    //           Color
    //         </label>

    //         <input
    //           type="text"
    //           placeholder="Enter color"
    //           className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
    //         />
    //       </div>

    //       {/* Gender */}
    //       <div className="mb-6">
    //         <label className="mb-2 block text-sm font-medium">
    //           Gender
    //         </label>

    //         <select className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2">
    //           <option value="">Select gender</option>
    //           <option value="male">Male</option>
    //           <option value="female">Female</option>
    //         </select>
    //       </div>

    //       {/* Submit */}
    //       <button
    //         type="submit"
    //         className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:opacity-80"
    //       >
    //         Submit
    //       </button>

    //     </div>

    //   </form>

    // </div>
    <div className='flex justify-center px-4 py-10'>

      <form className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-2xl font-bold">
          Pet Form
        </h2>

        {/* Image Upload */}
        <div className="mb-6 flex items-center gap-4">

          {/* Preview Circle */}
          <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-200">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="preview"
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* Custom Upload */}
          <div>

            <label className="mb-2 block text-sm font-medium">
              Pet Image
            </label>

            {/* Hidden Input */}
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Custom Button */}
            <label
              htmlFor="image-upload"
              className="cursor-pointer rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-80"
            >
              Choose Image
            </label>

          </div>


        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter name"
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Age
          </label>

          <input
            type="number"
            step="0.1"
            placeholder="years"
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Weight
          </label>

          <input
            type="number"
            step="0.1"
            placeholder="Kg"
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Color */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Color
          </label>

          <input
            type="text"
            placeholder="Enter color"
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">
            Gender
          </label>

          <select className="w-full rounded-xl border px-4 py-3 outline-none">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:opacity-80"
        >
          Submit
        </button>

      </form>

    </div>
  )
}

export default Form