<script lang="ts">
  import { TS } from "@frontend/constants";
  import { current_count } from "@frontend/store";
  import { onMount } from "svelte";

  onMount(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  let count: number = $current_count;

  function handleClick() {
    count += 1;
  }

  const date = new Date(Date.parse(TS));
</script>

<span class="text-white">{date.toLocaleString()}</span>

<button class="bg-white p-4" on:click={handleClick}>Increment: {count}</button>
