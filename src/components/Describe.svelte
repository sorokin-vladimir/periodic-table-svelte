<script lang="ts">
  import { colorizeStore } from '../stores/colorize';

</script>

<div class='desc'>
  <button
    on:click={colorizeStore.toEnableColorize}
    class='btn1'>
    on
  </button>
  <button
    on:click={colorizeStore.toDisableColorize}
    class='btn2'>
    off
  </button>
  <span class='status_title'>colorise status</span>
  <span class='stuts'>{$colorizeStore}</span>
</div>

<style>
  .desc {
    grid-area: desc;
    background-color: rgb(255, 250, 173);
    /* opacity: 0.1; */
    border-radius: 0.5rem;
  }
</style>
