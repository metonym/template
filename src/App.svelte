<script>
  let count = 0;
</script>

<div>
  <h1
    on:click={() => {
      count++;
    }}
  >
    Hello world
  </h1>
  <p>{count}</p>
</div>

<style>
  div {
    padding: 1rem;
  }

  h1 {
    font-family: sans-serif;
  }
</style>
