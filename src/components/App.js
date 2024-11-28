import { useState } from 'react';
import  AddForm from './AddForm';
import List from './List';
import Logo from './Logo'
import Stats from './Stats';
function App() {
const [items , setItem] = useState([]);

function handleAddItem (item) {
  setItem(items => [...items , item]);
}

function handleToggle (itemId) {
  setItem(items => items.map(item => item.id === itemId ? {...item , packed:!item.packed} : item));
}

function handleDeleteItem (itemId) {
  setItem(items => items.filter(item => item.id !== itemId));
}

function handleClearList () {
  setItem([]);
}
  return (
    <div className="app">
        <Logo/>
        <AddForm onAddItem={handleAddItem}/>
        <List items={items} onToggle={handleToggle} onDelete={handleDeleteItem} onClear={handleClearList}/>
        <Stats items={items}/>
    </div>
  );
}

export default App;
