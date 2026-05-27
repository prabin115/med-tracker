import { useState } from "react"
import CatCard from "./components/CatCard"
import Form from "./components/Form"
import Navbar from "./components/Navbar"

function App() {
  const [showForm, setShowForm] = useState(false);
  const [cats, setCats] = useState([]);
  const [editingCat, setEditingCat] = useState(null);

  
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

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      
      {showForm && <Form 
        addCat={addCat} 
        updateCat={updateCat}
        editingCat={editingCat} 
        setEditingCat={setEditingCat}
      />}

      <div className="flex flex-wrap gap-4 p-4">
        {cats.map((cat) => (
          <CatCard 
            key={cat.id} 
            cat={cat} 
            handleEdit={handleEdit} 
            
          />
        ))}
      </div>
    </>
  )
}

export default App
