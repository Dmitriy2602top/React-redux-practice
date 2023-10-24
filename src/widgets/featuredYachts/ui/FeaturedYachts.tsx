import { shipsApi } from 'entities/choiceCardShips/api/shipsService';
import { ChoiceCardShips } from 'entities/choiceCardShips/ui/ChoiceCardShips';
import Map from 'shared/assets/image/viewMap.png';
import { Button, ButtonType } from 'shared/ui';

export const FeaturedYachts = () => {
    const { data: ships, isLoading: loadingShips, isError } = shipsApi.useFetchAllShipsQuery(6);

    return (
        <div className='my-5 container grid grid-cols-4 gap-6'>
            <div className='col-span-1'>
                <div className='relative'>
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
            <div className='grid col-span-3 gap-6 grid-cols-3'>
                {ships && <ChoiceCardShips cards={ships} />}
                {isError ? (
                    <h1 className='text-red-500 text-center text-22'>Не удается получить доступ к сайту</h1>
                ) : (
                    <></>
                )}
                {loadingShips && <h1 className='text-blue-500 text-center text-30'>Loading</h1>}
                <Button className='text-text-accent col-span-3' type={ButtonType.view}>
                    View all
                </Button>
            </div>
        </div>
    );
};
