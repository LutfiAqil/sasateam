<template>
  <v-container fluid class="our-associate-company-container">
    <!-- Page Title -->
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="page-title">Associate Company</h1>
      </v-col>
    </v-row>

    <!-- Associate Company Logos in a Single Card -->
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="company-card" elevation="1">
          <v-row justify="center">
            <v-col cols="6" sm="4" md="3" lg="2" v-for="(company, index) in companies" :key="index" class="text-center">
              <v-img :src="company.logo" class="company-logo hover-img" contain></v-img>
              <div class="company-title">{{ company.title }}</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
export default {
  data() {
    return {
      // Update the data to reflect Associate Companies
      companies: [
        { logo: 'arena.png', title: 'ARENA WIRAMAJU SDN. BHD' },
        { logo: 'asas.png', title: 'ASAS SECURITY SERVICES SDN.BHD' },
        { logo: 'promaster.png', title: 'PROMASTER TEAM SDN. BHD' },
        { logo: 'jayapadu.png', title: 'JAYAPADU BERSATU KAWALAN SDN. BHD' },
        { logo: 'excellent.png', title: 'EXCELLENT SECURITY NETWORK SDN. BHD' },
        { logo: 'tiara.png', title: 'TIARA FORCE SECURITY SERVICES SDN. BHD' },
        { logo: 'ayu.png', title: 'AYU EDISI SDN. BHD' },
        { logo: 'sasa.png', title: 'SASA SURVEILLANCE SERVICES SDN. BHD' },
        { logo: 'prima.png', title: 'PRIMA PLATINUM SDN. BHD' },
        { logo: 'dway.png', title: 'D WAY PROTECTION SDN BHD' },
        { logo: 'inas.png', title: 'INAS CONSULTANCY SDN. BHD' },
        { logo: 'sasateam.jpg', title: 'SASA TEAM SDN. BHD' },
      ]
    };
  }
};
</script>
  
<style scoped>
/* Page Background and Layout */
.our-associate-company-container {
  padding-top: 80px;
  background-color: #f9f9f9;
  background-image: url('static/client.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

/* Title Styling */
.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #45a505be;
  margin-bottom: 20px;
}

/* Card Styling for Companies */
.company-card {
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.6); /* Light background for card */
  border-radius: 6px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); /* Minimal shadow */
}

/* Logo Styling */
.company-logo {
  width: 100%;
  height: 120px; /* Increased height for larger logos */
  object-fit: contain;
  padding: 10px; /* Slightly larger padding for logos */
  background-color: #f9f9f9; /* Light background for logo box */
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Slightly deeper shadow */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hover Effects for Logos */
.hover-img {
  transition: box-shadow 0.2s, transform 0.2s;
}

.hover-img:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow on hover */
  transform: translateY(-4px); /* Slight upward movement */
}

/* Styling for the Caption under Each Logo */
.company-title {
  margin-top: 10px;
  font-size: 0.85rem;
  color: #333;
  font-weight: bold;
  text-align: center;
  word-wrap: break-word; /* Wrap long titles */
}
</style>
