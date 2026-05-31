import React, { useEffect, useState } from 'react'

const Form = ({ addCat, editingCat, updateCat, handleFormClose }) => {
  
  // this controls image file name to dynamically render the filename based on current state
  const [fileName, setFileName] = useState("Upload Cat Image"); 
  
  // current image selected by the user
  const [imagePreview, setImagePreview] = useState(null);

  // this represents our form fields
  const [formData, setFormData] = useState(
    editingCat || {
    name: "",
    age: "",
    weight: "",
    color: "",
    gender: "",
    image: null,
  });

  useEffect(() => {
    if (editingCat) {
      setFormData(editingCat);

      if (editingCat.image) {
        setImagePreview(
          URL.createObjectURL(editingCat.image)
        );
      }
    }
  }, [editingCat]);
  

  function handleChange(e) {
    const { name, value, files } = e.target;

    if(files) {
      const file = files[0];
      
      setFormData((prevData) => ({
        ...prevData,
        [name] : file,
      }));

      if(file) {
        setFileName(file.name);

        const imageURL = URL.createObjectURL(file);
        setImagePreview(imageURL);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name] : value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(editingCat) {
      updateCat(formData);
    } else {
      addCat(formData);
    }
  }

  return (
    <div className='flex justify-center px-4 py-10'>

      <form 
        onSubmit={handleSubmit}
        className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        
        <button 
          onClick={handleFormClose}
          className='absolute top-3 right-3 mt-5 mr-3 text-xl text-gray-500 hover:text-gray-900 transition duration-200'>
          X
        </button>

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
              name='image'
              onChange={handleChange}
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
            name='name'
            value={formData.name}
            onChange={handleChange}
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
            name='age'
            value={formData.age}
            onChange={handleChange}
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
            name='weight'
            value={formData.weight}
            onChange={handleChange}
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
            name='color'
            value={formData.color}
            onChange={handleChange}
            placeholder="Enter color"
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">
            Gender
          </label>

          <select 
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none">
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