<template>
  <div id="skill">
    <div class="title">Skills</div>
    <div class="tab">
      <div
        class="tab-item"
        :class="tab == 'all' ? 'active' : ''"
        @click="tab = 'all'"
      >
        ALL
      </div>
      <div
        class="tab-item"
        :class="tab == 'backend' ? 'active' : ''"
        @click="tab = 'backend'"
      >
        Back-End
      </div>
      <div
        class="tab-item"
        :class="tab == 'frontend' ? 'active' : ''"
        @click="tab = 'frontend'"
      >
        Front-End
      </div>
      <div
        class="tab-item"
        :class="tab == 'tools' ? 'active' : ''"
        @click="tab = 'tools'"
      >
        Tools
      </div>
    </div>
    <div class="content mt-2">
      <div
        class="
          row row-cols-5
          g-2
          align-items-lg-stretch
          justify-content-center
          mb-2
        "
      >
        <!-- Back-End  -->
        <div class="col d-flex" v-if="tab == 'all' || tab == 'backend'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/back-end/laravel-2.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'backend'">
          <div class="skill-icon align-items-center p-3">
            <img src="@/assets/img/icon/back-end/codeigniter.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'backend'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/back-end/php-1.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'backend'">
          <div class="skill-icon align-items-center p-3">
            <img src="@/assets/img/icon/back-end/firebase-1.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'backend'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/back-end/mysql-4.svg" alt="" />
          </div>
        </div>

        <!-- Front-End  -->
        <div class="col d-flex" v-if="tab == 'all' || tab == 'frontend'">
          <div class="skill-icon align-items-center p-3">
            <img src="@/assets/img/icon/front-end/html-1.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'frontend'">
          <div class="skill-icon align-items-center p-3">
            <img src="@/assets/img/icon/front-end/css-3.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'frontend'">
          <div class="skill-icon align-items-center p-3">
            <img src="@/assets/img/icon/front-end/javascript-1.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'frontend'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/front-end/jquery.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'frontend'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/front-end/sass-1.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'frontend'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/front-end/bootstrap-5-1.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'frontend'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/front-end/vue-9.svg" alt="" />
          </div>
        </div>

        <!-- Tools  -->
        <div class="col d-flex" v-if="tab == 'all' || tab == 'tools'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/tools/cpanel.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'tools'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/tools/xampp.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'tools'">
          <div class="skill-icon align-items-center p-3">
            <img src="@/assets/img/icon/tools/figma-1.svg" alt="" />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'tools'">
          <div class="skill-icon align-items-center">
            <img
              src="@/assets/img/icon/tools/visual-studio-code-1.svg"
              alt=""
            />
          </div>
        </div>
        <div class="col d-flex" v-if="tab == 'all' || tab == 'tools'">
          <div class="skill-icon align-items-center">
            <img src="@/assets/img/icon/tools/photoshop-cc-4.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skillComp",
  data() {
    return {
      tab: "all",
    };
  },
};
</script>

<style lang="scss">
html {
  --skill-bg: #f9dad5;
  --skill-color: #000;
  --skill-bg-icon: #fff;
  --skill-btn: #11184f;
  --skill-btn-color: #fff;
  --skill-btn-active: #ea7a66;
  --skill-btn-color-active: #fff;
}

html[data-theme="dark"] {
  --skill-bg: #bbbbbb3a;
  --skill-color: #fff;
  --skill-bg-icon: rgb(207, 207, 207);
  --skill-btn: #6474e5;
  --skill-btn-color: #fff;
  --skill-btn-active: #dddcdc;
  --skill-btn-color-active: #000;
}

#skill {
  margin-top: -30px;
  padding: 50px 20px 50px 20px;
  background: var(--skill-bg);
  color: var(--skill-color);
  z-index: 0;
}

.tab {
  position: relative;
  width: 100%;
  padding: 10px 0;
  height: auto;
  overflow: auto;
  display: flex;
}

.tab-item {
  background: var(--skill-btn);
  color: var(--skill-btn-color);
  padding: 5px 20px;
  margin-right: 8px;
  display: inline;
  white-space: nowrap;
  border-radius: 40px;
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.tab-item.active {
  background: var(--skill-btn-active);
  color: var(--skill-btn-color-active);
}

.skill-card {
  width: 20% !important;
  margin-right: 10px;
}

.skill-icon {
  padding: 0px 10px;
  background: var(--skill-bg-icon);
  border-radius: 20px;
  min-height: 80px;
  display: flex;
}

.skill-icon img {
  width: 100%;
  align-items: center;
}
</style>