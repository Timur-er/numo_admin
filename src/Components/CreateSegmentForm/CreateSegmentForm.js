import React from 'react';
import {segmentModelCustomerInfo, segmentModelFamilyInfo} from "./SegmentModel";
import FieldBlock from "./FieldBlock/FieldBlock";
import {Field, Form, Formik} from "formik";
import SelectField from "./SelectField/SelectField";
import style from './CreateSegmentForm.module.scss'
import { Server } from '../../server/Server'
import { useNavigate } from 'react-router'
import PageSection from "../PageSection/PageSection";
import SliderField from "./SliderField/SliderField";
import TextField from "@mui/material/TextField";
const CreateSegmentForm = () => {

    const customerInitialValues = segmentModelCustomerInfo.reduce((acc, segmentBlock) => {
        acc[segmentBlock.name] = segmentBlock.initial_values; // set the initial value for each field
        return acc;
    }, {});

    const familyInitialValues = segmentModelFamilyInfo.reduce((acc, segmentBlock) => {
        acc[segmentBlock.name] = segmentBlock.initial_values; // set the initial value for each field
        return acc;
    }, {});

    const initialValues = {segment_name: '' ,...customerInitialValues, ...familyInitialValues}

    const renderInputs = segmentModelCustomerInfo.map((segmentBlock, index) => {
        const {type, name, placeholder, options, start, end} = segmentBlock;
        switch (type) {
            case "select":
                return <SelectField
                    key={index}
                    label={placeholder}
                    name={name}
                    options={options}
                />
            case "slider":
                return <SliderField
                    key={index}
                    label={placeholder}
                    name={name}
                    options={options}
                    start={start}
                    end={end}
                />
            default:
                return <FieldBlock
                    key={index}
                    options={options}
                    name={name}
                    label={placeholder}
                />
        }
    })


    const renderFamilyInputs = segmentModelFamilyInfo.map((segmentBlock, index) => {
        const {type, name, placeholder, options, start, end} = segmentBlock;

        switch (type) {
            case "select":
                return <SelectField
                    key={index}
                    label={placeholder}
                    name={name}
                    options={options}
                />
            case "slider":
                return <SliderField
                    key={index}
                    label={placeholder}
                    name={name}
                    options={options}
                    start={start}
                    end={end}
                />
            default:
                return <FieldBlock
                    key={index}
                    options={options}
                    name={name}
                    label={placeholder}
                />
        }
    })

    const navigate = useNavigate();

    const onSubmit = (values) => {
        const filters = values

        Server.segment.create({
            name: `Segment ${Math.round(Math.random() * 1000)}`,
            filters
        })

        navigate(`/segments`)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className={style.form}>
                <div className={style.form__nameInput}>
                    <span>Segment name: </span>
                    <Field name="segment_name">
                        {({ field }) => (
                            <TextField
                                {...field}
                                label="Segment Name"
                                variant="outlined"
                            />
                        )}
                    </Field>
                </div>

                <PageSection title="Customer information">
                    <div className={style.form__content}>
                        {renderInputs}
                    </div>
                </PageSection>

                <PageSection title="Family information">
                    <div className={style.form__content}>
                        {renderFamilyInputs}
                    </div>
                </PageSection>
                <button className="btn-primary" type='submit'>Create segment</button>
            </Form>
        </Formik>
    );
};

export default CreateSegmentForm;