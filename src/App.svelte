<script lang="ts">
  let count = $state(0);
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<button
  type="button"
  class="bg-blue-500 text-white p-2 rounded"
  onclick={(e) => {
    e.preventDefault();
    count++;
  }}
>
  Increment: {count}
</button>
