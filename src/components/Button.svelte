<script lang="ts">
let { count = 0 }: { count?: number } = $props();

function handleClick() {
  count += 1;
}
</script>

<button onclick={handleClick}>Increment: {count}</button>
