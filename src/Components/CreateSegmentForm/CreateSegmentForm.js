import React from 'react';
import {segmentModel} from "./SegmentModel";
import FieldBlock from "./FieldBlock/FieldBlock";
import {Form, Formik} from "formik";
import SelectField from "./SelectField/SelectField";
import style from './CreateSegmentForm.module.scss'
import { Server } from '../../server/Server'
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
        const filters = values

        Server.segment.create({
            name: `Segment ${Math.round(Math.random() * 1000)}`,
            filters
        })
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className={style.form}>
                {renderInputs}
                <button className="btn-primary" type='submit'>Create segment</button>
            </Form>
        </Formik>
    );
};

export default CreateSegmentForm;