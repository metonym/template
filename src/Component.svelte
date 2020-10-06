<script>
  export let count = 0;
</script>

<button
  type="button"
  on:click="{() => {
    count += 1;
  }}"
>
  Increment the count...
  {count}
</button>
