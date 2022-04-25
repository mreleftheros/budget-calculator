<script>
  export let id = 0, text = '', amount = 0;

  import { getContext } from 'svelte';
  import { slide } from 'svelte/transition';

  const { addExpense, deleteExpense, editExpense } = getContext('state');
  let amountShow = false;

  const toggleShow = () => {
    return amountShow = !amountShow;
  };
</script>

<li class="item">
  <div class="content">
    <div class="box">
      <h2 class="text">{text}</h2>
      <button class="arrow" on:click={toggleShow}>
        {#if amountShow}
          ▲
        {:else}
          ▼
        {/if}
      </button>
    </div>
    <div class="btns">
      <button class="edit btn" on:click={() => editExpense(id, text, amount)}>✎</button>
      <button class="trash btn" on:click={() => deleteExpense(id)}>🗑</button>
    </div>
  </div>
  {#if amountShow}
    <p transition:slide>Amount: ${amount}</p>
  {/if}
</li>

<style>
  .item {
    width: 100%;
    margin: 1rem 0;
    background-color: rgba(0, 0, 0, .1);
    padding: 1rem;
    border-radius: .5rem;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .box {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .text {
    text-align: center;
  }

  .arrow {
    margin-left: 1rem;
    border: 0;
    font-size: 1.2rem;
    height: 2rem;
    cursor: pointer;
    background-color: transparent;
    transform: translateY(-.3rem);
    color: darkcyan;
    transition: opacity .15s ease;
  }

  .arrow:hover {
    opacity: .5;
  }

  .btns {
    flex-basis: 5rem;
  }

  .edit {
    color: #066506;
  }

  .trash {
    color: #ac2f48;
  }

  .btn {
    border: 0;
    font-size: 2.5rem;
    height: 3rem;
    cursor: pointer;
    background-color: transparent;
    transition: opacity .15s ease;
  }

  .btn:hover {
    opacity: .5;
  }
</style>