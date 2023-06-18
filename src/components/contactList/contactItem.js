import PropTypes from "prop-types";
import css from './contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

const ContactItem = ({ item }) => {

  const { id, name, number } = item

  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  }


  return (
    < li className={css.contact__item} >
      <span className={css.contact__name}>
        {name}:
      </span>
      <span className={css.contact__number}>
        {number}
      </span>
      <button
        type="button"
        className={css.contact__deleteBtn}
        onClick={handleDeleteContact}>
        Delete
      </button>
    </li >)
}

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired
};

export default ContactItem