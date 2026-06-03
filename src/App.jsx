import { useEffect, useState } from "react"
import CatCard from "./components/CatCard"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import MedicineForm from "./components/MedicineForm";
import MedicineCard from "./components/MedicineCard";

function App() {

  const [showForm, setShowForm] = useState(false); // controls form

  const [cats, setCats] = useState(() => {
    const savedCats = localStorage.getItem("cats");
    return savedCats ? JSON.parse(savedCats) : [];
  }); // Array of cat objects

  useEffect(() => {
    console.log("Saving cats:", cats);
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

  const [editingCat, setEditingCat] = useState(null); // current cat object which is being editied

  const [selectedCat, setSelectedCat] = useState(null);

  const [showMedicineForm, setShowMedicineForm] = useState(false);

  const [editingMedicine, setEditingMedicine] = useState(null);

  const [selectedCatId, setSelectedCatId] = useState(null);
  
  function addCat(catData) {
    if (!catData.image) {
      const newCat = {
        ...catData,
        id: crypto.randomUUID(),
        imageUrl: null,
        medicines: [],
      };

      setCats(prev => [...prev, newCat]);
      setShowForm(false);
      return;
    }
    
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Image = reader.result; 
      const { image, ...rest } = catData;

      const newCat = {
        ...rest,
        id: crypto.randomUUID(),
        imageUrl: base64Image,
        medicines: [],
      };

      console.log(newCat)
      setCats((prevCats) => [...prevCats, newCat]);
    }
    setShowForm(false);
    reader.readAsDataURL(catData.image);
  }

  function handleEdit(cat) {
    setEditingCat(cat);
    setShowForm(true);
  }

  function updateCat(updatedCat) {
    if (!(updatedCat.image instanceof File)) {
      setCats(prevCats =>
        prevCats.map(cat =>
          cat.id === updatedCat.id ? updatedCat : cat
        )
      );

      setEditingCat(null);
      setShowForm(false);
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const { image, ...rest } = updatedCat;

      const catWithNewImage = {
        ...rest,
        imageUrl: reader.result,
      };

      setCats(prevCats =>
        prevCats.map(cat =>
          cat.id === catWithNewImage.id
            ? catWithNewImage
            : cat
        )
      );

    setEditingCat(null);
    setShowForm(false);
  };

  reader.readAsDataURL(updatedCat.image);
  }

  function deleteCat(catId) {
    setCats(prevCats =>
      prevCats.filter(cat => cat.id !== catId)
    );
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

  function updateMedicine(catId, medicineData) {
    setCats(prevCats => 
      prevCats.map(cat => 
        cat.id === catId 
          ? {
            ...cat,
            medicines: cat.medicines.map(medicine =>
              medicine.id === medicineData.id 
                ? medicineData
                : medicine
            )
          }
          : cat
      )
    )
    setEditingMedicine(null);
    setShowMedicineForm(false);
  }

  function deleteMedicine(catId, medicineId) {
    setCats(prevCats =>
      prevCats.map(cat =>
        cat.id === catId 
        ? {
          ...cat,
          medicines : cat.medicines.filter(
            medicine => medicine.id !== medicineId
          )
        } 
        : cat
      )
    );
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
        selectedCatId={selectedCatId}
        editingMedicine={editingMedicine}
        updateMedicine={updateMedicine}
      />}

      {!showForm && !showMedicineForm && 
        <div className="flex flex-col gap-5 p-5 w-[70%] mx-auto">
          {cats.map((cat) => (
            <CatCard 
            key={cat.id} 
            cat={cat} 
            handleEdit={handleEdit} 
            handleAddMedicine={handleAddMedicine}
            handleEditMedicine={handleEditMedicine}
            editingMedicine={editingMedicine}
            deleteMedicine={deleteMedicine}
            deleteCat={deleteCat}
            />
          ))}
        </div>
      }
    </>
  )
}

export default App
