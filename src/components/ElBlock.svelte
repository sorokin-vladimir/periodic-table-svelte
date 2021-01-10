<script lang="ts">
  export let el: {
    number: number
    category: string;
    name: string;
    symbol: string;
  };

  import { colorizeStore } from '../stores/colorize';
  import Typography from './Typography/index.svelte';

  let category = '';
  $: if (!$colorizeStore) {
    category = 'transparent';
  } else if ([9, 17, 35, 53, 85, 117].includes(el.number)) {
    category = 'halogen';
  } else if (el.category.includes('nonmetal')) {
    category = 'nonmetal';
  } else if (el.category.includes('noble gas')) {
    category = 'noble_gas';
  } else if (el.category === 'alkali metal') {
    category = 'alkali_metal';
  } else if (el.category === 'alkaline earth metal') {
    category = 'alkaline_earth_metal';
  } else if (el.category === 'metalloid') {
    category = 'metalloid';
  } else if (el.category.includes('post-transition metal') || el.number === 113) {
    category = 'post_transition_metal';
  } else if (el.category.includes('transition metal') && el.number !== 113) {
    category = 'transition_metal';
  } else if (el.category === 'lanthanide') {
    category = 'lanthanide';
  } else if (el.category === 'actinide') {
    category = 'actinide';
  }

</script>

{#if !(el.category === 'lanthanide' || el.category === 'actinide')}
  <div class={`element el-num-${el.number} el-category-${category}`}>
    <Typography variant='subtitle'>{el.symbol}</Typography>
    <br/>
    <Typography variant='label-small'>{el.number}</Typography>
  </div>
{:else if el.number === 57}
  <div class={`element el-category-${category}`}>
    <Typography variant='label'>57-71</Typography>
  </div>
{:else if el.number === 89}
  <div class={`element el-category-${category}`}>
    <Typography variant='label'>89-103</Typography>
  </div>
{/if}

<style>
  .element {
    border-radius: 0.5rem;
    padding: 0.5rem;
    /* opacity: 0.6; */
    box-sizing: content-box;
    min-width: 6rem;
    min-height: 6rem;
    border: solid 1px transparent;
  }
  .el-num-2 {
    grid-column-start: -2;
  }
  .el-num-5,
  .el-num-13 {
    grid-column-start: 13;
  }

  .el-category-transparent {
    background-color: transparent;
    border-color: rgb(202, 202, 202);
  }
  .el-category-halogen {
    background-color: #ffd014;
  }
  .el-category-nonmetal {
    background-color: #95cb4f;
  }
  .el-category-noble_gas {
    background-color: #fa9d99;
  }
  .el-category-alkali_metal {
    background-color: #fa6768;
  }
  .el-category-alkaline_earth_metal {
    background-color: #ffa347;
  }
  .el-category-metalloid {
    background-color: #00b642;
  }
  .el-category-post_transition_metal {
    background-color: #7a9bcf;
  }
  .el-category-transition_metal {
    background-color: #99afcb;
  }
  .el-category-lanthanide {
    background-color: #74c7de;
  }
  .el-category-actinide {
    background-color: #00c0d6;
  }
</style>
