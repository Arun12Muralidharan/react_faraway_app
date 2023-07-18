export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Start adding some items.</p>;

  const numItems = items.length;
  const packed = items.filter((item) => item.packed === true);
  const packedItems = packed.length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          <span>You got everything ready to go!!!</span>
        ) : (
          <span>
            You have {numItems > 0 ? numItems : 0} items on your list, and you
            already packed {packedItems} ({percentage}%).
          </span>
        )}
      </em>
    </footer>
  );
}
