<template>
  <v-app>
    <!-- Main Content with full-screen background image -->
    <v-main class="main-content">
      <v-container fluid class="d-flex justify-center align-center hero">
        <!-- Content in the center, slightly adjusted towards the top -->
        <v-row class="text-center">
          <v-col>
            <h1 class="uk-heading-large white--text animated-title">SASA TEAM SDN BHD</h1>
            <h2 class="subheading white--text animated-subtitle">Your safety is our matter</h2>
          </v-col>
        </v-row>
      </v-container>

      <!-- Safety, Health, and Environment Policy Section -->
      <v-container fluid class="policy-section">
        <v-row>
          <v-col cols="12" class="text-center">
            <h2 class="policy-title">SAFETY, HEALTH, AND ENVIRONMENT POLICY</h2>
          </v-col>
        </v-row>
        <v-row>
          <!-- Policy Column 1 -->
          <v-col cols="12" md="4" class="policy-item policy-bg1">
            <div class="policy-content">
              <h3>Integrate Safety and Health</h3>
              <p class="policy-description">Embed safety and health objectives into business operations and ensure compliance with all relevant laws and standards.</p>
            </div>
          </v-col>

          <!-- Policy Column 2 -->
          <v-col cols="12" md="4" class="policy-item policy-bg2">
            <div class="policy-content">
              <h3>Resource Provision and Training</h3>
              <p class="policy-description">Allocate resources and continuously train staff for safe, conducive, and healthy working conditions.</p>
            </div>
          </v-col>

          <!-- Policy Column 3 -->
          <v-col cols="12" md="4" class="policy-item policy-bg3">
            <div class="policy-content">
              <h3>Ongoing Monitoring and Improvement</h3>
              <p class="policy-description">Regularly monitor activities, investigate incidents to prevent recurrence, and review the policy to enhance safety and health practices.</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Ensure full-screen content without padding around v-main */
.main-content {
  padding: 0 !important;
  margin: 0;
}

/* Hero section styling */
.hero {
  background-image: url('@/static/green.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  padding: 0; /* Ensure no additional padding */
}

.white--text {
  color: rgb(66, 165, 0) !important;
}

h1 {
  font-style: italic;
  font-size: 4vw;
  font-weight: bold !important;
  text-shadow: 5px 5px 10px rgb(250, 250, 250);
  margin-top: -180px;
}

h2.subheading {
  font-style: italic;
  font-size: 2vw;
  font-weight: bold !important;
  text-shadow: 3px 3px 7px rgb(221, 221, 221);
  margin-top: 0;
}

/* Animated Title */
.animated-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: shimmer 3s infinite;
}
@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}


/* Gradient Shift Animation */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Fade Animation for Subtitle */
@keyframes fade {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
}

/* Policy Section Styling */
.policy-section {
  padding: 40px 20px; /* Add some horizontal padding */
  background-color: #f4f4f4;
}

.policy-title {
  font-size: 2.0rem;
  font-weight: 700;
  color: #45a505be;
  margin-bottom: 30px;
}

/* Policy Column Styling */
.policy-item {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.policy-item:hover {
  transform: scale(1.05) rotate(1deg);
  transition: transform 0.3s ease;
}


/* Background Images */
.policy-bg1 {
  background-image: url('@/static/guard-securty.png');
  background-size: cover;
  background-position: center;
}

.policy-bg2 {
  background-image: url('@/static/example1.jpg');
  background-size: cover;
  background-position: center;
}

.policy-bg3 {
  background-image: url('@/static/example2.jpg');
  background-size: cover;
  background-position: center;
}

/* Policy Content */
.policy-content {
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.322);
  padding: 20px;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.policy-item:hover .policy-content {
  opacity: 1; /* Fade in content on hover */
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.policy-description {
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  h1 {
    font-size: 8vw;
    margin-top: -120px;
  }

  h2.subheading {
    font-size: 4vw;
  }

  .policy-title {
    font-size: 2rem;
  }
}
</style>
