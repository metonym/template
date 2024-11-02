<script lang="ts">
  let count = $state(0);
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<button
  type="button"
  onclick={(e) => {
    e.preventDefault();
    count++;
  }}
>
  Increment: {count}
</button>
