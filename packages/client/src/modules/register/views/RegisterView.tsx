import * as React from "react";
import { Form, Icon, Button } from "antd";
import {
    withFormik,
    FormikErrors,
    FormikProps,
    Field,
    Form as FForm
} from "formik";
import { registerUserValidationSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";
interface FormValues {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
    render() {
        return (
            <FForm style={{ display: "flex" }}>
                <div style={{ width: 400, margin: "auto" }}>
                    <Field
                        name="email"
                        prefix={
                            <Icon
                                type="user"
                                style={{ color: "rgba(0,0,0,.25)" }}
                            />
                        }
                        placeholder="Email"
                        component={InputField}
                    />
                    <Field
                        name="firstName"
                        prefix={
                            <Icon
                                type="user"
                                style={{ color: "rgba(0,0,0,.25)" }}
                            />
                        }
                        placeholder="first name"
                        component={InputField}
                    />
                    <Field
                        name="lastName"
                        prefix={
                            <Icon
                                type="user"
                                style={{ color: "rgba(0,0,0,.25)" }}
                            />
                        }
                        placeholder="last name"
                        component={InputField}
                    />
                    <Field
                        name="password"
                        prefix={
                            <Icon
                                type="lock"
                                style={{ color: "rgba(0,0,0,.25)" }}
                            />
                        }
                        type="password"
                        placeholder="Password"
                        component={InputField}
                    />
                    <Form.Item>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Register
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        Or <a href="">login now!</a>
                    </Form.Item>
                </div>
            </FForm>
        );
    }
}

export const RegisterView = withFormik<Props, FormValues>({
    validationSchema: registerUserValidationSchema,
    mapPropsToValues: () => ({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
    }
})(C);
