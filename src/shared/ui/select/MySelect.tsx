import { type FC } from 'react';
import { type PropsOf } from 'shared/lib';

interface SelectPropsOption {
    options: Array<string | number>;
}
type SelectProps = PropsOf<'select'>;
type OptionProps = PropsOf<'option'>;

type SelectOptionProps = (SelectProps | OptionProps) & SelectPropsOption;

const MySelect: FC<SelectOptionProps> = ({ className, options, ...props }) => {
    console.log(options);
    return (
        <select {...(props as SelectProps)}>
            {options.map((option, index) => (
                <option key={index}>{option}</option>
            ))}
        </select>
    );
};

export default MySelect;
