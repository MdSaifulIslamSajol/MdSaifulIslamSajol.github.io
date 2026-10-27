---
layout: page
title: LSU and Intuit Collaboration, Reliable and Trustworthy AI
description: Industry-academia research with Intuit Inc. on out-of-distribution detection for image classification (COMBOOD and XOOD). XOOD received the ICANN 2025 Best Paper Award.
period: Jan 2022 – Jun 2025
img: assets/img/award_icann_best_paper.jpg
importance: 1
category: reliable ai
related_publications: true
---

**Jan 2022 – Jun 2025** · [XOOD paper](https://doi.org/10.1007/978-3-032-04558-4_42) · [XOOD code](https://github.com/MdSaifulIslamSajol/xood-icann/) · [COMBOOD paper](https://doi.org/10.1137/1.9781611978032.74) · [COMBOOD on arXiv](https://arxiv.org/abs/2602.07042)

This work was carried out in close collaboration with Dr. Kamalika Das of Intuit Inc., together with Dr. Supratik Mukhopadhyay, and was partially supported by Intuit.

The project focuses on designing scalable and reliable algorithms for detecting out-of-distribution (OOD) data in deep learning-based image classification systems. It addresses a critical reliability gap in neural networks, which often produce highly confident but incorrect predictions when they encounter unseen or anomalous inputs.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/award_icann_best_paper.jpg" title="ENNS Best Paper Award, ICANN 2025" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">ENNS Best Paper Award certificate for XOOD at ICANN 2025.</div>

#### COMBOOD (SIAM SDM 2024, Best Poster Runner-Up)

COMBOOD introduces a semi-parametric OOD detection framework that combines nearest-neighbor distance and Mahalanobis distance signals to handle both near-OOD and far-OOD scenarios. The method is fully unsupervised, scales linearly with the size of the embedding space, and shows statistically significant improvements over state-of-the-art approaches on a majority of the OpenOOD benchmark datasets.

#### XOOD (ICANN 2025, Best Paper Award)

XOOD proposes a self-supervised, extreme-value-based OOD detection algorithm that uses activation-layer statistics to distinguish in-distribution from OOD samples. It reduces the false-positive rate (FPR95) by 50% while improving inference time by an order of magnitude, which makes it practical for production machine learning systems.

Together, these works advance trustworthy, deployment-ready AI by improving the robustness and efficiency of deep neural networks in safety-critical and automated decision-making applications.

**Publications:** {% cite berglind2026xood rajasekaran2024combood %}
