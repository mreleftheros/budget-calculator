export const getStorageExpenses = () =>
  localStorage.getItem('expenses')
    ? JSON.parse(localStorage.getItem('expenses'))
    : [];

export const setStorageExpenses = expenses =>
  localStorage.setItem('expenses', JSON.stringify(expenses));
