<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  title2: string
}>()

props
</script>

<template>
  <section class="invite-header">
    <h3>{{ title }}</h3>
    <h4>{{ title2 }}</h4>
  </section>
</template>

<style scoped lang="scss">
$color_1: #facb46;
$color_2: #fff;
$font-family_1: 'Movavi Grotesque Black';
$font-family_2: 'Lato';

.invite-header {
  padding-top: 65px;
  justify-content: start;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0;
  h3 {
    font-family: $font-family_1;
    color: $color_1;
    font-size: 2rem;
    letter-spacing: -0.7px;
    text-transform: uppercase;
    text-shadow: 0 2px 0 black;
    -webkit-text-stroke: 1px black;
    margin: 0;
  }
  h4 {
    font-family: $font-family_2;
    color: $color_2;
    font-size: 1.5rem;
    letter-spacing: 0px;
    font-weight: 300;
    text-shadow: 0 1px 0 black;
    margin: 0;
  }
}
@media screen and (min-width: 320px) and (max-width: 450px) {
  .invite-header {
    h3 {
      font-size: 1.7rem;
    }
    h4 {
      font-size: 0.95rem;
    }
  }
}
</style>
