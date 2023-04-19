import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MyCheckbox, MySelect } from '../components';

import '../styles/styles.css';

export const FormikAbstractation = () => {
    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().required('First name is required'),
                    lastName: Yup.string().required('Last name is required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Email is required'),
                    terms: Yup.boolean().oneOf(
                        [true],
                        'Terms and Conditions must be accepted'
                    ),
                    jobType: Yup.string()
                        .required('Job Type is required')
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        ),
                })}
            >
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            placeholder="First Name"
                        />

                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            placeholder="Last Name"
                        />

                        <MyTextInput
                            label="Email Address"
                            name="email"
                            placeholder="jonh@google.com"
                            type="email"
                        />

                        <MySelect label="Job Type" name="jobType">
                            <option value="">Select a job type</option>
                            <option value="designer">Designer</option>
                            <option value="development">Developer</option>
                            <option value="product">Product Manager</option>
                            <option value="other">Other</option>
                        </MySelect>

                        <MyCheckbox label="Terms and Conditions" name="terms" />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
