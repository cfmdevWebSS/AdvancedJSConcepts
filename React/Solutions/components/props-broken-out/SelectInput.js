import React, {Fragment} from 'react';

function SelectInput({label, id, values}) {
  const selectOptions = values.map((value)=>
    <option value={value} key={value.toString()}>{value}</option>
  );
  
  return(
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        {selectOptions}
      </select><br />
    </Fragment>
  )
}

export default SelectInput;