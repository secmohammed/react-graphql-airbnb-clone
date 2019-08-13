import * as React from "react";
import { RegisterView } from "./views/RegisterView";
import { RegisterController } from "@abb/common";
export class RegisterConnector extends React.PureComponent {
    render() {
        return (
            <RegisterController>
                {({ submit }: { submit: any }) => (
                    <RegisterView submit={submit} />
                )}
            </RegisterController>
        );
    }
}
