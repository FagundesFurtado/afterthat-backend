import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsPositiveNumberArray(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            name: 'IsPositiveNumberArray',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any[]) {
                    return value.every((item: any) => item instanceof Number && item > 0);
                },
            },
        });
    };
}