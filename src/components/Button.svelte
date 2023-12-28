<script lang="ts">
  import { TS } from "@src/constants";
  import { current_count } from "@src/store";

  let count: number = $current_count;

  function handleClick() {
    count += 1;
  }

  const date = new Date(Date.parse(TS));
</script>

<span class="text-white">{date.toLocaleString()}</span>

<button class="bg-white p-4" on:click={handleClick}>Increment: {count}</button>
