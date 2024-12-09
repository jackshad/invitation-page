<script setup lang="ts">
import { onMounted } from "vue";
import store from "@/store";

onMounted(() => {
  store.dispatch("getRandomUsers");
});
</script>

<template>
  <section class="freinds-list">
    <ul>
      <li
        v-for="(user, i) in store.getters.getUsers"
        :key="i"
        class="freinds-list-item"
      >
        <span class="user-ava">
          <img src="@/assets/images/question-sign.png" width="16" />
        </span>
        <span class="username">{{ user.Login }}</span>
        <img
          v-if="user.YearsOld > 50"
          src="@/assets/images/achievement.svg"
          class="userachive"
          width="28"
        />
        <span class="userlvl">{{ user.YearsOld }} lvl</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
$color_2: #fff;
$font-family_2: "Lato";
$background-color_1: #15376c;

.freinds-list {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 12px;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 8px 7px 10px 7px;
    border-radius: 15px;
    border: 1px #3579b5 solid;
    box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5);
    background: linear-gradient(90deg, #19488c 0%, #225f9c 49%, #19488c 100%);
    width: 100%;
    max-width: 400px;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    gap: 8px;
    flex-direction: column;
    li {
      &:first-of-type {
        margin-top: 7px;
      }
    }
  }
}
.freinds-list-item {
  display: flex;
  align-items: center;
  margin: 0 3px 0 3px;
  width: 95%;
  height: 41px;
  background: radial-gradient(ellipse, #3081b4 0%, #1a4a8e 80%);
  background-repeat: no-repeat;
  border: 1px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-image-source: linear-gradient(to left, #a7ddfd00, #a7defd, #a7defd00);
  margin: 0;
}
.user-ava {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: $background-color_1;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 174, 229, 0.5);
}
.username {
  font-family: $font-family_2;
  color: $color_2;
  font-size: 0.7rem;
  letter-spacing: 0px;
  font-weight: 300;
  -webkit-text-stroke: 0.1px black;
  text-shadow: 0 1px 0 black;
  display: block;
  width: 60%;
  margin-left: 8px;
}
.userlvl {
  font-family: $font-family_2;
  color: $color_2;
  font-size: 0.7rem;
  letter-spacing: 0px;
  font-weight: 300;
  -webkit-text-stroke: 0.1px black;
  text-shadow: 0 1px 0 black;
  font-size: 1.05rem;
  -webkit-text-stroke: 0.4px black;
}
.userachive {
  margin-right: 4px;
}
</style>
