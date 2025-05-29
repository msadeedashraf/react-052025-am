import { FaTrashAlt } from "react-icons/fa";
//https://www.npmjs.com/package/react-icons

const Content = ({items, handleChange, handleDelete}) => {
 

 
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />

              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <FaTrashAlt role="button" onClick={() => handleDelete(item.id)} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
