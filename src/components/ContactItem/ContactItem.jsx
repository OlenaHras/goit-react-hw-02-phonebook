const ContactItem = ({ value }) => {
  return (
    <>
      <li id={value.id}>
        {value.name}: {value.number}
        <button>Delete</button>
      </li>
    </>
  );
};
export default ContactItem;
