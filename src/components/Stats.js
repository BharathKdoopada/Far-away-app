export default function Stats({items}) {
  const itemsNum = items.length;
  if(!itemsNum) return <div className="stats">
      <p>start adding items...</p>
    </div>

  const packedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((packedItems/itemsNum)*100);
  return (
    <div className="stats">
      {percentage === 100 ? <p>You have packed all the items , Happy Journey ✈️ </p> : <p>You have {itemsNum} items on your list and your already packed {packedItems} ({percentage}%)</p>}
    </div>
  );
}
