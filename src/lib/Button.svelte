<script>
  export let type = 'button', text = '', disabled = false, onClick = null;
</script>

<button {type} class="btn" class:disabled {disabled} on:click={onClick}>
  {text}
</button>

<style>
  .btn {
    background: none;
    padding: 1rem 2.5rem;
    border: 0;
    font-size: 2rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: opacity .15s ease;
    background-color: #fcce29;
    font-size: 1.8rem;
    width: 100%;
    color: #fff;
  }

  .btn:hover {
    opacity: .9;
  }

  .disabled {
    background-color: #fee795;
    cursor: auto;
  }
</style>