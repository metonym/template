<script lang="ts">
  /**
   * Specify the button text.
   */
  export let text = "";
</script>

<!-- @component <Button>text</Button> -->

<button type="button" {...$$restProps} on:click>
  <slot>{text}</slot>
</button>
