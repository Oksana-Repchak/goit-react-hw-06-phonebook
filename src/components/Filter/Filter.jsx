// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook-selectors';
import * as phonebookActions from '../../redux/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
}

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
