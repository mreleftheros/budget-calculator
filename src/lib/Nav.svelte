<script>

</script>

<nav class="nav">
  <div class="logo-box">
    <a href="/" class="logo"><span class="letter">฿</span>udget Calculator</a>
  </div>
  <div class="links-box">
    <ul class="links">
      <li class="link">
        ✚ Add Expense
      </li>
      <li class="link">
        <a href="/about">About</a>
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
    padding: .5rem;
    cursor: pointer;
    transition: transform .15s ease-out;
  }

  .link:hover {
    transform: scale(.95);
  }
</style>