<script lang="ts">
  import { SHA, TS } from "@src/constants";

  export let count: number;

  if (import.meta.env.PROD) {
    console.log("Version", SHA);
  }

  function handleClick() {
    count += 10;
  }

  const date = new Date(Date.parse(TS));
</script>

<span class="text-white">{date.toLocaleString()}</span>

<button class="bg-white p-4" on:click={handleClick}>Increment: {count}</button>
