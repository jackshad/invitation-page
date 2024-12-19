<script setup lang="ts">
import { defineProps, defineExpose } from 'vue'
import { ref } from 'vue'

const props = defineProps<{
  title4: string
  counter1: string
  counter2: string
  btn: string
  amount: number
}>()
const isVisible = ref(false)
const open = () => {
  isVisible.value = true
}
const close = () => {
  isVisible.value = false
}

defineExpose({
  open,
  close
})
props
</script>

<template>
  <dialog v-if="isVisible" class="claime-popup">
    <div class="claime-popup-div">
      <img
        @click="close"
        src="@/assets/images/close.svg"
        class="close-popup-btn"
      />
      <h3>{{ title4 }}</h3>
      <img src="@/assets/images/happy-hamsters.png" width="100%" />
      <div>
        <table class="rewards">
          <tbody>
            <tr>
              <td class="reward-type">reward for new friends</td>
              <td class="reward-score">
                <img src="@/assets/images/coin.svg" width="20" />
                {{ counter1 }}
              </td>
            </tr>
            <tr>
              <td class="reward-type">reward for friends level-up</td>
              <td class="reward-score">
                <img src="@/assets/images/coin.svg" width="20" />
                {{ counter2 }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="button button-claim-take">
        <span>{{ btn }}</span>
        <img src="@/assets/images/coin.svg" width="24" />
        <img
          src="@/assets/images/drop-yellow.svg"
          class="img-svg-btn-bg2"
          width="11"
        />
        {{ amount }}
      </button>
    </div>
  </dialog>
</template>

<style scoped lang="scss">
$color_1: #facb46;
$color_2: #fff;
$font-family_1: 'Changa One';
$font-family_2: 'Lato';
$font-family_3: 'Movavi Grotesque Black';

/* Popup dialog */
.claime-popup {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  z-index: 10;
  background: transparent;
  border: 0;
  h3 {
    font-family: $font-family_1;
    color: $color_1;
    font-size: 1.9rem;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    -webkit-text-stroke: 0.1px black;
    margin: 25px 0 10px 0;
  }
}
.claime-popup-div {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 450px;
  min-height: 422px;
  background: linear-gradient(#124682 0%, #0f2c5b 100%);
  border-radius: 25px 25px 0 0;
  box-shadow: inset 0 3px 0px #63aded, inset 0 30px 20px #00000025,
    0 -10px 30px #113e76;
}
.close-popup-btn {
  position: absolute;
  top: 0;
  right: 2px;
}
.button-claim-take {
  font-size: 1.4rem;
  width: 149px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #f7cb40 0%, #ddad1c 100%);
  box-shadow: inset 0 2px 0px #ffeeba, inset 0 -2px 0px #7a5d00,
    0 2px 0 rgba(0, 0, 0, 0.07);
  span {
    font-size: 1.4rem;
    padding: 1px 7px 0 0;
  }
}
.img-svg-btn-bg2 {
  position: absolute;
  top: 0px;
  right: 9px;
}
.rewards {
  margin: 20px 0 20px 0;
  min-width: 310px;
  tr {
    td {
      margin: 0;
      padding: 0;
    }
  }
}
.reward-type {
  font-family: $font-family_2;
  color: $color_2;
  font-size: 0.8rem;
  letter-spacing: 0px;
  font-weight: 300;
  text-transform: uppercase;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);
}
.reward-score {
  display: flex;
  align-items: center;
  font-family: $font-family_3;
  color: $color_2;
  font-size: 0.95rem;
  letter-spacing: -0.7px;
  text-shadow: 0 0.7px 0 rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 0.5px black;
  img {
    margin-right: 5px;
  }
}
</style>
