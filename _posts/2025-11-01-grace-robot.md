---
layout: research
title: "GRACE: stable semantic perception on embedded hardware"
date: 2025-11-01
modified: 2026-11-05
permalink: /posts/2025/11/grace-autonomous-healthcare-service-robot/
redirect_from:
  - /posts/2025/11/grace-autonomous-healthcare-service-robot.html
description: "Integrating visual SLAM and asynchronous OCR on a Raspberry Pi 5, from the undergraduate platform to the ICAIR 2026 study."
tags: [robotics, visual SLAM, embedded AI, OCR]
---
<div class="prose" markdown="1">
![GRACE mobile robotic platform]({{ site.baseurl }}/images/research/grace-robot.jpg)

GRACE began as my undergraduate final-year project in Mechatronics Engineering at Bowen University. I continued the research after graduation with my supervisor, Dr. Segun Adebayo. The resulting paper, **Stable Semantic Perception for Embedded Robots**, was accepted at MIRG ICAIR 2026 and presented on 3 November 2026.

## The problem

Visual SLAM estimates camera motion and builds a geometric map, while OCR can extract useful room labels and signs. On a Raspberry Pi 5, running both continuously competes for limited computing resources. Our study investigates a practical integration that keeps semantic perception running during extended operation.

## What I implemented

- A C++17 wrapper around monocular ORB-SLAM3, alongside Python Tesseract OCR and a Python semantic landmark log.
- Separate processes and sparse image sharing, with one camera owner and atomic image-file updates.
- A translational-stability heuristic that gates OCR processing using a recent window of valid SLAM translations.
- Approximate association of recognized text with the latest valid pose, using a fixed-depth projection and repeated observations to merge candidate landmarks.

The gate schedules semantic work; it is not a calibrated safety guarantee. The OCR and SLAM streams are asynchronous, so their pose association is approximate rather than exact timestamp alignment.

## The recorded run

The platform was teleoperated through a simulated clinical corridor with signs such as WARD, THEATRE and EMERGENCY.

| Measure | Retained result |
| --- | --- |
| Continuous operation | 102 minutes |
| Processed camera frames | 74,750 |
| Observed system crashes | 0 |
| Peak resident memory | Below 3 GB |

These are results from one sustained run of the combined configuration. They support the feasibility of this implementation under the tested conditions.

## Interpretation and limits

The historical **0.28 m figure is aligned trajectory self-consistency RMSE**, obtained from estimates of the same SLAM system. It is not external localization accuracy or an error against independent ground truth.

Monocular scale, fixed-depth projection and asynchronous pose association limit the geometric interpretation of semantic landmarks. Repeated text detections are not proof of correct recognition. This study does not establish a benchmark OCR accuracy or isolate the gate's causal benefit through an ablation.

The experiment did not demonstrate autonomous navigation or operation in a working hospital. The accepted implementation is also not a completed ROS2 system. Those remain directions for further development.

## Resources

- [Code and retained project materials](https://github.com/PAPPY-JOE/vslam_ocr_pi5)
- [Paper summary and status]({{ site.baseurl }}/publication/stable-semantic-perception-2026/)
- [ICAIR presentation clip]({{ site.baseurl }}/talks/#icair-2026)

The final proceedings link will be added when available.
</div>
