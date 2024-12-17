<template>
  <v-container fluid class="text-center service-container">
    <!-- Title "Our Services" at the top -->
    <v-row class="title-row" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 :style="{ color: titleColor }" class="service-title">Our Services</h1>
      </v-col>
    </v-row>

    <!-- Card with Auto-Sliding Carousel -->
    <v-card class="service-card mx-auto" max-width="900">
      <v-carousel hide-delimiters height="auto" cycle interval="5000" show-arrows-on-hover>
        <!-- Service 1: Security Assessment -->
        <v-carousel-item>
          <v-card-text class="service-item" :style="{ backgroundColor: cardColor1 }">
            <v-row align="center" justify="center">
              <v-col cols="12" md="4">
                <v-img src="/logo/guard.png" alt="Security Assessment" contain height="200px"></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <h3 class="service-title-inner">Security Assessment</h3>
                <p class="service-description">
                  We evaluate potential security risks in your environment, identifying vulnerabilities and recommending solutions to strengthen safety.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-carousel-item>

        <!-- Service 2: Security Deployment -->
        <v-carousel-item>
          <v-card-text class="service-item" :style="{ backgroundColor: cardColor2 }">
            <v-row align="center" justify="center">
              <v-col cols="12" md="4">
                <v-img src="/logo/deployment.png" alt="Security Deployment" contain height="200px"></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <h3 class="service-title-inner">Security Deployment</h3>
                <p class="service-description">
                  We implement customized security measures and systems, ensuring your space is equipped with the latest protection technologies.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-carousel-item>

        <!-- Service 3: Security Training -->
        <v-carousel-item>
          <v-card-text class="service-item" :style="{ backgroundColor: cardColor3 }">
            <v-row align="center" justify="center">
              <v-col cols="12" md="4">
                <v-img src="/logo/training.png" alt="Security Training" contain height="200px"></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <h3 class="service-title-inner">Security Training</h3>
                <p class="service-description">
                  We offer comprehensive training programs to educate your team on security best practices, preparing them to handle security issues effectively.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-carousel-item>

        <!-- Service 4: Cleaning Services -->
        <v-carousel-item>
          <v-card-text class="service-item" :style="{ backgroundColor: cardColor4 }">
            <v-row align="center" justify="center">
              <v-col cols="12" md="4">
                <v-img src="/logo/products.png" alt="Cleaning Services" contain height="200px"></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <h3 class="service-title-inner">Cleaning Services</h3>
                <p class="service-description">
                  We provide professional cleaning solutions to keep your space hygienic, organized, and welcoming, tailored to your specific needs.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-carousel-item>

        <!-- Service 5: Rental Services -->
        <v-carousel-item>
          <v-card-text class="service-item" :style="{ backgroundColor: cardColor5 }">
            <v-row align="center" justify="center">
              <v-col cols="12" md="4">
                <v-img src="/logo/rental.png" alt="Rental Services" contain height="200px"></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <h3 class="service-title-inner">Rental Services</h3>
                <p class="service-description">
                  We offer flexible and affordable rental options for equipment and facilities, perfect for a variety of needs and events.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      // Title color that can be easily customized
      titleColor: '#000000', // Set to black by default
      // Dynamic colors for each card
      cardColor1: '#4CAF50', // Green for Security Assessment
      cardColor2: '#2196F3', // Blue for Security Deployment
      cardColor3: '#FF9800', // Orange for Security Training
      cardColor4: '#9C27B0', // Purple for Cleaning Services
      cardColor5: '#FF5722', // Deep Orange for Rental Services
    };
  },
};
</script>

<style scoped>
/* Ensure the container and body cover the full viewport */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Remove any scroll */
}

/* Full-width and full-height container with background image */
.service-container {
  background-image: url('@/static/services.jpg'); /* Add the path to your background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Title styling */
/* Title styling */
.title-row {
  width: 100%; /* Full width for the title */
  position: absolute;
  top: 50px; /* Give some space from the top */
  color: #fff; /* Text color (white) */
  background-color: #ffffff41; /* Background color (dark gray) */
  padding: 10px; /* Add some padding around the title */
  text-align: center; /* Center the text */
  font-size: 24px; /* Adjust font size */
  text-shadow: 2px 2px 5px rgb(168, 168, 168); /* Add a subtle shadow for better visibility */
}


.service-title {
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
}

/* Inner titles in each service card */
.service-title-inner {
  font-size: 2rem; /* Increased font size */
  margin: 10px 0;
  color: #ffffff;
}

/* Service item styling */
.service-item {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items */
  text-align: center; /* Center text */
  padding: 20px;
}

.service-description {
  font-size: 1.2rem; /* Increased font size */
  color: #cfcfcf;
}

/* Card styling */
.service-card {
  padding: 40px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.308);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.397); /* Default background color */
}
</style>
