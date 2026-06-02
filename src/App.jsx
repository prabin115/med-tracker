import { useState } from "react"
import CatCard from "./components/CatCard"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import MedicineForm from "./components/MedicineForm";
import MedicineCard from "./components/MedicineCard";

function App() {

  const [showForm, setShowForm] = useState(false); // controls form

  const [cats, setCats] = useState([]); // Array of cat objects

  const [editingCat, setEditingCat] = useState(null); // current cat object which is being editied

  const [selectedCat, setSelectedCat] = useState(null);

  const [showMedicineForm, setShowMedicineForm] = useState(false);

  const [editingMedicine, setEditingMedicine] = useState(null);

  const [selectedCatId, setSelectedCatId] = useState(null);
  
  function addCat(catData) {
    const newCat = {
      ...catData,
      id: crypto.randomUUID(),
      imageUrl: catData.image ? URL.createObjectURL(catData.image) : null,
      medicines: [],
    }
    console.log(newCat)
    setCats((prevCats) => [...prevCats, newCat]);
    setShowForm(false);
  }

  function handleEdit(cat) {
    setEditingCat(cat);
    setShowForm(true);
  }

  function updateCat(updatedCat) {
    setCats((prevCats) =>
      prevCats.map((cat) => 
        cat.id === updatedCat.id ? updatedCat : cat)
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
    setShowMedicineForm(true);
  }

  function handleMedicineFormClose() {
    setShowMedicineForm(false);
    setSelectedCat(null);
  }

  function addMedicine(catId, medicineData) {

    const newMedicine = {
      ...medicineData,
      id: crypto.randomUUID(),
    };

    setCats(prevCats => {
      return prevCats.map(cat => {
        return cat.id === catId ? {...cat, medicines: [...cat.medicines, newMedicine]} : cat
      })
    });
    console.log(medicineData)
    setShowMedicineForm(false);
  }

  function handleEditMedicine(catId, medicine) {
    setSelectedCatId(catId);
    setEditingMedicine(medicine);
    setShowMedicineForm(true);
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
        addMedicine={addMedicine}
        selectedCat={selectedCat}
        editingMedicine={editingMedicine}
      />}

      {!showForm && !showMedicineForm && 
        <div className="flex flex-col gap-5 p-5 w-[80%] mx-auto">
          {cats.map((cat) => (
            <CatCard 
            key={cat.id} 
            cat={cat} 
            handleEdit={handleEdit} 
            handleAddMedicine={handleAddMedicine}
            handleEditMedicine={handleEditMedicine}
            editingMedicine={editingMedicine}
            />
          ))}
        </div>
      }
    </>
  )
}

export default App
