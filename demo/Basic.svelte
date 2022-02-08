<script>
  import { Button } from "component-library-sveltekit";

  let count = 0;
</script>

<Button on:click={() => count++}>Hello world {count}</Button>
