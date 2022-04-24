<script>
  export let id = 0, text = '', amount = 0;

  import { slide } from 'svelte/transition';

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
      <button class="edit btn">✎</button>
      <button class="trash btn">🗑</button>
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
    padding: .5rem;
    border-radius: .5rem;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .box {
    flex: 1;
    display: flex;
    justify-content: center;
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
    color: navy;
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
  }
</style>