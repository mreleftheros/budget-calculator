<script>
  export let expenses = [], expenseLen = 0, expenseTotal = 0, expenseExists = false, onClear;

  import Expense from './Expense.svelte';
  import Button from './Button.svelte';
</script>

<ul class="expenses">
  <h2 class="total">Total Expenses: {expenseLen}</h2>
  <p class="amount">Total Amount: <span class="price">${expenseTotal}</span></p>
  {#each expenses as expense (expense.id)}
    <Expense {...expense} />
  {:else}
    <p class="para">No expenses...</p>
  {/each}
  <Button disabled={!expenseExists} onClick={onClear} text='Clear Expenses' />
</ul>

<style>
  .expenses {
    width: 80%;
    max-width: 60rem;
    margin: 1rem auto;
    box-shadow: 1px 2px 3px #111;
    padding: 1rem;
  }

  .total {
    text-align: center;
    font-size: 3rem;
  }

  .amount {
    font-size: 2rem;
    margin: 2rem auto;
  }

  .price {
    font-weight: bolder;
    font-size: 2.5rem;
  }

  .para {
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0;
  }
</style>