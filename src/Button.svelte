<script>
  /** @type {"primary" | "secondary" | "tertiary"} */
  export let kind = "primary";
</script>

<button type="text" class={kind}>
  <slot />
</button>
