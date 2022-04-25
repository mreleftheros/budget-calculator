<script>
  export let id = null, text = '', amount = 0;

  import { onMount } from "svelte";
  import { getContext } from 'svelte';
  import Button from './Button.svelte';

  let { addExpense, editExpense, cancelEditExpense, updateExpense } = getContext('state');
  let inputRef;
  $: selectInput(id);
  $: if (id === null) {
    text = '';
    amount = '';
  }
  $: isValid = text && text.length > 0 && !isNaN(+amount) && amount > 0 

  const handleSubmit = async () => {
    if (id || id === 0) {
      return editExpense(id, text, amount);
    } else {
      addExpense(text, amount)
      selectInput(id);
    }
    text = '';
    amount = 0;
  };

  const selectInput = (id) => inputRef && inputRef.select && inputRef.select();

  onMount(() => inputRef.select());
</script>

<form class="form" autocomplete='off' on:submit|preventDefault={handleSubmit}>
  <h2 class="title">
    {#if id || id === 0}
      Edit Expense
    {:else}
      Add Expense
    {/if}
  </h2>
  <div class="group">
    <label class="label" for="text">
      Text
    </label>
    <input class="input" type="text" id="text" bind:value={text} bind:this={inputRef}>
  </div>
  <div class="group">
    <label class="label" for="amount">
      Amount
    </label>
    <input class="input" type="number" step="0.01" min="0" id="amount" bind:value={amount}>
  </div>
  {#if id || id === 0}
    <div class="btns">
      <Button disabled={!isValid} text='Save' onClick={() => updateExpense(text, amount)} />
      <Button text='Cancel' onClick={cancelEditExpense} />
    </div>
  {:else}
    <Button type='submit' disabled={!isValid} text='Add' />
  {/if}
</form>

<style>
  .form {
    width: 100%;
  }

  .title {
    font-size: 3rem;
    margin: 2rem auto;
    text-align: center;
    letter-spacing: .1rem;
  }

  .group {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
  }

  .label {
    display: block;
    font-size: 2.5rem;
    margin-bottom: .5rem;
  }

  .input {
    display: block;
    font-size: 2rem;
    padding: 1rem;
    border-radius: .5rem;
    outline: none;
    border: 0;
    border-bottom: 1px solid;
  }

  .input:focus {
    background-color: #777;
    color: #fff;
  }

  .btns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
</style>