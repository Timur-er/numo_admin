import React from 'react';
import {segmentModel} from "./SegmentModel";
import FieldBlock from "./FieldBlock/FieldBlock";
import {Form, Formik} from "formik";
import SelectField from "./SelectField/SelectField";
import style from './CreateSegmentForm.module.scss'
const CreateSegmentForm = () => {

    const initialValues = segmentModel.reduce((acc, segmentBlock) => {
        acc[segmentBlock.name] = segmentBlock.initial_values; // set the initial value for each field
        return acc;
    }, {});

    const renderInputs = segmentModel.map((segmentBlock, index) => {
        const {type, name, placeholder, options} = segmentBlock;
        if (type === 'select') {
            return <SelectField
                key={index}
                label={placeholder}
                name={name}
                options={options}
            />
        } else {
            return <FieldBlock
                key={index}
                options={options}
                name={name}
                label={placeholder}
            />
        }
    })

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className={style.form}>
                {renderInputs}
                <button className={style.form__submit} type='submit'>Create segment</button>
            </Form>
        </Formik>
    );
};

export default CreateSegmentForm;