---
layout: research

title: 'Sunflower Solar Tracker System'
date: 2024-02-07
permalink: /posts/2024/02/sunflower-solar-tracker/
redirect_from:
  - /posts/2024/02/sunflower-solar-tracker.html

tags:
  - mechatronics
  - Arduino
  - control systems
  - electronics
  - CAD
  - 3D printing
  - class project

---

### Description

I led a four-member team in designing and building a single-axis solar tracking system inspired by the movement of a sunflower.

The system automatically adjusted the orientation of a solar panel based on differential light measurements, using an Arduino-based feedback loop and servo actuator.

### Technical Implementation

The system combined:

* Arduino-based control
* Light-dependent resistors for light sensing
* Servo actuation
* LCD feedback
* Custom 3D-printed mechanical components
* SolidWorks CAD modelling
* Cura-based slicing and print optimization

### Control Strategy

Two light sensors measured the relative intensity of incident light.

The controller calculated the difference between the two measurements and adjusted the servo position whenever the difference exceeded a predefined threshold.

This provided a simple closed-loop tracking mechanism that continuously moved the panel toward the stronger light source.

### Development Process

The project progressed through several stages:

1. Concept development
2. Simulation and design
3. Electronics integration
4. Initial prototype using a temporary frame
5. Mechanical redesign
6. 3D printing
7. Final assembly and testing

### Results

The final prototype successfully tracked the direction of maximum detected light and achieved an observed increase of approximately **25% in solar energy generation** compared with the stationary configuration during testing.

### Engineering Challenges

* Arduino hardware issues
* Mechanical assembly
* Component availability
* Limited project budget
* 3D-printing time constraints

### Skills Developed

* Embedded C++
* Feedback control
* Arduino development
* SolidWorks
* 3D printing
* Electronics integration
* Rapid prototyping

### Acknowledgements

* Dr. Segun Adebayo
* Mrs. Kehinde
* Toritseju Regina Awani
* Subuola Emmanuel Ilori
* Temitayo Jesimiel Adenuga
* Other engineering and laboratory contributors
