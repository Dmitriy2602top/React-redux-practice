import classNames from 'classnames';
import { type FC, useMemo } from 'react';
import { type PropsOf, type ObjectValues } from 'shared/lib';

export const InputType = {
    formInput: 'input',
    formTextarea: 'textarea',
} as const;

type inputProps = PropsOf<'input'>;
type textareaProps = PropsOf<'textarea'>;

export type DynamicInputProps = (inputProps | textareaProps) & { types?: ObjectValues<typeof InputType> };

export const MyInput: FC<DynamicInputProps> = ({ className, types = InputType.formInput, ...props }) => {
    const styles = useMemo(
        () =>
            classNames(
                'bg-bg-input text-text-form border text-12 font-400 solid border-border-btn rounded-4',
                types === InputType.formTextarea && 'resize-none appearance-none py-4 pl-5 pr-7',
                types === InputType.formInput && 'px-3 py-2',
                className
            ),
        [types, className]
    );

    if (types === InputType.formInput) return <input {...(props as inputProps)} className={styles} />;
    return <textarea {...(props as textareaProps)} className={styles} />;
};
