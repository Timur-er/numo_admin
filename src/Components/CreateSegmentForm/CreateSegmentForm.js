import React from 'react';
import {segmentModel} from "./SegmentModel";
import FieldBlock from "./FieldBlock/FieldBlock";

const CreateSegmentForm = () => {

    const renderInputs = segmentModel.map(segmentBlock => {
        const {type, name, placeholder, options} = segmentBlock;
        return <FieldBlock options={options} label={placeholder}/>
    })

    return (
        <div>
            {renderInputs}
        </div>
    );
};

export default CreateSegmentForm;