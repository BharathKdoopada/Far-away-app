import { useState } from "react";
export default function AddForm({onAddItem}) {
  const [quantity , setQuantity] = useState("1");
  const [description , setdescription] = useState("");

  const id=crypto.randomUUID();
  function handleSubmit (e) {
    e.preventDefault();
    const item = {
      quantity,
      description,
      packed : false,
      id
    }
    onAddItem(item);
    setQuantity("1");
    setdescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({length:20} , (_ , i) => i+1).map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <input type="text" value={description} onChange={(e) => setdescription(e.target.value)}/>
      <button>Add</button>
    </form>
  );
}
