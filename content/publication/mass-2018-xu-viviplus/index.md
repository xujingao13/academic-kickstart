---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Embracing Spatial Awareness for Reliable WiFi-Based Indoor Location Systems
subtitle: ''
summary: ''
authors:
- Jingao Xu
- Zheng Yang
- Hengjie Chen
- Yunhao Liu
- Xianchun Zhou
- Jinbo Li
- Nicholas Lane
tags: []
categories: []
date: '2018-10-01'
lastmod: 2021-05-19T16:43:11+08:00
featured: false
draft: false
url_pdf: "papers/mass18_viviplus.pdf"
url_slides: "slides/ViViPlus.pptx"
doi: "https://ieeexplore.ieee.org/abstract/document/8567572"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: ["Localization"]
publishDate: '2021-05-19T08:43:11.387645Z'
publication_types:
- '1'
abstract: "Indoor localization gains increasingly attentions in the era of Internet of Things. Among various technologies, WiFi-based systems that leverage Received Signal Strengths (RSSs) as location fingerprints become the mainstream solutions. However, RSS fingerprints suffer from critical drawbacks of spatial ambiguity and temporal instability that root in multipath effects and environmental dynamics, which degrade the performance of these systems and therefore impede their wide deployment in real world. Pioneering works overcome these limitations at the costs of ubiquity as they mostly resort to additional information or extra user constraints. In this paper, we present the design and implementation of ViViPlus, an indoor localization system purely based on WiFi fingerprints, which jointly mitigates spatial ambiguity and temporal instability and derives reliable performance without impairing the ubiquity. The key idea is to embrace the spatial awareness of RSS values in a novel form of RSS Spatial Gradient (RSG) matrix for enhanced WiFi fingerprints. We devise techniques for the representation, construction, and comparison of the proposed fingerprint form, and integrate them all in a practical system, which follows the classical fingerprinting framework and requires no more inputs than any previous RSS fingerprint based systems. Extensive experiments in different environments demonstrate that ViViPlus significantly improves the accuracy in both localization and tracking scenarios by about 30% to 50% compared with five state-of-the-art approaches."
publication: '*Proceedings of the IEEE MASS*'
---
