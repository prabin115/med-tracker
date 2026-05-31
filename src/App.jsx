import { useState } from "react"
import CatCard from "./components/CatCard"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import MedicineForm from "./components/MedicineForm";

function App() {

  const catsdemo = [
    {
      name: "Tyson",
      age: "1.8",
      weight: "4.4",
      color: "Orange",
      gender: "male",
      image: null,
    },
    {
      name: "Tyson",
      age: "1.8",
      weight: "4.4",
      color: "Orange",
      gender: "male",
      image: null,
    },
    {
      name: "Tyson",
      age: "1.8",
      weight: "4.4",
      color: "Orange",
      gender: "male",
      image: null,
    },
    {
      name: "Tyson",
      age: "1.8",
      weight: "4.4",
      color: "Orange",
      gender: "male",
      image: null,
    },{
      name: "Tyson",
      age: "1.8",
      weight: "4.4",
      color: "Orange",
      gender: "male",
      image: null,
    },
    {
      name: "Tyson",
      age: "1.8",
      weight: "4.4",
      color: "Orange",
      gender: "male",
      image: null,
    },
    {
      name: "Tyson",
      age: "1.8",
      weight: "4.4",
      color: "Orange",
      gender: "male",
      image: null,
    },
    {
      name: "Tyson",
      age: "1.8",
      weight: "4.4",
      color: "Orange",
      gender: "male",
      image: null,
    },
  ];

  const [showForm, setShowForm] = useState(false); // controls form
  const [cats, setCats] = useState([]); // Array of cat objects
  const [editingCat, setEditingCat] = useState(null); // current cat object which is being editied

  const [showMedicineForm, setMedicineForm] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  
  function addCat(catData) {
    const newCat = {
      ...catData,
      id: crypto.randomUUID(),
    }

    setCats((prevCats) => [...prevCats, newCat]);
    setShowForm(false);
  }

  function handleEdit(cat) {
    setEditingCat(cat);
    setShowForm(true);
  }

  function updateCat(updatedCat) {
    setCats((prevCats) =>
      prevCats.map((cat) => cat.id === updatedCat.id ? updatedCat : cat)
    );
    setEditingCat(null);
    setShowForm(false);
  }

  function handleFormClose() {
    setShowForm(false);
    setEditingCat(null);
  }

  function handleAddMedicine(cat) {
    setSelectedCat(cat);
    setMedicineForm(true);
  }

  function handleMedicineFormClose() {
    setMedicineForm(false);
    setSelectedCat(null);
  }

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <Form 
        addCat={addCat} 
        updateCat={updateCat}
        editingCat={editingCat} 
        handleFormClose={handleFormClose}
      />}

      {showMedicineForm && <MedicineForm 
        handleMedicineFormClose={handleMedicineFormClose}
      />}

      {!showForm && !showMedicineForm && 
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center p-4 max-w-7xl mx-auto">
          {cats.map((cat) => (
            <CatCard 
            key={cat.id} 
            cat={cat} 
            handleEdit={handleEdit} 
            handleAddMedicine={handleAddMedicine}
            />
          ))}
        </div>
      }
    </>
  )
}

export default App
