<script>
  import Button from './Button.svelte';
</script>

<nav class="nav">
  <div class="logo-box">
    <a href="/" class="logo"><span class="letter">฿</span>udget Calculator</a>
  </div>
  <div class="links-box">
    <ul class="links">
      <li class="link">
        <Button text='✚ Add Expense' onClick={() => console.log('clicked')} />
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

  .logo:hover {
    opacity: .5;
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