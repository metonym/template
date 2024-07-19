<script lang="ts">
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  //import Query from "@components/Query.svelte";
  import Wrapper from "./Wrapper.svelte"

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
 <!--  <Query /> -->
  <Wrapper />
</QueryClientProvider>
