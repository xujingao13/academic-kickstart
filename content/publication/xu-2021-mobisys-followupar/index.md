---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'FollowUpAR: Enabling Follow-up Effects in Mobile AR Applications'
subtitle: ''
summary: ''
authors:
- Jingao Xu
- Guoxuan Chi
- Zheng Yang
- Danyang Li
- Qian Zhang
- Qiang Ma
- Xin Miao
tags: []
categories: []
date: '2021-06-01'
lastmod: 2021-05-24T13:10:51+08:00
featured: false
draft: false
url_pdf: "papers/mobisys21_followupar.pdf"
# url_slides: "papers/mobisys21_followupar.pdf"
doi: "https://dl.acm.org/doi/10.1145/3458864.3467675"

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
projects: ["Multimodal-Fusion"]
publishDate: '2021-05-24T05:10:51.764949Z'
publication_types:
- '1'
abstract: "Existing smartphone-based Augmented Reality (AR) systems are able to render virtual effects on static anchors. However, today's solutions lack the ability to render follow-up effects attached to moving anchors since they fail to track the 6 degrees of freedom (6-DoF) poses of them. We find an opportunity to accomplish the task by leveraging sensors capable of generating sparse point clouds on smartphones and fusing them with vision-based technologies. However, realizing this vision is non-trivial due to challenges in modeling radar error distributions and fusing heterogeneous sensor data. This study proposes FollowUpAR, a framework that integrates vision and sparse measurements to track object 6-DoF pose on smartphones. We derive a physical-level theoretical radar error distribution model based on an in-depth understanding of its hardware-level working principles and design a novel factor graph competent in fusing heterogeneous data. By doing so, FollowUpAR enables mobile devices to track anchor's pose accurately. We implement FollowUpAR on commodity smartphones and validate its performance with 800,000 frames in a total duration of 15 hours. The results show that FollowUpAR achieves a remarkable rotation tracking accuracy of 2.3° with a translation accuracy of 2.9mm, outperforming most existing tracking systems and comparable to state-of-the-art learning-based solutions. FollowUpAR can be integrated into ARCore and enable smartphones to render follow-up AR effects to moving objects. "
publication: '*Proceedings of the ACM MobiSys*'
---