<script>
  let count = 0;
  let data = {};
</script>

<div>
  <h1
    on:click={() => {
      count++;
    }}
  >
    Hello world.
  </h1>
  <p>{count}</p>
</div>

{data?.a ?? 42}

<style>
  div {
    padding: 1rem;
  }

  h1 {
    font-family: sans-serif;
  }
</style>
