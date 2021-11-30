import React, {Fragment} from 'react';

export default function Equation(props) {
    return (
        <Fragment>
            <div className="col-5">
                {props.question}
            </div>
            <div className="col-2">
                =
            </div>
            <div className="col-5">
                {props.answer}
            </div>
        </Fragment>
    )
}
