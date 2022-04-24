<script>
	import Header from './layout/Header.svelte';
	import Main from './layout/Main.svelte';
	import Footer from './layout/Footer.svelte';
	import Expenses from './lib/Expenses.svelte';
	import { setContext } from 'svelte';
	import data from './data';

	let expenses = data.map((e, i) => ({...e, id: i}));
	$: expenseLen = expenses.length;
	$: expenseExists = expenseLen > 0;
	$: expenseTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
	$: id = expenseLen === 0 ? 0 : Math.max(...expenses.map(e => e.id)) + 1;

	const addExpense = (text, amount) => expenses = [{text, amount, id}, ...expenses];

	const deleteExpense = id => expenses = expenses.filter(e => e.id !== id);

	const clearExpenses = () => expenses = [];

	setContext('state', {
		addExpense,
		deleteExpense
	});
</script>
<Header />
<Main>
	<Expenses {expenses} {expenseLen} {expenseTotal} {expenseExists} onClear={clearExpenses} />
</Main>
<Footer />