import * as Yup from 'yup';
import '../styles/styles.css';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('El nombre es requerido')
                        .min(2, 'El nombre debe tener al menos 2 caracteres')
                        .max(15, 'El nombre debe tener máximo 15 caracteres'),
                    email: Yup.string()
                        .email('El correo no es válido')
                        .required('El correo es requerido'),
                    password1: Yup.string()
                        .required('La contraseña es requerida')
                        .min(
                            6,
                            'La contraseña debe tener al menos 6 caracteres'
                        ),
                    password2: Yup.string()
                        .required('La contraseña es requerida')
                        .oneOf(
                            [Yup.ref('password1')],
                            'Las contraseñas deben ser iguales'
                        ),
                })}
            >
                {({ handleReset }) => (
                    <Form>
                        <MyTextInput
                            label="Name"
                            name="name"
                            placeholder="Name"
                        />

                        <MyTextInput
                            label="Email"
                            name="email"
                            placeholder="jonh@google.com"
                        />

                        <MyTextInput
                            label="Password"
                            name="password1"
                            type="password"
                            placeholder="******"
                        />

                        <MyTextInput
                            label="Repeat Password"
                            name="password2"
                            type="password"
                            placeholder="******"
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>
                            Reset
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
