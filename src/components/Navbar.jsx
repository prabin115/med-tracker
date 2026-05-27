import React from 'react'

const Navbar = ({ setShowForm }) => {
  return (
    <>
    <nav className="mx-auto mt-4 w-[90%] flex justify-between items-center rounded-2xl bg-white px-6 py-4 shadow-sm">
        <div className="text-2xl font-bold tracking-tight">
          Paw
        </div>

        <button 
          onClick={() => setShowForm(true)}
          className="rounded-xl bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-80">
          + Add cat
        </button>
    </nav>
    </>
  )
}

export default Navbar