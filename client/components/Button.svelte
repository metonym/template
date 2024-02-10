<script lang="ts">
  import { TS } from "@client/constants";
  import { onMount } from "svelte";
  import { trpcClient, type RouterOutput } from "@client/api-client";

  let user: RouterOutput["greet"] = { message: "" };

  onMount(async () => {
    user = await trpcClient.greet.query("world");

    const somePosts = await Promise.all([
      trpcClient.greet.query("world"),
      trpcClient.greet.query("world2"),
      trpcClient.greet.query("world3"),
    ]);
    console.log("some", somePosts);
  });

  let count: number = 0;

  function handleClick() {
    count += 1;
  }

  const date = new Date(Date.parse(TS));
</script>

<span class="text-white">{date.toLocaleString()}</span>

<button class="bg-white p-4" on:click={handleClick}>Increment: {count}</button>

<div class="text-white">
  Message: {user.message}
</div>

<div class="text-white">
  {#await trpcClient.greet.query("world")}
    <p>loading...</p>
  {:then value}
    <!-- promise was fulfilled or not a Promise -->
    <p>The value is {value.message}</p>
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>
