<script>
	import Header from './layout/Header.svelte';
	import Main from './layout/Main.svelte';
	import Footer from './layout/Footer.svelte';
	import data from './data';
	import { onMount } from 'svelte';

	let expenses = [...data];
	$: totalExpenses = expenses.length;
	$: id = totalExpenses === 0 ? 0 : Math.max(...expenses.map(e => e.id)) + 1;

	const addExpense = (text, amount) => {
		return expenses = [{text, amount, id}, ...expenses];
	};

	onMount(() => {
		expenses = expenses.map((e, i) => ({...e, id: i}));
	});

</script>
<Header />
<Main>
	<h2>Total Expenses {totalExpenses}</h2>
	{#each expenses as {text, amount} (text)}
		<div>
			<h2>{text}</h2>
			<p>Price: ${amount}</p>
		</div>
	{:else}
		<p>No expenses</p>
	{/each}
</Main>
<Footer />