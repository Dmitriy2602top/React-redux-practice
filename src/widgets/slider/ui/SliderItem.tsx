import { type FC } from 'react';
import { type ISlider } from 'shared/models/types';
import { Button, ButtonType } from 'shared/ui';

export const SliderItem: FC<ISlider> = ({ description, image, ...props }) => {
    return (
        <div {...props}>
            <img className='rounded-4' src={image} />
            <div className='mt-5 flex flex-col justify-between px-2'>
                <p className='text-text-blog md:text-12'>{description}</p>
                <Button className='mt-2 md:text-14 self-start' type={ButtonType.blank}>
                    More
                </Button>
            </div>
        </div>
    );
};
