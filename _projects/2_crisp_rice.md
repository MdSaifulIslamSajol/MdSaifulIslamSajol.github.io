---
img_fit: contain
layout: page
title: Regulatory Genomics for Climate-Resilient Rice
description: CARCM, GatedFusion, and CisGPT for predicting and designing drought-responsive gene regulation (USDA-NIFA CRISP-RICE).
img: assets/img/proj_carcm.jpg
importance: 2
category: biology and drug discovery
related_publications: true
---

**CRISP-RICE: Climate Resilient Innovations for Sustainable Production of Rice (USDA-NIFA grant), July 2025 to present** · [Project page (USDA National Agricultural Library)](https://www.nal.usda.gov/research-tools/food-safety-research-projects/climate-resilient-innovations-sustainable-production-rice-crisp-rice)

I contribute to a multi-state, multi-institutional USDA Sustainable Agricultural Systems grant focused on the sustainability and profitability of rice production in the Southern U.S., integrating AI, modeling, and precision agriculture.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj_carcm.jpg" title="CARCM feature pipeline" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">CARCM data and feature pipeline, from RiceMetaSys promoters to motif, positional, and context features (figure from the CARCM manuscript).</div>

#### CARCM (first author; submitted to Artificial Intelligence in Agriculture) · [Code](https://github.com/MdSaifulIslamSajol/CARCM)

A context-aware framework that fuses promoter motif content with biological context (variety, tissue, developmental stage) through gated cross-attention. It reached an **AUC of 0.852** and an F1 of 0.791, outperforming 12 classical and deep learning baselines and 8 fine-tuned DNA foundation models. Removing biological context lowered AUC by 0.232, and an encoder pretrained on drought raised AUC on a smaller salt-stress dataset from 0.652 to 0.829.

#### M.Sc. thesis and GatedFusion (IEEE BigData 2026 workshop, submitted) · [Code](https://github.com/MdSaifulIslamSajol/Drought-Responsive-Rice-Gene-Regulation-Prediction)

Framed the direction of drought-responsive gene regulation (up versus down) as binary classification from 1,000 bp promoter sequences and biological context, using RiceMetaSys (13 varieties, 8 tissues, 6 developmental stages) and counts of 54 known drought-related motifs. Seven hybrid neural networks were compared with a custom HierarchicalFocalLoss; GatedFusion combines motif counts and context with a bidirectional LSTM and a learned gate.

#### CisGPT (first author; in preparation)

A 66-million-parameter autoregressive transformer that is told which motifs to use and where to place them, then fills in realistic flanking sequence with classifier-free guidance. On rice drought-responsive promoters, the motif content of generated sequences tracks the requested content closely (correlation about 0.94). The same network was applied to a yeast promoter library, a human enhancer assay, and a second plant promoter dataset, and compared with published generators on identical splits. No wet-lab validation has been done yet.

**Publications:** {% cite sajol2026carcm sajol2026gatedfusion sajol2026cisgpt %}
