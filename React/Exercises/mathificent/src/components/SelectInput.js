import React, {Fragment} from "react";

function SelectedInput({label, id, values, currentValue, setCurrentValue}) {
    const selectOptions = values.map((value) => 
        <option value={value[0]} key={value.toString()}>{value[0]}</option>
);

    return (
        <>
            <label htmlFor={id} className="col font-weight-bold">{label}</label>
            <select id={id}
                defaultValue={currentValue} 
                onChange={(e) => setCurrentValue(e.target.value)} className="col form-control">
                {selectOptions}
            </select><br />
        </>
    )
}

export default SelectedInput;