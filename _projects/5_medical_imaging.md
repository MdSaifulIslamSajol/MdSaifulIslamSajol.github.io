---
icon: fa-solid fa-x-ray
layout: page
title: Medical Image Classification Benchmarks
description: CNN, transformer, and hybrid models compared on brain tumor MRI, skin lesions, and chest X-rays (three first-author papers).
importance: 2
category: reliable ai
related_publications: true
---

- **Brain tumor MRI (IEEE IS 2024):** compared seven transformer-based or self-attention-based models with five conventional CNNs on four datasets using direct transfer learning. Transformer-based models did not show a distinct advantage; ResNet-50 performed well overall, especially on smaller datasets. [Code](https://github.com/MdSaifulIslamSajol/brain-tumor-detection)
- **Skin lesions (IEEE EECSI 2024):** compared CNN, transformer, and hybrid models on HAM10000 (10,015 dermatoscopic images). ConvNeXt V2 was the most accurate CNN (93.2%), ViT2 the most accurate transformer (92.66%), and CvT the best hybrid (92.20%). [Code](https://github.com/MdSaifulIslamSajol/skin-cancer-detection)
- **Chest X-rays (ICAIIC 2025):** a taxonomy of CNN, transformer, and hybrid classifiers evaluated for pneumonia detection. SwinV2 gave the highest accuracy (95.03%), recall (94.66%), and F1-score (94.70%) but slower inference (133.58 ms). [Code](https://github.com/MdSaifulIslamSajol/pneumonia-detection-with-chest-x-ray-images)
- **Document images (IEEE CITDS 2024):** ConvNeXt V2 for document image classification on Tobacco-3482 (92.25% accuracy). [Code](https://github.com/MdSaifulIslamSajol/document-tobacco-convnextv2)

**Publications:** {% cite sajol2024braintumor sajol2024skincancer sajol2025pneumonia sajol2024convnextv2 %}
