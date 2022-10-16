import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul className="contactList">
      {contacts.map(contact => {
        return <ContactItem key={contact.id} value={contact} />;
      })}
    </ul>
  );
};
export default ContactList;
