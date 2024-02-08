interface SelectParametersCity {
    city: Array<{ key: string; value: string }>;
}

export const selectParametersCity: SelectParametersCity = {
    city: [
        { key: 'Москва', value: 'moscow' },
        { key: 'Воронеж', value: 'voronej' },
        { key: 'Тамбов', value: 'tambov' },
    ],
};
