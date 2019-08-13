import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

const FormItem = Form.Item;

export const InputField: React.SFC<
    FieldProps<any> & { prefix: React.ReactNode }
> = ({ field, form: { touched, errors }, ...props }) => {
    const hasErrorMessage = touched[field.name] && errors[field.name];
    return (
        <FormItem
            help={hasErrorMessage}
            validateStatus={hasErrorMessage ? "error" : undefined}
        >
            <Input {...field} {...props} />
        </FormItem>
    );
};
