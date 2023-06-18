import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";
import css from './app.module.css';
import Form from './form/form';
import Loader from './loader';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return ( 
    <div>
      <h1 className={css.title}> Phonebook </h1>
      <Form />
      <h2 className={css.title}> Contacts </h2>
      {isLoading && !error && (<Loader />)}
      <Filter />
      <ContactList />
    </div>
  )
}





