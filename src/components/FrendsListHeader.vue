<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  title3: string;
  btn: string;
  amount: number;
}>();

props;

const emit = defineEmits<{
  (e: "emitStatusOpenPopup"): void;
}>();
</script>

<template>
  <section class="freinds-list-header">
    <h4>{{ title3 }}</h4>
    <button @click="emit('emitStatusOpenPopup')" class="button button-claim">
      <img
        src="@/assets/images/union.svg"
        class="img-svg-btn-union"
        width="6"
      />
      <span>{{ btn }}</span>
      <img src="@/assets/images/coin.svg" width="12" />
      <img
        src="@/assets/images/drop-yellow.svg"
        class="img-svg-btn-bg"
        width="11"
      />
      {{ amount }}k
    </button>
  </section>
</template>

<style scoped lang="scss">
$color_2: #fff;
$font-family_1: "Movavi Grotesque Black";
$font-family_2: "Lato";

.freinds-list-header {
  h4 {
    font-family: $font-family_2;
    color: $color_2;
    font-size: 1.5rem;
    letter-spacing: 0px;
    font-weight: 300;
    text-shadow: 0 1px 0 black;
    margin: 0;
    -webkit-text-stroke: 0.5px black;
    font-weight: 300;
    font-size: 1.7rem;
  }
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 12px;
  margin-top: 14px;
  margin-top: 20px;
  gap: 7px 0px;
  flex-direction: column;
}
.button-claim {
  font-size: 0.88rem;
  width: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  background: linear-gradient(90deg, #f7cb40 0%, #ddad1c 100%);
  box-shadow: inset 0 2px 0px #ffeeba, inset 0 -2px 0px #7a5d00,
    0 2px 0 rgba(0, 0, 0, 0.07);
  span {
    font-size: 0.96rem;
    padding: 1px 7px 0 0;
  }
}
.img-svg-btn-union {
  position: absolute;
  left: 4px;
}
.img-svg-btn-bg {
  position: absolute;
  top: 0px;
  right: 3px;
}
@media screen and (min-width: 320px) and (max-width: 450px) {
  .freinds-list-header {
    h4 {
      font-size: 1.05rem;
    }
  }
}
</style>
