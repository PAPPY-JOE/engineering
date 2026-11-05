---
layout: research
title: "Research & projects"
permalink: /research/
description: "Reliable visual information for robotic tasks, with attention to the limits of embedded hardware."
---
<div class="prose" markdown="1">
My main interest is in writing algorithms that help robots use visual information reliably to carry out tasks. My experience so far is strongest in building and debugging perception pipelines on physical hardware, from camera input and data preparation to embedded deployment.

## GRACE: embedded semantic perception

![The GRACE mobile robot]({{ site.baseurl }}/images/research/grace-robot.jpg)

GRACE began as my undergraduate final-year project at Bowen University. I continued the research after graduation with my supervisor, Dr. Segun Adebayo, studying how a Raspberry Pi 5 can run visual SLAM and OCR together without overwhelming its resources.

I integrated ORB-SLAM3 through a C++17 wrapper with Python-based Tesseract OCR and semantic landmark logging. Separate processes, sparse frame sharing and a translational-stability heuristic regulate when semantic processing runs.

In one teleoperated, 102-minute run in a simulated clinical corridor, the system processed 74,750 camera frames with no observed system crashes and peak resident memory below 3 GB. The study concerns sustained perception in this tested configuration. Autonomous navigation and deployment in a working hospital remain future work.

[Project, methods and limitations]({{ site.baseurl }}/posts/2025/11/grace-autonomous-healthcare-service-robot) &nbsp; / &nbsp; [Implementation](https://github.com/PAPPY-JOE/vslam_ocr_pi5) &nbsp; / &nbsp; [ICAIR paper summary]({{ site.baseurl }}/publication/stable-semantic-perception-2026/)

## Embedded plant classification

I led a six-person team developing an on-device plant classifier with the XIAO ESP32S3 Sense and Edge Impulse. The work covered field image collection, preprocessing across different image formats, MobileNetV2-based model evaluation and deployment for embedded inference.

The best reported model achieved an F1-score of 84.5%. I presented the project at the TinyML4D Academic Network 20th Show and Tell in May 2026.

[Project details]({{ site.baseurl }}/posts/2026/05/embedded-plant-classification-edge-impulse)

## Earlier engineering projects

- **Teleoperated surveillance robot:** ESP32-CAM and Arduino hardware, motor control, Firebase communication and a React operator interface, developed during my engineering internship in 2024.
- **Embedded fruit recognition:** an Edge Impulse computer-vision project exploring model deployment and physical testing.
- **Single-axis solar tracker:** team development of an Arduino-based sensing and actuation system.

[Earlier project notes]({{ site.baseurl }}/year-archive/)

## Where I want to take this work

I want to connect reliable perception to robot decisions and task execution. Questions I would like to study include when a robot should trust a visual observation, how perception should respond to limited computing resources, and how to evaluate these choices on physical systems. Healthcare and assistive robotics are possible applications alongside other indoor and field environments.
</div>
