import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";
import { sendEmail } from "../utils/sendEmail";
import { createConfirmationUrl } from "../utils/createConfirmationUrl";
@Resolver(User)
export class RegisterResolver {
    @Mutation(() => User)
    async register(@Arg("data")
    {
        email,
        firstName,
        lastName,
        password
    }: RegisterInput): Promise<User> {
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
