import ItemList from "./ItemList";
//https://www.npmjs.com/package/react-icons

const Content = ({ items, handleChange, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </>
  );
};

export default Content;
