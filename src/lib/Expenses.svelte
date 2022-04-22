<script>
  export let expenses = [], expenseLen = 0, expenseTotal = 0;

  import Expense from './Expense.svelte';
</script>

<h2>Total Expenses {expenseLen}</h2>
<p>Total Amount ${expenseTotal}</p>
{#each expenses as expense (expense.id)}
  <Expense {...expense} />
{:else}
  <p>No expenses</p>
{/each}

<style>

</style>