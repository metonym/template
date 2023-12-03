<script lang="ts">
  export let count: number;

  function handleClick() {
    count += 1;
  }
</script>

<button class="bg-white" on:click={handleClick}>Increment: {count}</button>
