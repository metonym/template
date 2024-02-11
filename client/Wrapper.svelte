<script lang="ts">
  import SayHello from "./SayHello.svelte";

  let toggle = true;
</script>

{#if toggle}
  <SayHello />
{/if}
<button on:click={() => (toggle = !toggle)}>Toggle</button>
