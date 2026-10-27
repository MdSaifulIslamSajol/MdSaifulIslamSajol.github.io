---
layout: page
title: Reliable AI, Out-of-Distribution Detection
description: COMBOOD and XOOD, methods that flag inputs a classifier has not been trained for. XOOD received the ICANN 2025 Best Paper Award.
img: assets/img/award_icann_best_paper.jpg
importance: 1
category: reliable ai
related_publications: true
---

This work was partially supported by Intuit. · [XOOD code](https://github.com/MdSaifulIslamSajol/xood-icann/) · [COMBOOD on arXiv](https://arxiv.org/abs/2602.07042)

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/award_icann_best_paper.jpg" title="ENNS Best Paper Award, ICANN 2025" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">ENNS Best Paper Award certificate for XOOD at ICANN 2025.</div>

- **COMBOOD** (SDM 2024, Best Poster Runner-Up): an unsupervised semi-parametric framework that combines nearest-neighbor and Mahalanobis distance signals into one confidence score for both near-OOD and far-OOD cases. It outperformed state-of-the-art methods on the OpenOOD (v1 and v1.5) benchmarks and a document image dataset, and scales linearly with the size of the embedding space.
- **XOOD** (ICANN 2025, Best Paper): a self-supervised, extreme-value-based framework that uses signals from the extreme values of activation layers. On benchmark datasets it reduced FPR95 by 50% and improved inference time by an order of magnitude relative to state-of-the-art methods.
- Implemented self-supervised learning techniques for feature extraction and anomaly detection in image data.

**Publications:** {% cite berglind2026xood rajasekaran2024combood %}
