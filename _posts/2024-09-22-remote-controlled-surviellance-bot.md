---
title: 'Tele-operated Surveillance Bot'
date: 2024-02-07
permalink: /posts/2024/02/sunflower-solar-tracker
# excerpt: "<img src='/images/blogs/obj-dect-fruit-edge-impulse/obj-dect-fruit-edge-impulse-real-world.jpeg'>"
tags:
  - Internship
  - arduino
  - electronics
---

### Description
I collaborated with AFEME students to assemble a tele-operated bot using ESP32 CAM, Arduino Uno, L298n motor driver, Lipo batteries, and DC motors. Programmed the bot’s functionality in C++ via Arduino IDE, with Firebase for real-time communication and React.js for a user-friendly software interface.

### Hardware
* ESP32 CAM
* Arduino Uno 
* Ultrasonic Sensor
* L298n motor driver 
* Lipo batteries
* DC motors

### Software
* Arduino IDE (C++)
* Firebase
* React.js

<!-- 
![Functional block diagram](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/func-blk-drgm.jpeg){: .align-center}

![Schematic diagram of electric circuit](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/lcd-wiring.jpeg){: .align-right width="350px" height="350px"}

![Schematic diagram of electric circuit](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/schematic-wokwi.jpeg){: .align-left width="350px" height="350px"}

-->

<br/>
<br/>

### ESP32-CAM Code
```python
#include <WiFi.h>
#include "esp_camera.h"
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
#include <base64.h>

// Replace with your network credentials
#define WIFI_SSID "********"
#define WIFI_PASSWORD "********"

// Replace with your Firebase project credentials
#define API_KEY "********"
#define STORAGE_BUCKET "********.appspot.com"
#define DATABASE_URL "https://********.firebaseio.com/"

// Camera configuration (based on your ESP32-CAM module)
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27

#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

// Firebase objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
bool signupOK = false;

unsigned long previousMillis = 0;
const long interval = 100; // 1 second

void setup() {
  Serial.begin(115200);
 
  // Connect to Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
 
  // Firebase configuration
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("Firebase Sign Up OK");
    signupOK = true;
  } else {
    Serial.printf("Firebase Sign Up Failed: %s\n", config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  // Initialize camera
  camera_config_t camera_config;
  camera_config.ledc_channel = LEDC_CHANNEL_0;
  camera_config.ledc_timer = LEDC_TIMER_0;
  camera_config.pin_d0 = Y2_GPIO_NUM;
  camera_config.pin_d1 = Y3_GPIO_NUM;
  camera_config.pin_d2 = Y4_GPIO_NUM;
  camera_config.pin_d3 = Y5_GPIO_NUM;
  camera_config.pin_d4 = Y6_GPIO_NUM;
  camera_config.pin_d5 = Y7_GPIO_NUM;
  camera_config.pin_d6 = Y8_GPIO_NUM;
  camera_config.pin_d7 = Y9_GPIO_NUM;
  camera_config.pin_xclk = XCLK_GPIO_NUM;
  camera_config.pin_pclk = PCLK_GPIO_NUM;
  camera_config.pin_vsync = VSYNC_GPIO_NUM;
  camera_config.pin_href = HREF_GPIO_NUM;
  camera_config.pin_sccb_sda = SIOD_GPIO_NUM;
  camera_config.pin_sccb_scl = SIOC_GPIO_NUM;
  camera_config.pin_pwdn = PWDN_GPIO_NUM;
  camera_config.pin_reset = RESET_GPIO_NUM;
  camera_config.xclk_freq_hz = 20000000;
  camera_config.pixel_format = PIXFORMAT_JPEG;
  camera_config.frame_size = FRAMESIZE_SVGA;
  camera_config.jpeg_quality = 12;
  camera_config.fb_count = 1;

  // Camera init
  esp_err_t err = esp_camera_init(&camera_config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
}

void loop() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    String base64Photo = capturePhoto();
    if (!base64Photo.isEmpty()) {
      uploadPhoto(base64Photo);
    }
  }
}

String capturePhoto() {
  camera_fb_t * fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Camera capture failed");
    return "";
  }

  String imageFile = "data:image/jpeg;base64,";
  imageFile += base64::encode((uint8_t *)fb->buf, fb->len);

  esp_camera_fb_return(fb);
  return imageFile;
}

void uploadPhoto(const String& base64Photo) {
  String photoPath = "/esp32-cam/photo"; // Single entry path

  if (Firebase.RTDB.setString(&fbdo, photoPath, base64Photo)) {
    Serial.println("Photo uploaded successfully");
  } else {
    Serial.println("Failed to upload photo");
    Serial.println(fbdo.errorReason());
  }
}
```

