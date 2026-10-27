---
layout: post
title: "DPEB: open multimodal embeddings for 22,043 human proteins"
date: 2026-03-13
description: What the DeepDrug Protein Embeddings Bank contains and where to get it.
tags: [proteins, open-data]
categories: research
related_posts: false
---

The **DeepDrug Protein Embeddings Bank (DPEB)** paper was accepted in *NAR Genomics and Bioinformatics* in March 2026 ([doi:10.1093/nargab/lqag042](https://doi.org/10.1093/nargab/lqag042)), and version 1.0.1 of the code is archived on [Zenodo](https://doi.org/10.5281/zenodo.19008090).

#### What is in it

DPEB provides embeddings for 22,043 human proteins from four pretrained models:

- **AlphaFold2** structural single representations (extracted in single-sequence mode),
- **ESM-2** (650M parameters, 1280-dimensional),
- **BioEmbeddings** (ProtTrans BERT-BFD), and
- **ProtVec** (300-dimensional).

AlphaFold2 structures are public, but the network's internal embeddings are not, and DPEB fills that gap.

#### What we benchmarked

We combined interactions from HPRD, HuMAP, IntAct, and STRING into a confidence-weighted graph of more than 11 million interaction pairs and compared GraphSAGE, GCN, GAT, GTN, and GIN for protein-protein interaction link prediction. GraphSAGE with BioEmbeddings gave the best result: **87.37% AUROC** and 79.16% accuracy.

#### Where to get it

- Data: [AWS Open Data Registry](https://registry.opendata.aws/deepdrug-dpeb/) (CC-BY 4.0)
- Code: [github.com/deepdrugai/DPEB](https://github.com/deepdrugai/DPEB) (MIT license)
