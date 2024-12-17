<template>
    <v-container fluid class="contact-us-container">
      <v-row class="contact-header">
        <v-col>
          <h1 class="contact-title">Get In Touch</h1>
          <p class="contact-subtitle">
            Sasa Team Sdn. Bhd., established on March 10, 2015, is a 100% Bumiputera-owned company specializing in security services and building management for complexes and various establishments, whether enclosed or open-air. Our mission is to be a leading provider of customer-centric, value-added security and building management services, ensuring top-quality solutions tailored to meet our clients' unique needs and priorities.
          </p>
        </v-col>
      </v-row>
  
      <!-- Combined card for Contact Info and Enquiry Form -->
      <v-row justify="center">
        <v-col md="8" cols="12">
          <v-card outlined class="contact-card">
            <v-row>
              <!-- Contact Info Section moved closer to Enquiry Form -->
              <v-col md="6" cols="12" class="contact-info-col">
                <v-card-title class="form-title">
                  <div class="contact-info">
                    <h3 class="location-title">Our Location</h3>
                    <p class="location-text">
                      <v-icon left color="white">mdi-map-marker</v-icon>
                      Boulevard Business Park, A-1-11, <br />
                      Pusat Komersial Jalan Kuching, <br />
                      Jalan Kepayang, Off Jalan Kuching, <br />
                      51200, Kuala Lumpur.
                    </p>
                    <p class="location-text">
                      <v-icon left color="white">mdi-phone</v-icon>
                      <strong>Office Number:</strong> 03-6242 4250
                    </p>
                    <p class="location-text">
                      <v-icon left color="white">mdi-email</v-icon>
                      <strong>Email Address:</strong> sasa@gmail.com
                    </p>
                  </div>
                </v-card-title>
              </v-col>
  
              <!-- Enquiry Form Section -->
              <v-col md="6" cols="12" class="enquiry-form-col">
                <v-card-title class="form-title">Send Us an Enquiry</v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Full Name" required></v-text-field>
                    <v-text-field label="Email Address" required></v-text-field>
                    <v-text-field label="Phone Number" required></v-text-field>
                    <v-textarea label="Your Message" rows="4" required></v-textarea>
                    <v-btn color="green" class="submit-btn" @click="submitForm">Send Message</v-btn>

                  </v-form>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ContactUs',
    methods: {
      submitForm() {
        console.log("Form submitted");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Background image and overlay */
  .contact-us-container {
    padding: 2rem;
    background-image: url('@/static/contact-us.jpg'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
  }
  
  /* Dark overlay */
  .contact-us-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust for darkness level */
    z-index: 1;
  }
  
  /* Make content appear above overlay */
  .contact-us-container > * {
    position: relative;
    z-index: 2;
  }
  
  /* Header styles */
  .contact-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .contact-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--text-color, #ffffff);
  }
  
  .contact-subtitle {
    font-size: 1.1rem;
    color: var(--text-color, #e9e9e9);
    max-width: 600px;
    margin: auto;
    line-height: 1.6;
  }
  
  /* Combined card styles */
  .contact-card {
    background-color: var(--card-background, #ffffff46); /* Adjustable card background */
    padding: 1.5rem;
    border-radius: 20px;
  }
  
  /* Contact info section */
  .contact-info-col {
    padding-right: 1rem; /* Reduce space on the right side */
  }
  
  .location-title,
  .location-text,
  .form-title {
    color: var(--text-color, #f3f3f3); /* Adjustable text color */
  }
  
  .location-text {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Space between icon and text */
    margin-bottom: 0.5rem;
    text-align: justify;
    text-justify: inter-word;
  }
  
  /* Enquiry form styles */
  .enquiry-form-col {
    padding-left: 1rem; /* Reduce space on the left side */
  }
  
  .submit-btn {
    margin-top: 1rem;
    color: #ffffff;
    background-color: #82cf5f;
  }
  </style>
  