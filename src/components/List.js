import { useState } from "react";

export default function List({items , onToggle , onDelete , onClear}) {
  const [sortby , setSortBy] = useState("description");
  let newList;
  if(sortby === "description") {
    newList= items;
  }else if(sortby === "sort"){
    newList = items.slice().sort((a , b) => a.description.localeCompare(b.description));
  }else {
    newList = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {newList.map(item => <li key={item.id}><input type="checkbox" value={item.packed} onChange={() => onToggle(item.id)}/><span style={item.packed ? {textDecoration : "line-through"} : {}}>{item.quantity} {item.description}</span><button onClick={() => onDelete(item.id)}>❌</button></li>)}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="description">Sort By Description</option>
          <option value="sort">Sort By Alphabatically</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}
