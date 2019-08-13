import { MiddlewareFn, NextFn } from "type-graphql";
import { existsSync } from "fs";
import { ValidationError } from "yup";
import { formatYupError } from "../../utils/formatYupError";
export const YupValidation: MiddlewareFn = async (
    { info, args },
    next: NextFn
) => {
    if (info.parentType.toString() === "Mutation") {
        let path = __dirname + `/../user/${info.fieldName}/validationSchema.ts`;
        if (existsSync(path)) {
            const { validationSchema } = require(path);
            try {
                await validationSchema.validate(args.data);
            } catch (error) {
                if (error instanceof ValidationError) {
                    return formatYupError(error);
                } else {
                    throw error;
                }
            }
        }
    }

    return next();
};
