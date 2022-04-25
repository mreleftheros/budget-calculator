<script>
  export let onClose;

  import { fly, fade } from 'svelte/transition';
</script>

<div class="box" on:click|self={onClose} transition:fade>
  <div class="modal" transition:fly={{y: 200}}>
    <slot />
    <button class="close" on:click={onClose}>X</button>
  </div>
</div>

<style>
  .box {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 60vw;
    min-height: 80vh;
    background-color: #fff;
    padding: 1rem;
    border-radius: 1rem;
  }

  .close {
    position: absolute;
    display: block;
    top: 3%;
    left: 97%;
    transform: translate(-97%, -3%);
    border: 0;
    color: #fff;
    background-color: orangered;
    font-size: 2rem;
    cursor: pointer;
    padding: 1rem 2.5rem;
    border-radius: 1rem;
    font-weight: 900;
  }

  .close:hover {
    transform: translate(-98%, -3%) scale(0.99);
  }
</style>