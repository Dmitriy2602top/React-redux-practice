const NumberGeneratorMassive = (num: number) => {
    const arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push(i);
    }
    return arr;
};
interface SelectParameters {
    yachtType: string[];
    numberDays: number[];
    budget: string[];
    numberGuests: number[];
    length: string[];
}

export const selectParameters: SelectParameters = {
    // REQUEST
    yachtType: ['Motor', 'parus', 'vesla'],
    numberDays: NumberGeneratorMassive(10),
    budget: ['0-100000', '100000-200000', '200000<'],
    numberGuests: NumberGeneratorMassive(10),
    length: ['236m', '324m', '86m', '150m'],
};
