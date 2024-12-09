<template>
  <section class="invite-block">
    <div class="invite-block-item bonuses">
      <button class="button button-bonus">
        {{ btn }}
        <img
          src="@/assets/images/drop-yellow.svg"
          class="img-svg-btn-bg"
          width="11"
        />
      </button>
    </div>
    <div class="invite-block-item invite">
      <button class="button button-invite">
        {{ btn2 }}
        <img
          src="@/assets/images/drop-blue.svg"
          class="img-svg-btn-bg"
          width="11"
        />
      </button>
      <button class="button button-copy-link">
        <img src="@/assets/images/chain.svg" width="17" />
        <img
          src="@/assets/images/drop-blue.svg"
          class="img-svg-btn-bg"
          width="11"
        />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    btn: String,
    btn2: String,
  },
})
export default class InviteBlock extends Vue {
  btn!: string;
  btn2!: string;
}
</script>

<style scoped lang="scss">
.invite-block {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 12px;
  margin-top: 14px;
}
.invite-block-item {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: flex-end;
  width: 160px;
  height: 115px;
  border-radius: 25px;
  background: linear-gradient(90deg, #134381 0%, #1e5ea3 49%, #134381 100%);
  border: #7dd0ff 2px solid;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}
.bonuses {
  background-image: url("@/assets/images/bonus.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.invite {
  background-image: url("@/assets/images/invite.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.button-bonus {
  font-size: 0.88rem;
  width: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  background: linear-gradient(90deg, #f7cb40 0%, #ddad1c 100%);
  box-shadow: inset 0 2px 0px #ffeeba, inset 0 -2px 0px #7a5d00,
    0 2px 0 rgba(0, 0, 0, 0.07);
}
.button-invite {
  width: 73px;
  background: linear-gradient(90deg, #44a2e5 0%, #2e7ec2 100%);
  box-shadow: inset 0 2px 0px #bee3ff, inset 0 -2px 0px #155388,
    0 2px 0 rgba(0, 0, 0, 0.07);
}
.button-copy-link {
  width: 73px;
  background: linear-gradient(90deg, #44a2e5 0%, #2e7ec2 100%);
  box-shadow: inset 0 2px 0px #bee3ff, inset 0 -2px 0px #155388,
    0 2px 0 rgba(0, 0, 0, 0.07);
  width: 48px;
}
.img-svg-btn-bg {
  position: absolute;
  top: 0px;
  right: 3px;
}
</style>
