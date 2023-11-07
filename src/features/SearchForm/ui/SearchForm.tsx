import classNames from 'classnames';
import { type FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { selectParameters } from 'shared/assets/selectParameters/selectParameters';
import { type PropsOf } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks';
import { type Data } from 'shared/models/types';
import { Button, ButtonType, MySelect } from 'shared/ui';
import { dataChange } from '../models/SearchSlice';

interface SearchFormJson extends Data {}
interface SearchFormProps extends PropsOf<'div'> {}

const SearchForm: FC<SearchFormProps> = ({ className }) => {
    const { control, handleSubmit } = useForm<SearchFormJson>();
    const dispatch = useAppDispatch();
    const onSubmit = (SearchParameters: SearchFormJson) => {
        dispatch(dataChange(SearchParameters));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classNames('bg-white rounded-4', className)}>
            <div className='flex flex-col text-text-form gap-3 p-7'>
                <div>
                    <h5 className='font-500'>Type</h5>
                    <Controller
                        name='YachtType'
                        control={control}
                        render={({ field }) => (
                            <MySelect
                                onChange={field.onChange}
                                className='mt-3 w-full appearance-none'
                                options={selectParameters.yachtType}
                            />
                        )}
                    ></Controller>
                </div>
                <div>
                    <h6 className='font-500'>Crew</h6>
                    <Controller
                        name='Crew'
                        control={control}
                        render={({ field }) => (
                            <MySelect
                                onChange={field.onChange}
                                className='mt-3 w-full appearance-none'
                                options={selectParameters.crew}
                            />
                        )}
                    ></Controller>
                </div>
                <div>
                    <h6 className='font-500'>Number of Guests</h6>
                    <Controller
                        name='GuestSleeping'
                        control={control}
                        render={({ field }) => (
                            <MySelect
                                onChange={field.onChange}
                                className='mt-3 w-full appearance-none'
                                options={selectParameters.numberGuests}
                            />
                        )}
                    ></Controller>
                </div>
                <div>
                    <h6 className='font-500'>Length</h6>
                    <Controller
                        name='length'
                        control={control}
                        render={({ field }) => (
                            <MySelect
                                onChange={field.onChange}
                                className='mt-3 w-full appearance-none'
                                options={selectParameters.length}
                            />
                        )}
                    ></Controller>
                </div>
                <div>
                    <h6 className='font-500'>Price range</h6>
                    <Controller
                        name='budget'
                        control={control}
                        render={({ field }) => (
                            <MySelect
                                onChange={field.onChange}
                                className='mt-3 w-full appearance-none'
                                options={selectParameters.budget}
                            />
                        )}
                    ></Controller>
                </div>
            </div>
            <Button type={ButtonType.submit} className='w-full rounded-t-0'>
                Search
            </Button>
        </form>
    );
};

export default SearchForm;
