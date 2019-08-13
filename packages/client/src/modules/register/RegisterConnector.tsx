import * as React from "react";
import { RegisterView } from "./views/RegisterView";
import { RegisterController } from "@abb/common";
export class RegisterConnector extends React.PureComponent {
    dummySubmit = async (values: any) => {
        console.log(values);
        return null;
    };

    render() {
        return (
            <React.Fragment>
                <RegisterController />
                <RegisterView submit={this.dummySubmit} />
            </React.Fragment>
        );
    }
}
