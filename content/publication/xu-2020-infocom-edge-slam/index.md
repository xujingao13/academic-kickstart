---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Edge Assisted Mobile Semantic Visual SLAM
subtitle: ''
summary: ''
authors:
- Jingao Xu
- Hao Cao
- Danyang Li
- Kehong Huang
- Chen Qian
- Longfei Shangguan
- Zheng Yang


tags: []
url_pdf: 'papers/infocom20_edgeSLAM.pdf'
url_slides: 'slides/edgeSLAM.pptx'
doi: "https://ieeexplore.ieee.org/abstract/document/9155438"

categories: []
date: '2020-04-01'
lastmod: 2021-05-18T16:48:38+08:00
featured: false
draft: false
# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: 'featured.png'
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: ["Edge", "SLAM"]
publishDate: '2021-05-18T08:51:58.197416Z'
publication_types:
- '1'
abstract: "Localization and navigation play a key role in many location-based services and have attracted numerous research efforts from both academic and industrial community. In recent years, visual SLAM has been prevailing for robots and autonomous driving cars. However, the ever-growing computation resource demanded by SLAM impedes its application to resource-constrained mobile devices. In this paper we present the design, implementation, and evaluation of edgeSLAM, an edge assisted real-time semantic visual SLAM service running on mobile devices. edgeSLAM leverages the state-of-the-art semantic segmentation algorithm to enhance localization and mapping accuracy, and speeds up the computation-intensive SLAM and semantic segmentation algorithms by computation offloading. The key innovations of edgeSLAM include an efficient computation offloading strategy, an opportunistic data sharing mechanism, and an adaptive task scheduling algorithm. We fully implement edgeSLAM on an edge server and different types of mobile devices (2 types of smartphones and a development board). Extensive experiments are conducted under 3 data sets, and the results show that edgeSLAM is able to run on mobile devices at 35fps frame rate and achieves a 5cm localization accuracy, outperforming existing solutions by more than 15%. We also demonstrate the usability of edgeSLAM through 2 case studies of pedestrian localization and robot navigation. To the best of our knowledge, edgeSLAM is the first real-time semantic visual SLAM for mobile devices."
publication: '*Proceedings of the IEEE INFOCOM*'
---
