<script lang="ts">
  import elements from '../data/elements';
  import ElBlock from './ElBlock.svelte';
  import Describe from './Describe.svelte';
</script>

<div class='table-wrap'>
  <Describe />
  {#each elements as el}
    <ElBlock {el} />
  {/each}
</div>

<style>
  .table-wrap {
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    gap: 0.5rem;
    padding: 1rem;
    min-width: 83.33333333333333rem;
    grid-template-areas:
      ". . desc desc desc desc desc desc desc desc desc desc . . . . . . "
      ". . desc desc desc desc desc desc desc desc desc desc . . . . . . "
      ". . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . ";
  }
</style>
