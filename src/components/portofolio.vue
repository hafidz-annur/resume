<template>
  <div id="portofolio">
    <div class="p-card">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://picsum.photos/seed/picsum/400/250" alt="" />
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/seed/picsum/400/250" alt="" />
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/seed/picsum/400/250" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portofolioComp",
};
</script>

<style lang="scss">
:root {
  --p-bg: #dedede;
}
:root[data-theme="dark"] {
  --p-bg: #bbbbbb3a;
}

#portofolio {
  margin-top: 140px;
  background: var(--p-bg);
  padding: 40px 20px 90px 20px;
}

.p-card {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 40px !important;
  margin-top: -150px;
}

.p-card img {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s;
}

.p-card img:hover {
  transform: scale(1.2);
}
</style>