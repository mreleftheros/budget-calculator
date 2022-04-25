<script>
	import Header from './layout/Header.svelte';
	import Main from './layout/Main.svelte';
	import Footer from './layout/Footer.svelte';
	import Expenses from './lib/Expenses.svelte';
	import ExpenseForm from './lib/ExpenseForm.svelte';
	import Modal from './lib/Modal.svelte';
	import { setContext } from 'svelte';
	import { getStorageExpenses, setStorageExpenses } from './storage';

	let expenses = getStorageExpenses();
	let edit = null;
	let formShow = true;
	$: expenseLen = expenses.length;
	$: expenseExists = expenseLen > 0;
	$: expenseTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
	$: id = expenseLen === 0 ? 0 : Math.max(...expenses.map(e => e.id)) + 1;
	$: if (edit) {
		openForm();
	} else {
		closeForm();
	}
	$: setStorageExpenses(expenses);

	const addExpense = (text, amount) => expenses = [{text, amount, id}, ...expenses];

	const deleteExpense = id => expenses = expenses.filter(e => e.id !== id);

	const editExpense = (id, text, amount) => edit = {id, text, amount};

	const cancelEditExpense = () => edit = null;

	const updateExpense = (text, amount) => {
		const i = expenses.findIndex(e => e.id === edit.id);
		expenses[i] = {...expenses[i], text, amount};

		return cancelEditExpense();
	}

	const clearExpenses = () => expenses = [];

	const openForm = () => formShow = true;

	const closeForm = () => formShow = false;

	setContext('state', {
		addExpense,
		deleteExpense,
		editExpense,
		cancelEditExpense,
		updateExpense,
		openForm,
		closeForm
	});
</script>
<Header />
<Main>
	<Expenses {expenses} {expenseLen} {expenseTotal} {expenseExists} onClear={clearExpenses} />
</Main>
<Footer />
{#if formShow}
	<Modal onClose={closeForm}>
		<ExpenseForm {...edit} />
	</Modal>
{/if}