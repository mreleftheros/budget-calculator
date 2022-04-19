<script>
  export let type = 'button', text = '', onClick = null;
</script>

<button {type} class="btn" on:click={onClick}>
  {text}
</button>

<style>
  .btn {
    background: none;
    padding: 1rem 3rem;
    border: solid #fcce29;
    font-size: 1.5rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: transform .15s ease-in-out;
    color: #fcce29;
    font-size: 1.5rem;
    text-shadow: 0 0 1px #111;
  }

  .btn:hover {
    transform: scale(.95);
  }
</style>