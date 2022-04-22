<script>
	import Header from './layout/Header.svelte';
	import Main from './layout/Main.svelte';
	import Footer from './layout/Footer.svelte';
	import Expenses from './lib/Expenses.svelte';
	import data from './data';

	let expenses = data.map((e, i) => ({...e, id: i}));
	$: expenseLen = expenses.length;
	$: expenseTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
	$: id = expenseLen === 0 ? 0 : Math.max(...expenses.map(e => e.id)) + 1;

	const addExpense = (text, amount) => expenses = [{text, amount, id}, ...expenses];
</script>
<Header />
<Main>
	<Expenses {expenses} {expenseLen} {expenseTotal} />
</Main>
<Footer />