/* eslint-disable function-paren-newline */
import classNames from 'classnames';
import { type FC } from 'react';
import { type PropsOf } from 'shared/lib';

interface SelectPropsOption {
    options: Array<{ key: string | number; value: string | number | undefined }>;
}
type SelectProps = PropsOf<'select'>;
type OptionProps = PropsOf<'option'>;
export type SelectOptionProps = (SelectProps | OptionProps) & SelectPropsOption;

export const MySelect: FC<SelectOptionProps> = ({ className, options, ...props }) => {
    return (
        <select
            defaultValue={options[0].key}
            className={classNames('bg-bg-input text-text-form text-12 font-400 rounded-4 px-3 py-2', className)}
            {...(props as SelectProps)}
        >
            {options.map((option, index: number) =>
                index === 0 ? (
                    <option disabled value={option.value} {...(props as OptionProps)} key={index}>
                        {option.key}
                    </option>
                ) : (
                    <option value={option.value} {...(props as OptionProps)} key={index}>
                        {option.key}
                    </option>
                )
            )}
        </select>
    );
};
