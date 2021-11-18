import React, {Fragment} from 'react';

function SelectInput(props) {
  const values = props.values;
  const selectOptions = values.map((value)=>
    <option value={value} key={value.toString()}>{value}</option>
  );
  
  return(
    <Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id}>
        {selectOptions}
      </select><br />
    </Fragment>
  )
}

export default SelectInput;