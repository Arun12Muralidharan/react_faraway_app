export default function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={() => handleToggleItem(item.id)}
        value={item.packed}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}&nbsp;
        {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
