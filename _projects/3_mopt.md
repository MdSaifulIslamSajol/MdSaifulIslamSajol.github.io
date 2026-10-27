---
img_fit: contain
layout: page
title: MOPT for Drug Design
description: A physics-inspired navigator that searches a chemical embedding space for alternate inhibitors of a known drug.
img: assets/img/proj_mopt.jpg
importance: 3
category: biology and drug discovery
related_publications: true
---

**Multiple Objective Path Tracking (MOPT), first author, manuscript in preparation (JCIM)**

<div class="row justify-content-sm-center">
  <div class="col-sm-7 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj_mopt.jpg" title="MOPT trajectory search" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Trajectory search in a latent chemical space (figure from the MOPT manuscript).</div>

- MOPT searches a molecular embedding for alternate inhibitors of a known drug instead of ranking a library. Particles carry momentum, feel friction, and are pushed away from ground already covered, and every candidate must pass a developability filter of size, drug-likeness, and predicted ADMET endpoints.
- Across **21 targets** (metalloenzymes, proteases, kinases, nuclear receptors, and GPCRs), MOPT recovered more known inhibitors than gradient descent on 20 targets and reached **87%** of the chemistry around a typical inhibitor against 27%.
- In a first generative case study, a SELFIES variational autoencoder trained on 258,538 drug-like molecules replaced the library: across nine targets, MOPT decoded about 1,730 valid molecules on average, 99.9% not in the training set, against 42 for gradient descent.
- Next stage: de novo generation of drug SMILES from a generative embedding space, with docking inside the search loop.

**Publications:** {% cite sajol2026mopt %}
