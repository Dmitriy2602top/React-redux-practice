import { type DataFilters, type Data } from 'shared/models/types';

export function filterObject(mainObject: Data, filtersObject: DataFilters) {
    let resultFilter = false;

    if (
        (mainObject.Crew === Number(filtersObject.Crew) || filtersObject.Crew === undefined) &&
        (mainObject.YachtType === filtersObject.YachtType || filtersObject.YachtType === undefined) &&
        (mainObject.length === Number(filtersObject.length) || filtersObject.length === undefined) &&
        (mainObject.GuestSleeping === Number(filtersObject.GuestSleeping) ||
            filtersObject.GuestSleeping === undefined) &&
        (mainObject.budget <= Number(filtersObject.budget) || filtersObject.budget === undefined)
    ) {
        resultFilter = true;
    } else {
        resultFilter = false;
    }
    return resultFilter;
}
