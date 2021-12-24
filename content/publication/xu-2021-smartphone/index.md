---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Smartphone-Based Indoor Visual Navigation with Leader-Follower Mode
subtitle: ''
summary: ''
authors:
- Jingao Xu
- Erqun Dong
- Qiang Ma
- Chenshu Wu
- Zheng Yang
tags: []
categories: []
date: '2021-01-01'
lastmod: 2021-05-24T13:10:52+08:00
featured: false
draft: false
url_pdf: "papers/tosn_pairnavi.pdf"
doi: "https://dl.acm.org/doi/abs/10.1145/3448417"

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
projects: ["Edge", "SLAM"]
publishDate: '2021-05-24T05:10:51.994535Z'
publication_types:
- '2'
abstract: "Existing indoor navigation solutions usually require pre-deployed comprehensive location services with precise indoor maps and, more importantly, all rely on dedicatedly installed or existing infrastructure. In this article, we present Pair-Navi, an infrastructure-free indoor navigation system that circumvents all these requirements by reusing a previous traveler’s (i.e., leader) trace experience to navigate future users (i.e., followers) in a Peer-to-Peer mode. Our system leverages the advances of visual simultaneous localization and mapping (SLAM) on commercial smartphones. Visual SLAM systems, however, are vulnerable to environmental dynamics in the precision and robustness and involve intensive computation that prohibits real-time applications. To combat environmental changes, we propose to cull non-rigid contexts and keep only the static and rigid contents in use. To enable real-time navigation on mobiles, we decouple and reorganize the highly coupled SLAM modules for leaders and followers. We implement Pair-Navi on commodity smartphones and validate its performance in three diverse buildings and two standard datasets (TUM and KITTI). Our results show that Pair-Navi achieves an immediate navigation success rate of 98.6%, which maintains as 83.4% even after 2 weeks since the leaders’ traces were collected, outperforming the state-of-the-art solutions by >50%. Being truly infrastructure-free, Pair-Navi sheds lights on practical indoor navigations for mobile users."
publication: '*ACM Transactions on Sensor Networks (TOSN)*'
---
