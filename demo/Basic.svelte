<script>
  import { Button } from "component-sveltekit";

  let count = 0;
</script>

<Button on:click={() => count++}>Hello world {count}</Button>
