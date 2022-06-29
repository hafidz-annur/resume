<template>
  <div id="education">
    <div class="title">Education</div>
    <div class="edu-content">
      <div class="edu-card">
        <div class="school">
          <h4>STMIK Duta Bangsa</h4>
          <h5>Surakarta</h5>
        </div>
        <div class="year">2014-2018</div>
        <div class="edu-img">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
      </div>
      <div class="edu-card">
        <div class="school">
          <h4>SMK Negeri 5</h4>
          <h5>Surakarta</h5>
        </div>
        <div class="year">2011-2014</div>
        <div class="edu-img">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
      </div>
      <div class="edu-card">
        <div class="school">
          <h4>SMP Negeri 27</h4>
          <h5>Surakarta</h5>
        </div>
        <div class="year">2008-2011</div>
        <div class="edu-img">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "eduComp",
};
</script>

<style lang="scss">
html {
  --edu-bg: #fff;
  --edu-card-bg: #e65b4f;
  --edu-card-color: #fff;
  --edu-btn: #316789;
  --edu-btn-color: #fff;
  --shadow: #bd3e328e;
}

html[data-theme="dark"] {
  --edu-bg: #0f172f;
  --edu-card-bg: #77a6c8;
  --edu-card-color: #fff;
  --edu-btn: #e65b4f;
  --edu-btn-color: #fff;
  --shadow: #4c82a88a;
}

#education {
  position: relative;
  z-index: 1;
  padding: 20px;
  border-radius: 0 0 40px 40px;
  background: var(--edu-bg);
}

.edu-content {
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  overflow: auto;
  display: flex;
}

.edu-content::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
.edu-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 239, 239);
  border-radius: 10px;
}

/* Handle */
.edu-content::-webkit-scrollbar-thumb {
  background: rgb(238, 215, 215);
  border-radius: 10px;
}

.edu-card {
  transition: all 0.4s;
  position: relative;
  background: var(--edu-card-bg);
  color: var(--edu-card-color);
  box-shadow: var(--card-shadow);
  min-width: 60%;
  margin-right: 10px;
  border-radius: 20px;
  padding: 10px 20px;
  z-index: 1;
  overflow: hidden;
}

.school {
  min-height: 50px;
}

.school h4 {
  font-size: 1.2em;
  margin-bottom: 0;
}

.school h5 {
  font-size: 1em;
}

.year {
  background: var(--edu-btn);
  display: inline;
  padding: 5px 10px;
  border-radius: 20px;
  color: var(--edu-btn-color);
  font-size: 0.7em;
}

.edu-img {
  position: absolute;
  right: -40px;
  bottom: -40px;
  font-size: 7em;
  transform: rotate(-40deg);
  color: var(--shadow);
  transition: all 0.3s ease-in-out;
  z-index: -1;
}

.edu-card:hover .edu-img,
.edu-img:hover {
  transform: rotate(-20deg);
}
</style>