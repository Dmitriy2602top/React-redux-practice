import classNames from 'classnames';
import { type FC, type InputHTMLAttributes, type TextareaHTMLAttributes, useMemo } from 'react';
import { type ObjectValues } from 'shared/lib';

export const InputType = {
    formInput: 'input',
    formTextarea: 'textarea',
} as const;

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface textareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

type DynamicInputProps = (inputProps | textareaProps) & { type?: ObjectValues<typeof InputType> };

const MyInput: FC<DynamicInputProps> = ({ className, type = InputType.formInput, ...props }) => {
    const styles = useMemo(
        () =>
            classNames(
                'bg-bg-input text-text-form border solid border-border-btn rounded-4',
                type === InputType.formTextarea && 'resize-none appearance-none',
                className
            ),
        [type, className]
    );

    if (type === InputType.formInput) return <input {...(props as inputProps)} className={styles} />;
    return <textarea {...(props as textareaProps)} className={styles} />;
};

export default MyInput;
