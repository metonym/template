<script>
  import Button from "./Button.svelte";

  let version = process.env.VERSION;
  let count = 10;
</script>

{count}

{version}

<Button bind:count>Increment the count</Button>
