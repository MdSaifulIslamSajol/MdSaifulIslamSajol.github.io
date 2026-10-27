---
layout: page
title: DeepDrug, AI-Driven Drug Discovery and Protein Representation Learning
description: Drug-target interaction modeling and large-scale protein representation learning with graph-based and multimodal AI (KG-DTA and DPEB).
period: Jan 2022 – Present
img: assets/img/proj_dpeb.jpg
img_fit: contain
importance: 1
category: biology and drug discovery
related_publications: true
---

**Jan 2022 – Present** · [DPEB paper](https://doi.org/10.1093/nargab/lqag042) · [KG-DTA paper](https://doi.org/10.1145/3703412.3703426) · [DPEB on AWS Open Data](https://registry.opendata.aws/deepdrug-dpeb/) · [DPEB code](https://github.com/deepdrugai/DPEB) · [Zenodo archive](https://doi.org/10.5281/zenodo.19008090)

DeepDrug is a computational drug discovery project focused on advancing drug-target interaction modeling and large-scale protein representation learning using graph-based and multimodal AI techniques. The project integrates heterogeneous biological knowledge, pretrained protein embeddings, and machine learning to improve predictive accuracy and scalability in early-stage drug discovery. [Skymount Medical](https://lsu.edu/research/news/2020/0605-deepdrug.php), which licensed LSU's DeepDrug™ AI platform, is its commercialization partner.

#### KG-DTA: drug-target binding affinity

KG-DTA introduces a knowledge-graph-based meta-path learning framework for predicting drug-target binding affinity. By modeling drug-drug similarity, protein-protein similarity, and drug-protein affinity within a weighted heterogeneous network, the framework captures complex biological relationships and outperforms state-of-the-art methods on the standard Davis and KIBA benchmarks.

#### DPEB: multimodal human protein embeddings

The DeepDrug Protein Embeddings Bank (DPEB) is a large-scale, multimodal human protein embeddings resource for 22,043 proteins. It integrates structural embeddings (AlphaFold2), transformer-based sequence embeddings (BioEmbeddings), contextual amino acid embeddings (ESM-2), and sequence-based n-gram statistics (ProtVec). DPEB enables graph neural network-based prediction of protein-protein interactions, enzyme classification, and protein family classification, and is publicly hosted under the AWS Open Data Sponsorship Program.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/proj_dpeb_workflow.jpg" title="DPEB workflow" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">DPEB workflow: protein sources, four embedding generators, and downstream graph analyses (figure from the DPEB paper).</div>

- Standardized protein sequences from UniProt Swiss-Prot and interactions from HPRD, HuMAP, IntAct, and STRING into a confidence-weighted graph of more than 11 million interaction pairs.
- Benchmarked GraphSAGE, GCN, GAT, GTN, and GIN for protein-protein interaction link prediction. GraphSAGE with BioEmbeddings reached **87.37% AUROC** and 79.16% accuracy.
- Released the data under CC-BY 4.0 and the code under the MIT license, with versioned storage and a citable Zenodo archive.

Together, DeepDrug supports reproducible, scalable, and data-centric AI pipelines for drug discovery, target identification, and systems biology research.

**Publications:** {% cite sajol2026dpeb ranjan2024kgdta %}
