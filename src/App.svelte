<script lang="ts">
  export let name: string;
  export let data: Record<string, number> = {};

  let count = 0;

  $: greaterThanZero = count > 0;
</script>

<h1
  on:click={() => {
    count++;
  }}>
  Increment
</h1>

Count:
{count}

Greater than zero:
{greaterThanZero}

Name:
{name ?? 'Hello world'}

Data:
{data?.name ?? 'N/A'}
