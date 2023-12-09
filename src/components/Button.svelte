<script lang="ts">
  export let count: number;

  function handleClick() {
    count += 1;
  }
</script>

<button class="bg-white p-4" on:click={handleClick}>Increment: {count}</button>
