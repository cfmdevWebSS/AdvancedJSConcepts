import React, {Fragment} from "react";

function SelectedInput({label, id, values}) {
    const selectOptions = values.map((value) => <option value={value} key={value.toString()}>{value}</option>

    );

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id}>
                {selectOptions}
            </select><br />
        </>
    )
}

export default SelectedInput;