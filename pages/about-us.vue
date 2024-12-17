<template>
  <v-container fluid class="about-page">
    <!-- Hero Banner with Background Image -->
    <v-row class="hero-banner">
      <v-col cols="12" class="hero-text text-center">
        <h1 class="hero-title">About Sasa Team Sdn. Bhd.</h1>
        <p class="hero-subtitle">Dedicated to Excellence in Security Services</p>
      </v-col>
    </v-row>

    <!-- About & Mission Section -->
    <v-row class="info-section" justify="center">
      <v-col cols="12" md="5" class="info-box">
        <h2 class="info-title">Who We Are</h2>
        <p class="info-text">
          Sasa Team Sdn. Bhd is a 100% wholly owned Bumiputera company, established on 10th March 2015. Our primary focus is providing specialized security services and comprehensive building management solutions.
        </p>
      </v-col>
      <v-col cols="12" md="5" class="info-box">
        <h2 class="info-title">Our Mission</h2>
        <p class="info-text">
          Our mission is to position SASA TEAM SDN. BHD as a leader in innovative, value-driven security solutions. We aim to deliver quality services that exceed customer expectations and build long-lasting relationships.
        </p>
      </v-col>
    </v-row>

    <!-- Image Gallery Section -->
    <v-row class="gallery-section" justify="center">
      <v-col cols="12" class="gallery-header text-center">
        <h2 class="gallery-title">Our Work in Action</h2>
      </v-col>
      <v-col cols="12" md="4" v-for="(image, index) in images" :key="index" class="gallery-item">
        <v-img :src="image.src" :alt="image.alt" class="gallery-image"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "/logo/work1.png", alt: 'Guarding a premise' },
        { src: "/logo/work2.png", alt: 'Security team briefing' },
      ],
    };
  },
};
</script>

<style scoped>
.about-page {
  font-family: Arial, sans-serif;
  background-color: white; /* Set global background color */
}

/* Hero Banner Styling */
.hero-banner {
  background-image: url('@/static/Building.jpg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #ffffff;
}

.hero-text {
  position: relative;
  z-index: 1;
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
}

/* Info Section Styling */
.info-section {
  padding: 50px 0;
  background-color: #f5f5f5;
}

.info-box {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-left: 10px; /* Add horizontal margin for spacing */
  margin-right: 10px; /* Add horizontal margin for spacing */
}

.info-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333333;
  margin-bottom: 15px;
}

.info-text {
  font-size: 1rem;
  color: #555555;
  line-height: 1.6;
}

/* Gallery Section Styling */
.gallery-section {
  padding: 50px 20px;
  background-color: #ffffff; /* White background for this section */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Light shadow for separation */
  border-radius: 8px; /* Rounded edges */
}

.gallery-header {
  margin-bottom: 30px;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333333;
}

.gallery-item {
  padding: 15px;
}

.gallery-image {
  width: 100%;
  height: 250px; /* Ensure consistent height */
  object-fit: cover; /* Crop to fit container */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.gallery-image:hover {
  transform: scale(1.05);
}

</style>
