<script lang="ts">
type Props = { count?: number };
let { count = 0 }: Props = $props();

function handleClick() {
  count += 1;
}
</script>

<button onclick={handleClick}>Increment: {count}</button>
