---
img_fit: contain
layout: page
title: DeepDrug Protein Embeddings Bank (DPEB)
description: Multimodal embeddings for 22,043 human proteins and graph neural network benchmarks for protein-protein interaction prediction.
img: assets/img/proj_dpeb.jpg
importance: 1
category: biology and drug discovery
related_publications: true
---

**NAR Genomics and Bioinformatics, 2026 (first author)** · [Paper](https://doi.org/10.1093/nargab/lqag042) · [AWS Open Data](https://registry.opendata.aws/deepdrug-dpeb/) · [GitHub](https://github.com/deepdrugai/DPEB) · [Zenodo archive](https://doi.org/10.5281/zenodo.19008090)

As an active member of the LSU DeepDrug team under Dr. Supratik Mukhopadhyay, I built DPEB, an open multimodal resource of protein embeddings.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj_dpeb_workflow.jpg" title="DPEB workflow" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">DPEB workflow: protein sources, four embedding generators, and downstream graph analyses (figure from the DPEB paper).</div>

- **Four pretrained models:** AlphaFold2 (structural single representations extracted in single-sequence mode), ESM-2 (650M parameters, 1280-d), BioEmbeddings (ProtTrans BERT-BFD), and ProtVec (300-d), for 22,043 human proteins.
- **Data integration:** standardized sequences from UniProt Swiss-Prot and interactions from HPRD, HuMAP, IntAct, and STRING into a confidence-weighted graph of more than 11 million interaction pairs (DGL), with deduplication to prevent train-test leakage.
- **Benchmarks:** GraphSAGE, GCN, GAT, GTN, and GIN for PPI link prediction (PyTorch and DGL, NVIDIA V100). GraphSAGE with BioEmbeddings reached **87.37% AUROC** and 79.16% accuracy.
- **Open release:** data under CC-BY 4.0 and code under the MIT license, hosted through the AWS Open Data Sponsorship Program with versioned storage and a citable Zenodo archive.
- This work also led to the co-authored **KG-DTA** paper, a knowledge graph meta-path learning framework for drug-target binding affinity prediction (AIMLSystems 2024).

**Publications:** {% cite sajol2026dpeb ranjan2024kgdta %}
