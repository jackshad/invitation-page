<script setup lang="ts">
import { defineExpose } from "vue";
import { ref } from "vue";
import ClaimePopup from "@/components/ClaimePopup.vue";
import InviteHeader from "@/components/InviteHeader.vue";
import InviteBlock from "@/components/InviteBlock.vue";
import FrendsList from "@/components/FrendsList.vue";
import FrendsListHeader from "@/components/FrendsListHeader.vue";

const title1 = ref("Invite friends!");
const title2 = ref("You and your friend will receive bonuses!");
const title3 = ref("List of your freinds");
const title4 = ref("claime your rewards");
const btn1 = ref("More Bonuses");
const btn2 = ref("Invite");
const btn3 = ref("Claim");
const btn4 = ref("Take");
const counter1 = ref("12,200");
const counter2 = ref("12,200");
const popup = ref<InstanceType<typeof ClaimePopup> | null>(null);

const openPopup = () => {
  popup.value?.open();
};
const closePopup = () => {
  popup.value?.close();
};
const emitStatusOpenPopup = () => {
  openPopup();
};

defineExpose({
  openPopup,
  closePopup,
});
</script>

<template>
  <main>
    <ClaimePopup
      ref="popup"
      :title4="title4"
      :counter1="counter1"
      :counter2="counter2"
      :btn="btn4"
      :amount="1"
    />
    <InviteHeader :title="title1" :title2="title2" />
    <InviteBlock :btn="btn1" :btn2="btn2" />
    <FrendsListHeader
      :title3="title3"
      :btn="btn3"
      :amount="12.5"
      @emitStatusOpenPopup="emitStatusOpenPopup"
    />
    <FrendsList />
  </main>
</template>
