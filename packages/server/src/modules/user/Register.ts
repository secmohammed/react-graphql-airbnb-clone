import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";
import { formatYupError } from "../../utils/formatYupError";
import { UserInputError } from "apollo-server-express";
import { sendEmail } from "../utils/sendEmail";
import { createConfirmationUrl } from "../utils/createConfirmationUrl";
import { registerUserValidationSchema } from "@abb/common";
@Resolver(User)
export class RegisterResolver {
    @Mutation(() => User)
    async register(@Arg("data", { validate: false })
    {
        email,
        firstName,
        lastName,
        password
    }: RegisterInput): Promise<User> {
        try {
            await registerUserValidationSchema.validate(
                {
                    email,
                    firstName,
                    lastName,
                    password
                },
                { abortEarly: false }
            );
        } catch (error) {
            throw new UserInputError(
                "Failed due to validation errors.",
                formatYupError(error)
            );
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        }).save();
        await sendEmail(email, await createConfirmationUrl(user.id));
        return user;
    }
}
