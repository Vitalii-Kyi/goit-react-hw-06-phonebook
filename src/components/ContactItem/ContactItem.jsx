import { HIPhoneOutline } from '@icongo/hi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
// import { deleteContact } from 'redux/actions';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const onContactDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <HIPhoneOutline />
      <span>{name}</span>
      <div>
        <span>{number} </span>
        <button type="button" onClick={onContactDelete}>
          Delete
        </button>
      </div>
    </>
  );
};