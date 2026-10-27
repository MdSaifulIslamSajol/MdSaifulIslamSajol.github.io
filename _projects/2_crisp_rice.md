---
layout: page
title: AI for Climate-Resilient Rice
description: Machine learning to understand and predict how rice genes respond to drought, and to design regulatory DNA (USDA-NIFA CRISP-RICE).
icon: fa-solid fa-seedling
importance: 2
category: biology and drug discovery
related_publications: true
---

**CRISP-RICE: Climate Resilient Innovations for Sustainable Production of Rice (USDA-NIFA grant), July 2025 to present** · [Project page (USDA National Agricultural Library)](https://www.nal.usda.gov/research-tools/food-safety-research-projects/climate-resilient-innovations-sustainable-production-rice-crisp-rice)

#### What the project is about

CRISP-RICE is a multi-state, multi-institutional, and multi-disciplinary USDA Sustainable Agricultural Systems grant focused on the sustainability and profitability of rice production in the Southern U.S. It brings together artificial intelligence, modeling, and precision agriculture to develop climate-smart rice management practices under changing climatic conditions. My part of the project applies AI and bioinformatics to regulatory genomics: how rice genes switch on or off when the plant is under drought stress.

#### Goal

Drought is one of the biggest threats to rice yield, and a gene's response to drought can differ between rice varieties, tissues, and growth stages. Our goal is to build machine learning tools that predict how rice genes respond to drought in a given biological setting, and, in the longer term, to help design regulatory DNA for crops that cope better with climate stress.

#### What we are doing

- **Predicting drought-responsive gene regulation.** We are developing deep learning models that predict whether a rice gene is up- or down-regulated under drought, using its promoter DNA together with biological context such as variety, tissue, and developmental stage. This work includes my M.Sc. thesis and two first-author manuscripts that are currently under review (CARCM and a workshop paper at IEEE BigData 2026).
- **Generative design of regulatory DNA.** With CisGPT (first author, in preparation), we are developing a generative AI model for designing regulatory DNA sequences, and testing whether the approach carries over to other organisms.
- **Careful evaluation.** We compare our models against established machine learning baselines and recent DNA foundation models on the same data, so that each improvement is measured rather than assumed.

#### What comes next

- Completing peer review and publishing the manuscripts, then releasing code and models openly.
- Extending the work to other environmental stresses and crops.
- Working with plant science collaborators on laboratory validation of designed sequences, which has not been done yet.

Details of the methods and results will be shared here once the papers are published.

**Publications:** {% cite sajol2026carcm sajol2026gatedfusion sajol2026cisgpt %}
