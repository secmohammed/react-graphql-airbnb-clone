// @ts-ignore
import * as React from "react";
import { useMutation } from "@apollo/react-hooks";
import REGISTER_MUTATION from "../../graphql/mutations/REGISTER_MUTATION";
interface Props {
    children: (data: {
        submit: (values: any) => Promise<null>;
    }) => JSX.Element | null;
}
export const RegisterController = (props: Props) => {
    const [register] = useMutation(REGISTER_MUTATION);
    const submit = (values: any) => {
        return register({
            variables: values
        })
            .then(() => {
                return null;
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    };
    return props.children({ submit });
};