### ESP32 Dev. Board Code
```python
#include <WiFi.h>
#include <FirebaseESP32.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
#include <base64.h>

// Replace with your network credentials
#define WIFI_SSID "********"
#define WIFI_PASSWORD "********"

// Replace with your Firebase project credentials
#define API_KEY "********"
#define STORAGE_BUCKET "********.appspot.com"
#define DATABASE_URL "https://********.firebaseio.com"

// Firebase objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
bool signupOK = false;

unsigned long previousMillis = 0;
const long interval = 1000; // 1 second

// Define control variable
String control = "";
String lastCommandState = "stop";    // previous state of the command


// Ultrasonic sensor
const int trigPin = 12;  // Example GPIO pin for trig
const int echoPin = 14;  // Example GPIO pin for echo

float duration, distance;
unsigned long lastDebounceTime = 0; // For debouncing the sensor readings
unsigned long debounceDelay = 50;   // 50ms debounce delay

// Motor Driver
int m1p1 = 27; // Example GPIO pin
int m1p2 = 26; // Example GPIO pin
int m2p1 = 33; // Example GPIO pin
int m2p2 = 25; // Example GPIO pin

// LEDs
int wifiLED = 4;       // Changed to a suitable GPIO pin for output
int firebaseLED = 2;   // Changed to a suitable GPIO pin for output
int obstacleLED = 32;  // red (unchanged)

void updateDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration * 0.0343) / 2;
}

void stop() {
  digitalWrite(m1p1, LOW);
  digitalWrite(m1p2, LOW);
  digitalWrite(m2p1, LOW);
  digitalWrite(m2p2, LOW);
}

void forward() {
  digitalWrite(m1p1, HIGH);
  digitalWrite(m1p2, LOW);
  digitalWrite(m2p1, HIGH);
  digitalWrite(m2p2, LOW);
}

void backward() {
  digitalWrite(m1p1, LOW);
  digitalWrite(m1p2, HIGH);
  digitalWrite(m2p1, LOW);
  digitalWrite(m2p2, HIGH);
}

void right() {
  digitalWrite(m1p1, HIGH);
  digitalWrite(m1p2, LOW);
  digitalWrite(m2p1, LOW);
  digitalWrite(m2p2, HIGH);
}

void left() {
  digitalWrite(m1p1, LOW);
  digitalWrite(m1p2, HIGH);
  digitalWrite(m2p1, HIGH);
  digitalWrite(m2p2, LOW);
}

void executeCommand(String command) {
  if (command == "backward") {
    backward();
  } else if (command == "forward") {
    if (distance < 10) {
      Serial.println("Obstacle detected ahead! " + String(distance) + "cm");
      // stop();
    } else {
      forward();
    }
  } else if (command == "right") {
    if (distance < 10) {
      Serial.println("Obstacle detected ahead! " + String(distance) + "cm");
      // stop();
    } else {
      right();
    }
  } else if (command == "left") {
    if (distance < 10) {
      Serial.println("Obstacle detected ahead! " + String(distance) + "cm");
      // stop();
    } else {
      left();
    }
  } else if (command == "stop") {
    stop();
  } else {
    stop();
  }
}

void setup() {
  Serial.begin(115200); // Initialize the hardware serial port for debugging
  pinMode(wifiLED, OUTPUT);
  pinMode(firebaseLED, OUTPUT);
  pinMode(obstacleLED, OUTPUT);

  // Connect to Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    digitalWrite(wifiLED, HIGH);
    delay(300);
    digitalWrite(wifiLED, LOW);
    delay(300);
  }
  digitalWrite(wifiLED, HIGH);

  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  // Firebase configuration
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  // Option 2: Use Firebase email and password
  auth.user.email = "fatoyejoseph@gmail.com";    // Replace with your Firebase email
  auth.user.password = "fatoyejoseph@gmail.com";        // Replace with your Firebase password

  if (Firebase.signUp(&config, &auth, auth.user.email.c_str(), auth.user.password.c_str())) {
    digitalWrite(firebaseLED, HIGH);
    Serial.println("Firebase Sign Up OK");
    signupOK = true;
  } else {
    Serial.printf("Firebase Sign Up Failed: %s\n", config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  // Ultrasonic sensor
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  // Motor Driver
  pinMode(m1p1, OUTPUT);
  pinMode(m1p2, OUTPUT);
  pinMode(m2p1, OUTPUT);
  pinMode(m2p2, OUTPUT);
}

void loop() {
  // Ultrasonic sensor with debouncing
  if (millis() - lastDebounceTime > debounceDelay) {
    lastDebounceTime = millis();
    updateDistance();
  }

  if (distance < 10) {
    // Check if all motors are stopped (i.e., all pins are LOW)
    if (digitalRead(m1p1) == LOW && digitalRead(m1p2) == LOW && digitalRead(m2p1) == LOW && digitalRead(m2p2) == LOW) {
      // All motors are stopped
      // pass
    }
    // Check if the robot is moving backward
    else if (digitalRead(m1p1) == LOW && digitalRead(m1p2) == HIGH && digitalRead(m2p1) == LOW && digitalRead(m2p2) == HIGH) {
      // Moving backward
      // pass
    }
    else {
      // stop();
      Serial.println("Obstacle detected ahead!: " + String(distance) + "cm");
    }
  }

  // Read control command from Firebase and execute it directly
  if (Firebase.getString(fbdo, F("/control"))) {
    control = fbdo.stringData(); // Update the control variable
    if (control != lastCommandState) {
      Serial.println(control);
      executeCommand(control);  // Execute the control command

      lastCommandState = control
    }
  } else {
    Serial.println("Failed to get control command: " + fbdo.errorReason());
  }
}
```

### Challenges Faced
* Software debugging and updating during integration of real-time tele-operation and communication.  
* Hardware issues with ESP32 Development Board
* Availability of electronics components
<br/> 

### Acknowledgements
* AFEME Instructors 
* AFEME Group members 
* Adebisi Covenant

<!--  ![Testing Phase Results](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/testing-phase.jpg){: .align-left width="350px"}

![3D Printed Enclosure](https://pappy-joe.github.io/engineering/images/blogs/sunflower-solar-tracker/3D-printed-enclosure.jpeg){: .align-right width="350px"} -->