<template>
  <v-container fluid class="our-client-container">
    <!-- Page Title -->
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="page-title">Our Clients</h1>
      </v-col>
    </v-row>

    <!-- Client Logos in a Single Card -->
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="client-card" elevation="1">
          <v-row justify="center">
            <v-col cols="6" sm="4" md="3" lg="2" v-for="(client, index) in clients" :key="index" class="text-center">
              <v-img :src="client.logo" class="client-logo hover-img" contain></v-img>
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
      clients: [
        { logo: 'adiva.png' },
        { logo: 'arkadia.png' },
        { logo: 'botanic.png' },
        { logo: 'breeze.png' },
        { logo: 'cheras.png' },
        { logo: 'elevia.png' },
        { logo: 'NSK.png' },
        { logo: 'paradigm.png' },
        { logo: 'sunway.png' },
        { logo: 'symphony.png' },
        { logo: 'world.png' },
        { logo: 'zenia.png' },
        { logo: 'msc.png' },
      ]
    };
  }
};
</script>

<style scoped>
.our-client-container {
  padding-top: 100px;
  background-color: #f9f9f9;
  background-image: url('static/client.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #45a505be;
  margin-bottom: 30px;
}

.client-card {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Neutral, light background for the card */
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); /* Minimal shadow */
}

.client-logo {
  width: 100%;
  height: 150px; /* Increased height to allow full logo visibility */
  object-fit: contain; /* Ensures the logo fully fits in the box */
  background-color: #ffffff; /* Neutral background for better contrast */
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Slightly stronger shadow */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hover Effects for Logos */
.hover-img {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.hover-img:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  transform: translateY(-5px); /* Slight upward movement */
}
</style>
