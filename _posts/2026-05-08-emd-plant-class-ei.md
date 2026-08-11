---

title: 'Embedded Plant Classification on XIAO ESP32S3 Sense Using Edge Impulse'
date: 2026-05-28
permalink: /posts/2026/05/embedded-plant-classification-edge-impulse

tags:
    - embedded AI
    - TinyML
    - computer vision
    - edge AI
    - machine learning
    - ESP32
    - Edge Impulse
    - team leadership

---

### Description

Led a six-member team to develop and deploy a lightweight embedded vision system for classifying mango and other plant species on the Bowen University campus.

The project used the **Seeed Studio XIAO ESP32S3 Sense**, **Edge Impulse**, and a custom dataset collected through fieldwork across multiple campus environments. The complete pipeline covered image acquisition, dataset preparation, model training, evaluation, and on-device inference.

The best-performing model achieved an **84.5% F1-score** and was successfully deployed for real-time classification on the ESP32-S3 without requiring cloud inference.

### My Role

I served as the **team lead**, coordinating a six-member team across data collection, preprocessing, model development, experimentation, and deployment.

My technical contributions included:

* Designing the dataset preprocessing workflow
* Converting HEIC and DNG images into ML-compatible formats
* Automating dataset preparation using Python and Google Colab
* Uploading datasets using the Edge Impulse Python SDK
* Experimenting with multiple image resolutions and training configurations
* Evaluating model performance using precision, recall, F1-score, and confusion matrices
* Deploying the trained model to the XIAO ESP32S3 Sense
* Conducting real-world testing under varying environmental conditions

### System

The project followed an end-to-end edge AI pipeline:

**Field Data Collection → Dataset Preprocessing → Edge Impulse Training → Model Evaluation → Embedded Deployment → Real-Time Inference**

A custom dataset of more than **600 usable images** was collected across Bowen University's campus, covering different plant categories and environmental conditions.

### Technical Approach

#### Dataset Preparation

Images were collected using smartphones across locations including the university farm, roadsides, and shaded campus paths.

Because contributors used different devices, the dataset contained several image formats, including:

* JPEG
* PNG
* HEIC
* DNG

I developed a preprocessing workflow using Python, Google Colab, Pillow, pyheif, dcraw, and the Edge Impulse Python SDK to standardize the dataset and automate batch ingestion.

### Model Development

We experimented with multiple image resolutions and training configurations using **MobileNetV2-based transfer learning** through Edge Impulse.

Tested resolutions included:

* 48 × 48
* 96 × 96
* 320 × 320

Eight training configurations were evaluated to understand the trade-off between image resolution, classification performance, and embedded deployment requirements.

### Results

The best-performing model achieved:

* **Precision:** 82%
* **Recall:** 87%
* **F1-score:** 84.5%
* **Top-1 accuracy:** 100%
* **Top-3 accuracy:** 85.7%

The model was subsequently deployed to the **XIAO ESP32S3 Sense** and tested using live camera input.

The system was able to perform on-device predictions in approximately one second under typical daylight conditions.

### Engineering Challenges

Several practical challenges emerged during development:

* Class imbalance across plant categories
* Variable lighting and motion blur
* Visually similar plant classes
* HEIC/DNG compatibility issues
* Large-batch dataset ingestion failures
* Computational constraints of embedded hardware

These challenges highlighted the importance of dataset quality and deployment-aware model design when developing AI systems for resource-constrained environments.

### Applications

The system serves as a proof of concept for low-cost embedded vision in:

* Precision agriculture
* Environmental monitoring
* Biodiversity mapping
* Plant identification
* Edge-based ecological sensing

### Presentation

I presented this project at the **TinyML4D Academic Network 20th Show and Tell** on May 28, 2026, as part of the international TinyML community.

### What I Learned

This project strengthened my experience in **TinyML, embedded computer vision, dataset engineering, model evaluation, and edge deployment**, while also giving me practical experience leading a multidisciplinary engineering team.

It also reinforced my interest in developing intelligent robotic and embedded systems that can operate reliably under real-world computational and environmental constraints.

### Acknowledgements

* Dr. Segun Adebayo
* Project team members:

  * Evidence Adesina
  * Ayomiposi Laide-Muibi
  * Daniel Abayomi
  * Olawande Adetoyi
  * Jamiu Gbadmosi
