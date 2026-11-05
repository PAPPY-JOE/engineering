---
layout: research

title: 'Tele-operated Surveillance Robot with ESP32-CAM and Firebase'
date: 2024-10-01
permalink: /posts/2024/10/tele-operated-surveillance-robot/
redirect_from:
  - /posts/2024/10/tele-operated-surveillance-robot.html

tags:
  - robotics
  - embedded systems
  - IoT
  - ESP32
  - computer vision
  - Firebase
  - React
  - Arduino
  - internship

---

### Description

During my engineering internship at the Armed Forces Electrical and Mechanical Engineering Workshop (AFEME), I collaborated with engineering students to develop a tele-operated surveillance robot integrating embedded hardware, wireless communication, a camera system, and a web-based control interface.

The project explored how low-cost embedded platforms can be combined with cloud connectivity to provide remote robotic monitoring and control.

### System Architecture

The robot combined:

* **ESP32-CAM** for image capture
* **Arduino/ESP32** for motor control
* **L298N** motor driver
* **DC motors**
* **Ultrasonic sensor** for obstacle awareness
* **Firebase Realtime Database** for communication
* **React.js** for the remote control interface

### My Contributions

I contributed to both the embedded and software components of the system, including:

* Programming the embedded controllers using Arduino C++
* Implementing camera capture on the ESP32-CAM
* Integrating Firebase for real-time communication
* Developing the web-based control interface with React.js
* Implementing motor-control commands
* Integrating ultrasonic distance sensing
* Debugging communication and hardware integration issues

### Communication Pipeline

The system used Firebase as the communication layer between the robot and remote operator.

The control pipeline was:

**React Interface → Firebase → Embedded Controller → Motor Driver → Robot**

Meanwhile, camera frames were captured by the ESP32-CAM and transmitted through the communication infrastructure for remote monitoring.

### Engineering Challenges

The main challenges involved integrating multiple hardware and software components into a reliable real-time system.

These included:

* Wireless communication reliability
* ESP32 hardware limitations
* Real-time command synchronization
* Camera data transmission
* Motor-control integration
* Hardware component availability
* Debugging across embedded and web software

### Outcome

The completed prototype demonstrated remote robotic control and camera-based monitoring using inexpensive embedded hardware.

The project strengthened my interest in building **perception-enabled robotic systems that connect sensing, computation, communication, and physical action**.

It also provided practical experience that later became valuable in my work on autonomous robotic navigation.
