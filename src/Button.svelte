<script>
  export let count = 0;
</script>

<button
  type="button"
  on:click="{() => {
    count++;
  }}"
>
  <slot />
</button>
