import classNames from 'classnames';
import { useMemo, type FC } from 'react';
import { Link } from 'react-router-dom';
import { type PropsOf, type OneOf, type ObjectValues } from 'shared/lib';

export const ButtonType = {
    submit: 'submit',
    blank: 'blank',
    view: 'view',
} as const;

export type ButtonProps = OneOf<
    Omit<PropsOf<'button'>, 'type' | 'children'>,
    Omit<PropsOf<typeof Link>, 'type' | 'children'>
> &
    React.PropsWithChildren & {
        type?: ObjectValues<typeof ButtonType>;
    };

export const Button: FC<ButtonProps> = ({ className, type = ButtonType.blank, ...props }) => {
    const styles = useMemo(
        () =>
            classNames(
                'flex justify-center leading-5 items-center',
                type === ButtonType.blank && 'text-btn-blue text-18 font-700',
                type === ButtonType.submit && 'px-6 flex-grow py-4 rounded-4 bg-btn-blue text-white font-600 text-20',
                type === ButtonType.view && 'px-6 flex-grow py-4 rounded-4 bg-white text-btn-blue font-600 text-20',
                className
            ),
        [type, className]
    );

    if (props.to !== undefined) return <Link {...props} className={styles}></Link>;
    return <button {...props} className={styles} />;
};
