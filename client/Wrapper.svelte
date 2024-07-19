<script lang="ts">
  import Query from "@components/Query.svelte";

  let toggle = true;
</script>

{#if toggle}
  <Query />
{/if}
<button on:click={() => (toggle = !toggle)}>Toggle</button>
