<script lang="ts">
import { createQuery } from "@tanstack/svelte-query";
import { trpcClient } from "@/api-client";

$: query = createQuery({
  queryKey: ["todos"],
  queryFn: () => trpcClient.greet.query("query"),
  staleTime: Number.POSITIVE_INFINITY,
});
</script>

<div class="font-semibold text-slate-500">
  {#if $query.isLoading}
    <p>Loading...</p>
  {:else if $query.isError}
    <p>Error: {$query.error.message}</p>
  {:else if $query.isSuccess}
    {$query.data.message}
  {/if}
</div>
