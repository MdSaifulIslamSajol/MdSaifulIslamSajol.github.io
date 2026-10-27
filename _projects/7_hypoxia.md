---
icon: fa-solid fa-water
layout: page
title: Daily Coastal Hypoxia Forecasting
description: Benchmark of BiLSTM, Medformer, Spatio-Temporal Transformer, and TCN for daily hypoxia classification on the Louisiana-Texas shelf (IEEE BigData 2025).
importance: 2
category: environment and energy
related_publications: true
---

[Paper](https://doi.org/10.1109/BIGDATA66926.2025.11402646) · [Code](https://github.com/rmagesh148/hypoxia-ai/)

- Co-authored a benchmark of four deep learning architectures for daily hypoxia classification. Models were trained on 2009 to 2020 hindcast data from the coupled COAWST ocean-biogeochemical modeling system (gridded 2D fields of stratification, sediment oxygen consumption, and temperature-dependent decomposition rate, in 7-day windows) and tested on August 2020 and the summers of 2022 to 2024.
- The Spatio-Temporal Transformer performed best (**AUC-ROC 0.982 to 0.992**). McNemar's test was used to assess whether differences between models were statistically significant.

**Publications:** {% cite rajasekaran2025hypoxia %}
