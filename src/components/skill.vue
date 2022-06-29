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
        <div
          class="col"
          :class="tab == 'all' || tab == 'backend' ? 'd-flex' : 'd-none'"
          v-for="i in skill.backend"
          :key="i"
        >
          <div class="skill-icon align-items-center">
            <img :src="require('@/assets/img/icon/' + i)" :alt="i" />
          </div>
        </div>

        <!-- {{ skill.frontend }} -->
        <!-- Front-End  -->
        <div
          class="col"
          :class="tab == 'all' || tab == 'frontend' ? 'd-flex' : 'd-none'"
          v-for="i in skill.frontend"
          :key="i"
        >
          <div
            class="skill-icon align-items-center p-2"
            v-if="tab == 'all' || tab == 'frontend'"
          >
            <img :src="require('@/assets/img/icon/' + i)" :alt="i" />
          </div>
        </div>

        <!-- Tools  -->
        <div
          class="col"
          :class="tab == 'all' || tab == 'tools' ? 'd-flex' : 'd-none'"
          v-for="i in skill.tool"
          :key="i"
        >
          <div
            class="skill-icon align-items-center p-2"
            v-if="tab == 'all' || tab == 'tools'"
          >
            <img :src="require('@/assets/img/icon/' + i)" alt="" />
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
      skill: {
        backend: [
          "back-end/laravel-2.svg",
          "back-end/codeigniter.svg",
          "back-end/php-1.svg",
          "back-end/firebase-1.svg",
          "back-end/mysql-4.svg",
        ],
        frontend: [
          "front-end/html-1.svg",
          "front-end/css-3.svg",
          "front-end/javascript-1.svg",
          "front-end/jquery.svg",
          "front-end/sass-1.svg",
          "front-end/bootstrap-5-1.svg",
          "front-end/vue-9.svg",
        ],
        tool: [
          "tools/cpanel.svg",
          "tools/xampp.svg",
          "tools/figma-1.svg",
          "tools/visual-studio-code-1.svg",
          "tools/photoshop-cc-4.svg",
        ],
      },
    };
  },
  created() {},
};
</script>

<style lang="scss">
html {
  --skill-bg: #77a6c8;
  --skill-color: #000;
  --skill-bg-icon: #fff;
  --skill-btn: #316789;
  --skill-btn-color: #fff;
  --skill-btn-active: #e65b4f;
  --skill-btn-color-active: #fff;
}

html[data-theme="dark"] {
  --skill-bg: #316789;
  --skill-color: #fff;
  --skill-bg-icon: #fff;
  --skill-btn: #e65b4f;
  --skill-btn-color: #fff;
  --skill-btn-active: #0f172f;
  --skill-btn-color-active: #fff;
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
  padding: 10px;
  transition: all 0.3s;
}

.skill-icon:hover img {
  transform: scale(1.2);
}
</style>