import React, { useEffect, useState } from 'react';
import {Field, Form, Formik} from "formik";
import SelectField from "../CreateSegmentForm/SelectField/SelectField";
import PageSection from "../PageSection/PageSection";
import style from './CreateMesageForm.module.scss'
import {Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import TextField from "@mui/material/TextField";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { Server } from '../../server/Server'

const CreateMessageForm = () => {
    const [value, setValue] = React.useState('immediately');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [segments, setSegments] = useState([])

    const refetch = async () => {
        // TODO: error handling
        setSegments(await Server.segment.list())
    }

    useEffect(() => {
        refetch();
    });

    return (
        <Formik
            initialValues={{
                receiver: [],
                black_list: [],
                message: '',
                schedule_time: null,
            }}
            onSubmit={(values) => {
                console.log(values);
            }}>
            {({setFieldValue, values}) => (
                <Form>
                    <PageSection title="Target group">
                        <div className={style.form__section}>
                            <div className={style.form__inputWrapper}>
                                <span>Select segments who will receive advice</span>
                                <SelectField
                                    label="select segements who will recieve advice..."
                                    name="receiver"
                                    options={segments.map(i => i.name)}
                                />
                            </div>

                            <Divider orientation="horizontal" flexItem>
                                OR
                            </Divider>

                            <div className={style.form__inputWrapper}>
                                <span>select segments who will NOT receive advice</span>
                                <SelectField
                                    label="select segements who will NOT recieve advice..."
                                    name="black_list"
                                    options={segments.map(i => i.name)}
                                />
                            </div>
                        </div>
                    </PageSection>

                    <PageSection title="Write a new message">

                        <div className={style.form__section}>
                            <Field
                                name="message"
                                as={TextField}
                                id="outlined-textarea"
                                label="Multiline Placeholder"
                                placeholder="Placeholder"
                                multiline
                                variant="outlined"
                            />
                            <div>
                            <span>
                                You might find following templates usefull:
                            </span>

                                <div className={style.form__suggections}>
                                <span>
                                    “Greetings, parents, and caregivers! Step into the 'Parenting Wellness & Self-Care' circle...”
                                </span>
                                    <span>
                                    “Dear parents, a warm welcome to our 'Parenting Wellness...”
                                </span>
                                    <span>
                                    “Hello, parenting warriors! Join the 'Parenting Wellness...”
                                </span>
                                </div>
                            </div>
                        </div>

                    </PageSection>

                    <PageSection title="Schedule time">
                        <div className={style.form__scheduleSection}>
                            <div>
                                <div>
                                    <FormControl>
                                        <FormLabel sx={{fontSize: '17px'}}
                                                   id="demo-controlled-radio-buttons-group"> When to
                                            send a message?</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="female" control={<Radio/>} label="Immediately"/>
                                            <FormControlLabel value="male" control={<Radio/>} label="Specific time"/>
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className={style.form__calendarWrapper}>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Field name="schedule_time">
                                            {({field}) => (
                                                <DatePicker
                                                    name={field.name}
                                                    label="Select date"
                                                    value={field.value}
                                                    onChange={(date) => {
                                                        setFieldValue("schedule_time", date.$d)
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            )}
                                        </Field>
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div className={style.form__timeDesctioption}>
                        <span>
                            {/* чомусь я не можу вивести актуальну дату на екран */}
                            {/* {console.log(values.schedule_time)} */}
                            Message will start sending Saturday, October 21,
                        </span>
                                <span>
                                2023 10:47 PM
                            </span>
                                <span>
                                UTC+03:00
                            </span>
                            </div>
                        </div>
                    </PageSection>

                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <button className={`btn-primary ${style.form__submit}`} type={"submit"}>Create</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default CreateMessageForm;