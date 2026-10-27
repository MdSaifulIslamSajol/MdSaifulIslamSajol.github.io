---
icon: fa-solid fa-wind
layout: page
title: Domain Adaptation for Renewable Energy
description: Deep domain-adaptive models for wind power, solar power, and building load prediction under geographic distribution shift.
importance: 3
category: environment and energy
related_publications: true
---

- **Wind (first author, IEEE GPECOM 2024):** a domain-adaptive deep neural network for wind power prediction across locations, using EMHIRES hourly generation data and 21 weather parameters with random-forest feature selection. Adapting only the last fully connected layers, without source data, gave 6.14% to 28.44% higher accuracy than the non-adaptive baseline. [Code](https://github.com/MdSaifulIslamSajol/wind_power_domain_adaptation)
- **Solar (co-author, IEEE ETFG 2023):** a source-free domain adaptive framework using NREL simulated PV output and NREL SAM weather data, improving accuracy by 10.47%, 7.44%, and 5.11% for California, Florida, and New York.
- **Building load (co-author, IEEE EPEi 2024):** a domain-adaptive model for cross-location building load prediction using NREL's End-Use Load Profiles, improving accuracy and computational speed over non-adapted models.
- **Energy theft (first author, IEEE KPEC 2024):** SMOTE-enhanced machine learning models for energy theft detection in smart grids.

**Publications:** {% cite sajol2024windpower islam2023solar hasan2024buildingload sajol2024energytheft %}
