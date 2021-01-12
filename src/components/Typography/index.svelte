<script lang="ts" src='./script.ts'></script>

<template>
  {#if el === 'span'}
    <span class="{cls} {className}">
      <slot />
    </span>
  {:else if el === 'div'}
    <div class="{cls} {className}">
      <slot />
    </div>
  {/if}
</template>

<style src='./styles.css'></style>
