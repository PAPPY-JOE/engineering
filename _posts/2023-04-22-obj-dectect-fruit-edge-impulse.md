---
layout: research
title: 'Real-Time Fruit Classification with Edge Impulse'
date: 2023-04-22
permalink: /posts/2023/04/real-time-fruit-classification-edge-impulse/
redirect_from:
  - /posts/2023/04/real-time-fruit-classification-edge-impulse.html

tags:
  - embedded AI
  - TinyML
  - computer vision
  - Edge Impulse
  - machine learning
  - class project

---

### Description

As an early exploration of embedded machine learning, I worked with a team to develop a real-time image classification system capable of distinguishing between oranges and cherries.

The project introduced me to the practical challenges of collecting image datasets, training lightweight neural networks, and deploying computer vision models to resource-constrained hardware.

### Task

The objective was to develop a model capable of identifying and classifying physical objects in real time using Edge Impulse.

Our team was assigned two classes:

* Orange
* Cherry

### Approach

We collected images of both fruit classes under different conditions and trained a lightweight image classification model using Edge Impulse.

The development process involved:

* Dataset collection
* Image labeling
* Model training
* Validation
* Real-world testing
* Iterative debugging

### Challenges

The project exposed several practical issues associated with computer vision systems:

* Limited availability of oranges during the off-season
* Variable lighting conditions
* Similar visual characteristics between classes
* Differences between training images and real-world inputs

These challenges demonstrated that model performance depends heavily on the quality and diversity of the training data.

### Results

The final training run achieved:

* **Validation F1-score:** 90.0%
* **Real-world testing accuracy:** 84.62%

### Reflection

This project was my early hands-on introduction to **computer vision and embedded machine learning**. It later influenced my interest in deploying intelligent perception systems directly onto constrained hardware.

It also provided the foundation for subsequent work involving TinyML, embedded vision, and autonomous robotics.

### Acknowledgements
* Dr. Segun Adebayo
* My group members
