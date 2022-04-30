<script>
  let count = 0;

  $: console.log(count);
</script>

<h1 on:click={() => count++}>Welcome to SvelteKit {count}</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<a href="/about">About</a>
