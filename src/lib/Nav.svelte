<script>
  import Button from './Button.svelte';
  import { getContext } from 'svelte';

  const { openForm } = getContext('state');
</script>

<nav class="nav">
  <div class="logo-box">
    <h2 class="logo"><span class="letter">฿</span>udget Calculator</h2>
  </div>
  <div class="links-box">
    <ul class="links">
      <li class="link">
        <Button text='✚ Add Expense' onClick={openForm} />
      </li>
    </ul>
  </div>
  
</nav>

<style>
  .nav {
    display: flex;
    height: 100%;
  }

  .logo-box {
    flex-basis: 15rem;
  }

  .logo {
    display: block;
    font-family: cursive;
    text-align: center;
    letter-spacing: .1rem;
    font-size: 2rem;
    transition: opacity .15s ease;
  }

  .letter {
    font-size: 2.5rem;;
  }

  .links-box {
    flex: 1;
    display: flex;
    justify-content: end;
  }

  .links {
    display: flex;
    justify-content: space-around;
    flex-basis: 30rem;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
</style>