<script>
  export let count = 0;
</script>

<button
  type="button"
  on:click
  on:click="{() => {
    count += 1;
  }}"
>
<slot>
  Increment the count:
  {count}</slot>
</button>
