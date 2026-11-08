---
layout: research
title: "Stable Semantic Perception for Embedded Robots"
collection: publications
permalink: /publication/stable-semantic-perception-2026/
date: 2026-11-03
publication_status: "Published"
venue: "Proceedings of the 6th International Conference on Artificial Intelligence and Robotics (MIRG-ICAIR 2026)"
pages: "119-126"
publication_year: 2026
excerpt: "Sustained visual SLAM and asynchronous OCR on a Raspberry Pi 5."
description: "J. Fatoye and S. Adebayo. Published in the MIRG-ICAIR 2026 proceedings, pp. 119-126; presented on 3 November 2026."
---
<div class="prose" markdown="1">
**J. Fatoye and S. Adebayo**

**Status:** Published in the printed MIRG-ICAIR 2026 conference proceedings, pages **119-126**. Presented at the University of Lagos on 3 November 2026.

## Citation

J. Fatoye and S. Adebayo, "Stable Semantic Perception for Embedded Robots," in *Proceedings of the 6th International Conference on Artificial Intelligence and Robotics (MIRG-ICAIR 2026)*, Machine Intelligence Research Group, University of Lagos, 2026, pp. 119-126.

## Summary

The paper examines sustained semantic perception on a resource-constrained mobile robot. It combines monocular ORB-SLAM3 and asynchronous Tesseract OCR through separate processes, sparse frame sharing and a translational-stability heuristic for scheduling OCR work.

In one 102-minute teleoperated run in a simulated clinical corridor, the Raspberry Pi 5 system processed 74,750 camera frames with zero observed system crashes and peak resident memory below 3 GB.

This is an implementation study of the combined pipeline. The results do not establish external localization accuracy, autonomous navigation performance or a controlled OCR benchmark.

[Implementation and project details]({{ site.baseurl }}/posts/2025/11/grace-autonomous-healthcare-service-robot) &nbsp; / &nbsp; [Code](https://github.com/PAPPY-JOE/vslam_ocr_pi5) &nbsp; / &nbsp; [Presentation clip]({{ site.baseurl }}/talks/#icair-2026)

[Contact me about the paper](mailto:fatoyejoseph@gmail.com?subject=Stable%20Semantic%20Perception%20paper)
</div>
