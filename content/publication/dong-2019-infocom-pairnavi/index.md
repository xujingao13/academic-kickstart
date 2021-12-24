---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'Pair-Navi: Peer-to-Peer Indoor Navigation with Mobile Visual SLAM'
subtitle: ''
summary: ''
authors:
- Erqun Dong
- Jingao Xu
- Chenshu Wu
- Yunhao Liu
- Zheng Yang
tags: []
categories: []
date: '2019-04-01'
lastmod: 2021-05-18T16:51:59+08:00
featured: false
draft: false
url_pdf: "papers/infocom19_pair"
url_slides: "slides/Pair-navi.pptx"
doi: "https://ieeexplore.ieee.org/abstract/document/8737640"

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
publishDate: '2021-05-18T08:51:58.839614Z'
publication_types:
- '1'
abstract: "Existing indoor navigation solutions usually require pre-deployed comprehensive location services with precise indoor maps and, more importantly, all rely on dedicatedly installed or existed infrastructure. In this paper, we present Pair-Navi, an infrastructure-free indoor navigation system that circumvents all these requirements by reusing a previous traveler's (i.e. leader) trace experience to navigate future users (i.e. followers) in a Peer-to-Peer (P2P) mode. Our system leverages the advances of visual SLAM on commercial smartphones. Visual SLAM systems, however, are vulnerable to environmental dynamics in the precision and robustness and involve intensive computation that prohibits real-time applications. To combat environmental changes, we propose to cull non-rigid contexts and keep only the static and rigid contents in use. To enable real-time navigation on mobiles, we decouple and reorganize the highly coupled SLAM modules for leaders and followers. We implement Pair-Navi on commodity smartphones and validate its performance in three diverse buildings. Our results show that Pair-Navi achieves an immediate navigation success rate of 98.6%, which maintains as 83.4% even after two weeks since the leaders' traces were collected, outperforming the state-of-the-art solutions by >50%. Being truly infrastructure-free, Pair-Navi sheds lights on practical indoor"
publication: '*Proceedings of the IEEE INFOCOM*'
---
