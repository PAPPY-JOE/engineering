---

title: 'GRACE: Autonomous Healthcare Service Robot Using Visual SLAM and Semantic Scene Understanding'
date: 2025-11-01
permalink: /posts/2025/11/grace-autonomous-healthcare-service-robot

tags:
    - robotics
    - autonomous systems
    - healthcare robotics
    - visual SLAM
    - computer vision
    - OCR
    - embedded AI
    - Raspberry Pi
    - navigation
    - perception

---

### Description

**GRACE** is an autonomous healthcare service robot developed as my undergraduate thesis project at Bowen University.

The project explored how an embedded mobile robot can use visual perception and semantic scene understanding to navigate indoor healthcare environments and recognize clinically meaningful locations.

The system was designed around a practical constraint: enabling autonomous navigation in environments where expensive infrastructure such as LiDAR or external positioning systems may not be available.

### Research Motivation

Healthcare environments contain many visually meaningful cues—such as room names, signs, and labels—that can help robots understand where they are and where they need to go.

Rather than relying solely on geometric localization, GRACE combines **visual SLAM with text recognition** to associate physical locations with semantic information.

This creates a perception pipeline that allows a robot to reason about both:

* **Where am I?**
* **What does this location represent?**

### System Architecture

The robot integrates:

* Raspberry Pi 5
* Microsoft LifeCam Cinema HD camera
* ORB-SLAM3
* EasyOCR
* Embedded navigation
* Ultrasonic sensors
* 4WD mobile robot platform
* Flask-based teleoperation interface

### Perception Pipeline

The core pipeline combines visual localization and semantic recognition:

**Camera → ORB-SLAM3 → Camera Pose**

and

**Camera → OCR → Textual Semantic Information**

The system then associates recognized text with estimated camera poses using timestamp alignment.

This allows labels such as **WARD** or **CLINIC** to become spatially meaningful landmarks within the robot's map.

### Technical Challenges

Running the complete perception pipeline on a Raspberry Pi 5 introduced significant computational constraints.

I worked on integrating:

* Visual SLAM
* OCR
* Camera processing
* Pose estimation
* Semantic association
* Embedded computation

within a resource-constrained robotic platform.

### Experimental Setup

A small-scale indoor clinical environment was constructed to evaluate the system.

The test environment incorporated signage representing healthcare locations and was designed to evaluate whether the robot could associate recognized text with spatial locations.

### Results

The system achieved approximately:

* **0.28 m Absolute Pose Error RMSE**
* **>90% semantic association accuracy** at a confidence threshold of 0.80

The results demonstrated the feasibility of combining visual localization with semantic text recognition on low-cost embedded hardware.

### Research Contribution

The project explored an alternative approach to semantic navigation for healthcare robots by combining **geometry-aware visual localization with textual scene understanding**.

Rather than treating OCR as an independent perception task, the system incorporated recognized text into the robot's spatial representation.

### Applications

The approach could support future robotic systems for:

* Healthcare facility navigation
* Delivery of supplies
* Patient assistance
* Hospital logistics
* Indoor service robotics
* Infrastructure-free robotic deployment

### Broader Research Direction

GRACE shaped my current research interests in:

* Autonomous navigation
* Visual perception
* Embedded AI
* Safe robotic systems
* Perception-driven control
* Healthcare robotics
* Robotics in unstructured environments

It also motivated my interest in developing autonomous systems that can operate reliably when sensing is noisy, computational resources are limited, and real-world environments are unpredictable.

### Recognition

The work builds on my broader research experience presented through the **AAAI Undergraduate Consortium** and my subsequent work in embedded AI and robotics.

### Code

The implementation and selected components of the project are available on GitHub.

### Reflection

GRACE was the project that moved my interest in robotics from building individual components toward investigating how **perception, localization, semantics, and physical action can be integrated into an autonomous system**.

It remains the foundation of my current interest in intelligent and trustworthy autonomous robots.
