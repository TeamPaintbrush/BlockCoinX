export const formatCurrency = (amount: number, currencySymbol: string = '$'): string => {
    return `${currencySymbol}${amount.toFixed(2)}`;
};

export const formatPercentage = (value: number): string => {
    return `${value.toFixed(2)}%`;
};

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};