<script lang="ts">
import Query from "@components/Query.svelte";
import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Query />
</QueryClientProvider>
