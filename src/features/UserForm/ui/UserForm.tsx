import classNames from 'classnames';
import { type FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { selectParameters } from 'features/SearchForm/config/selectParameters';
import { type PropsOf } from 'shared/lib';
import { MySelect } from 'shared/ui';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { InputType, MyInput } from 'shared/ui/input/Input';

interface UserFormJson {
    firstName: string;
    email: string;
    phone: string;
    YachtType: string;
    numberDays: number;
    numberGuests: number;
    budget: string;
    addIndormation: string;
}

interface UserFormProps extends PropsOf<'div'> {}

export const UserForm: FC<UserFormProps> = ({ className }) => {
    const { handleSubmit, control } = useForm<UserFormJson>();

    const onSubmit = (data: UserFormJson) => {
        alert(JSON.stringify(data));
    };

    return (
        <div
            className={classNames(
                'w-full px-7 py-5 rounded-4 shadow-forms translate-y-5 md:translate-y-0 bg-white',
                className
            )}
        >
            <h4 className='text-btn-blue text-center font-700 text-24 uppercase'>REQUEST A PACKAGE</h4>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='grid mt-5 text-text-form gap-3 grid-cols-2 md:grid-cols-1 md:gap-1'
            >
                <div className='md:col-span-2'>
                    <p>
                        <span className='text-btn-blue'>*</span>Name
                    </p>
                    <Controller
                        name='firstName'
                        control={control}
                        render={({ field }) => <MyInput {...field} className='mt-3 w-full' />}
                    />
                </div>
                <div className='md:col-span-2'>
                    <p>
                        <span className='text-btn-blue'>*</span>E-mail
                    </p>
                    <Controller
                        name='email'
                        control={control}
                        render={({ field }) => <MyInput {...field} className='mt-3 w-full' />}
                    />
                </div>
                <div className='md:col-span-2'>
                    <p>
                        <span className='text-btn-blue'>*</span>Phone
                    </p>
                    <Controller
                        name='phone'
                        control={control}
                        render={({ field }) => <MyInput {...field} className='mt-3 w-full' />}
                    />
                </div>
                <div className='md:col-span-2'>
                    <p>
                        <span className='text-btn-blue'>*</span>Yacht Type
                    </p>
                    <Controller
                        control={control}
                        name='YachtType'
                        render={({ field }) => (
                            <MySelect
                                onChange={field.onChange}
                                options={selectParameters.yachtType}
                                className='mt-3 w-full border solid border-border-btn appearance-none'
                            />
                        )}
                    />
                </div>
                <div className='md:col-span-2'>
                    <p>
                        <span className='text-btn-blue'>*</span>Number of Days
                    </p>
                    <Controller
                        control={control}
                        name='numberDays'
                        render={({ field }) => (
                            <MySelect
                                onChange={field.onChange}
                                options={selectParameters.numberDays}
                                className='mt-3 w-full border solid border-border-btn appearance-none'
                            />
                        )}
                    />
                </div>
                <div className='md:col-span-2'>
                    <p>
                        <span className='text-btn-blue'>*</span>Number of Guests
                    </p>
                    <Controller
                        name={'numberGuests'}
                        control={control}
                        render={({ field }) => <MyInput {...field} className='mt-3 w-full' />}
                    />
                </div>
                <div className='col-span-2'>
                    <p>
                        <span className='text-btn-blue'>*</span>Budget (THB)
                    </p>
                    <Controller
                        control={control}
                        name='budget'
                        render={({ field }) => (
                            <MySelect
                                onChange={field.onChange}
                                options={selectParameters.budget}
                                className='mt-3 w-full border solid border-border-btn appearance-none'
                            />
                        )}
                    />
                </div>
                <div className='col-span-2'>
                    <Controller
                        control={control}
                        name='addIndormation'
                        render={({ field }) => (
                            <MyInput
                                {...field}
                                placeholder='Additional information'
                                types={InputType.formTextarea}
                                className='w-full'
                            />
                        )}
                    />
                </div>
                <Button type={ButtonType.submit} className='col-span-2 text-18 mt-1'>
                    Submit
                </Button>
            </form>
        </div>
    );
};
