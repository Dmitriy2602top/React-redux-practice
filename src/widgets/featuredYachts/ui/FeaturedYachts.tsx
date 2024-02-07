import { useEffect, useState } from 'react';
import { ChoiceCardShips } from 'entities/choiceCardShips/ui/ChoiceCardShips';
import SearchForm from 'features/SearchForm/ui/SearchForm';
import { apiService } from 'shared/api/apiService';
import Map from 'shared/assets/image/viewMap.png';
import { filterObject } from 'shared/lib/filterObjects';
import { useAppSelector } from 'shared/lib/hooks/reduxHooks';
import { type ICard } from 'shared/models/types';
import { Button, ButtonType } from 'shared/ui';

export const FeaturedYachts = () => {
    const { data: ships, isLoading: loadingShips, isError } = apiService.useFetchAllShipsQuery(6);
    const { data: searchParametersShips } = useAppSelector(state => state.SearchReducer);
    const [shipsFilters, setShipsFilters] = useState<ICard[]>();

    useEffect(() => {
        setShipsFilters(ships && [...ships].filter(ship => filterObject(ship, searchParametersShips)));
    }, [searchParametersShips]);

    return (
        <div className='my-5 container grid grid-cols-4 gap-6'>
            <div className='col-span-1'>
                <SearchForm />
                <div className='relative mt-6'>
                    <div className='flex pl-7 gap-72 pr-9 py-9 flex-col text-white justify-between'>
                        <h5 className='font-800'>
                            DESTINATIONS <br />
                            AROUND PHUKET ISLAND <br />
                            View map
                        </h5>
                        <h4 className='capitalize text-34 font-700'>Destinations and iteniraries</h4>
                    </div>
                    <img src={Map} className='absolute w-full object-cover rounded-4 h-full -z-10 top-0 left-0' />
                </div>
            </div>
            <div className='grid col-span-3 gap-6'>
                <div className='flex gap-6 justify-between flex-col'>
                    {shipsFilters?.length === 0 ? (
                        <div className='flex justify-center'>
                            <h3 className='uppercase text-text-accent font-600 text-25'>ships not found</h3>
                        </div>
                    ) : (
                        <></>
                    )}
                    {shipsFilters !== undefined ? (
                        <>
                            <div className='grid-cols-3 grid gap-6'>
                                <ChoiceCardShips cards={shipsFilters} />
                            </div>
                            <Button className='text-text-accent w-full grow-0' type={ButtonType.view}>
                                View all
                            </Button>
                        </>
                    ) : (
                        ships && (
                            <>
                                <div className='grid-cols-3 grid gap-6'>
                                    <ChoiceCardShips cards={ships} />
                                </div>
                                <Button className='text-text-accent w-full grow-0' type={ButtonType.view}>
                                    View all
                                </Button>
                            </>
                        )
                    )}

                    {isError ? (
                        <h1 className='text-red-500 text-center text-22'>Не удается получить доступ к сайту</h1>
                    ) : (
                        <></>
                    )}
                    {loadingShips && <h1 className='text-blue-500 text-center text-30'>Loading</h1>}
                </div>
            </div>
        </div>
    );
};
