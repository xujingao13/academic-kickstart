---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Enabling Surveillance Cameras to Navigate
subtitle: ''
summary: ''
authors:
- Liang Dong
- Jingao Xu
- Guoxuan Chi
- Danyang Li
- Xinglin Zhang
- Jianbo Li
- Qiang Ma
- Zheng Yang
tags: []
categories: []
date: '2021-01-01'
lastmod: 2021-12-22T13:37:18+08:00
featured: false
draft: false
url_pdf: "papers/tosn_imac"
doi: "https://doi.org/10.1145/3446633"

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
publishDate: '2021-12-22T05:37:18.532916Z'
publication_types:
- '2'
abstract: "Smartphone localization is essential to a wide spectrum of applications in the era of mobile computing. The ubiquity of smartphone mobile cameras and surveillance ambient cameras holds promise for offering sub-meter accuracy localization services thanks to the maturity of computer vision techniques. In general, ambient-camera-based solutions are able to localize pedestrians in video frames at fine-grained, but the tracking performance under dynamic environments remains unreliable. On the contrary, mobile-camera-based solutions are capable of continuously tracking pedestrians; however, they usually involve constructing a large volume of image database, a labor-intensive overhead for practical deployment. We observe an opportunity of integrating these two most promising approaches to overcome above limitations and revisit the problem of smartphone localization with a fresh perspective. However, fusing mobile-camera-based and ambient-camera-based systems is non-trivial due to disparity of camera in terms of perspectives, parameters and incorrespondence of localization results. In this article, we propose iMAC, an integrated mobile cameras and ambient cameras based localization system that achieves sub-meter accuracy and enhanced robustness with zero-human start-up effort. The key innovation of iMAC is a well-designed fusing frame to eliminate disparity of cameras including a construction of projection map function to automatically calibrate ambient cameras, an instant crowd fingerprints model to describe user motion patterns, and a confidence-aware matching algorithm to associate results from two sub-systems. We fully implement iMAC on commodity smartphones and validate its performance in five different scenarios. The results show that iMAC achieves a remarkable localization accuracy of 0.68 m, outperforming the state-of-the-art systems by >75%."
publication: '*ACM Transactions on Sensor Networks (TOSN)*'
---
