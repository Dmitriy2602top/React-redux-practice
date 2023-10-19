import classNames from 'classnames';
import { type FC } from 'react';
import { type PropsOf } from 'shared/lib';

interface SelectPropsOption {
    options: Array<string | number>;
}
type SelectProps = PropsOf<'select'>;
type OptionProps = PropsOf<'option'>;

export type SelectOptionProps = (SelectProps | OptionProps) & SelectPropsOption;

const MySelect: FC<SelectOptionProps> = ({ className, options, ...props }) => {
    return (
        <select
            className={classNames('bg-bg-input text-text-form text-12 font-400 rounded-4 px-3 py-2', className)}
            {...(props as SelectProps)}
        >
            {options.map((option, index) => (
                <option key={index}>{option}</option>
            ))}
        </select>
    );
};

export default MySelect;
