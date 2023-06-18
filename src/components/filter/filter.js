import { nanoid } from "@reduxjs/toolkit";
import css from './filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";



const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChangeFilter = (event) => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  }

  const filterInputId = nanoid();
  return (
    <div className={css.filter}>
      <label
        htmlFor={filterInputId}
        className={css.filter__lable} > Find contact by name
      </label>
      <input
        type="text"
        name="filter"
        id={filterInputId}
        className={css.filter__input}
        value={filter}
        onChange={handleChangeFilter}
      />
    </div>
  )
}

export default Filter