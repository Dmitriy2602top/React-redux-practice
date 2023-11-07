const NumberGeneratorMassive = (num: number) => {
    const arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push({ key: i, value: i });
    }
    return arr;
};

interface SelectParameters {
    yachtType: Array<{ key: string; value: string | undefined }>;
    numberDays: Array<{ key: number; value: number | undefined }>;
    budget: Array<{ key: string; value: number | undefined }>;
    numberGuests: Array<{ key: number; value: number | undefined }>;
    length: Array<{ key: string; value: number | undefined }>;
    crew: Array<{ key: number; value: number | undefined }>;
}

export const selectParameters: SelectParameters = {
    // UserForm
    yachtType: [
        { key: 'Выберите тип яхты', value: undefined },
        { key: 'Motor', value: 'Motor' },
        { key: 'parus', value: 'parus' },
        { key: 'vesla', value: 'vesla' },
    ],
    numberDays: NumberGeneratorMassive(10),
    budget: [
        { key: 'Ваш бюджет', value: undefined },
        { key: '0-100000', value: 10000000 },
        { key: '100000-200000', value: 20000000 },
        { key: '200000-300000', value: 30000000 },
        { key: '300000-400000', value: 40000000 },
    ],
    numberGuests: NumberGeneratorMassive(10),
    length: [
        { key: 'Выберите длинну яхты', value: undefined },
        { key: '100m', value: 100 },
        { key: '110m', value: 110 },
        { key: '120m', value: 120 },
    ],
    crew: NumberGeneratorMassive(5),
};
