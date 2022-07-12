<template>
  <div id="experience">
    <div class="ex-icon">
      <i class="fa-solid fa-briefcase"></i>
    </div>
    <div class="experience">
      <div class="title">Experience</div>
      <div class="timeline d-flex align-items-end">
        <div class="timeline-sidebar">
          <div
            class="ts-list pointer"
            :class="tab == 1 ? 'active shadow-sm' : ''"
            @click="tab = 1"
          >
            <div class="ts-year">2021-Current</div>
            <div class="ts-pos">Software Engineer Senior</div>
            <hr class="my-1" />
            <div class="ts-year">2019-2021</div>
            <div class="ts-pos">Software Engineer Associate</div>
          </div>
          <div
            class="ts-list pointer"
            :class="tab == 2 ? 'active shadow-sm' : ''"
            @click="tab = 2"
          >
            <div class="ts-year">2015-2018</div>
            <div class="ts-pos">IT Staff</div>
          </div>
          <div
            class="ts-list pointer"
            :class="tab == 3 ? 'active shadow-sm' : ''"
            @click="tab = 3"
          >
            <div class="ts-year">2016</div>
            <div class="ts-pos">Web Developer (Internship)</div>
          </div>
        </div>
        <div class="timeline-content text-end">
          <div class="" v-if="tab == 1">
            PT. Jawara Edukasih Indonesia
            <hr class="my-1" />
            Managing all-in's website, such as maintaining, designing and
            improving the website performance. After that i have made several
            systems from planning until implementation, and this system can help
            and make it easier for company to improve performance.
          </div>
          <div class="" v-if="tab == 2">
            Taman Cerdas Puntadewa
            <hr class="my-1" />
            Guide childs around 7th until 15th years old to learn about computer
            science, such as how to use computer from turning on and off the
            computer, using microsoft office and painting with windows feature
            etc.
          </div>
          <div class="" v-if="tab == 3">
            CV. Jogja Web Center
            <hr class="my-1" />
            Learn about how to build and maintance the website with wordpress
            platform. After that for my taks, i have made the financial system
            to help managing company's finance with PHP Native.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "experienceComp",
  data() {
    return {
      tab: 1,
    };
  },
};
</script>

<style lang="scss">
.ex-icon {
  position: absolute;
  right: -30px;
  font-size: 8em;
  transform: rotate(-30deg);
  opacity: 0.2;
  color: var(--primary);
  z-index: 0;
}

.experience {
  transition: all 0.4s;
  position: relative;
  z-index: 1;
  padding: 40px 20px;
}

.timeline {
  width: 100%;
}

.timeline-sidebar {
  width: 40%;
}

.ts-list {
  display: block;
  padding: 10px 5px 10px 15px;
  border-left: 5px solid var(--primary);
}

.ts-list::before {
  position: absolute;
  content: "";
  border-radius: 10px;
  height: 20px;
  width: 20px;
  margin-top: -2px;
  margin-left: -27px;
  background: var(--third);
  transition: all 0.4s;
}

.ts-list.active::before {
  background: var(--secondary);
}

.ts-year {
  font-size: 0.7em;
}

.ts-pos {
  font-size: 0.8em;
}

.timeline-content {
  padding-left: 20px;
  width: 60%;
  font-size: 0.9em;
}
</style>