<script>
	import Header from './layout/Header.svelte';
	import Main from './layout/Main.svelte';
	import Footer from './layout/Footer.svelte';
	import Expenses from './lib/Expenses.svelte';
	import ExpenseForm from './lib/ExpenseForm.svelte';
	import { setContext } from 'svelte';
	import data from './data';

	let expenses = data.map((e, i) => ({...e, id: i}));
	let edit = null;
	$: expenseLen = expenses.length;
	$: expenseExists = expenseLen > 0;
	$: expenseTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
	$: id = expenseLen === 0 ? 0 : Math.max(...expenses.map(e => e.id)) + 1;

	const addExpense = (text, amount) => expenses = [{text, amount, id}, ...expenses];

	const deleteExpense = id => expenses = expenses.filter(e => e.id !== id);

	const editExpense = (id, text, amount) => edit = {id, text, amount};

	const cancelEditExpense = () => edit = null;

	const clearExpenses = () => expenses = [];

	setContext('state', {
		addExpense,
		deleteExpense,
		editExpense,
		cancelEditExpense
	});
</script>
<Header />
<Main>
	<div class="box">
		<ExpenseForm {...edit} />
	</div>
	<Expenses {expenses} {expenseLen} {expenseTotal} {expenseExists} onClear={clearExpenses} />
</Main>
<Footer />

<style>
	.box {
		max-width: 60rem;
		margin: 1rem auto;
		background-color: #fff;
		padding: 1rem;
	}
</style>