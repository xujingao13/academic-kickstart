---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'iVR: Integrated Vision and Radio Localization with Zero Human Effort'
subtitle: ''
summary: ''
authors:
- Jingao Xu
- Hengjie Chen
- Kun Qian
- Erqun Dong
- Min Sun
- Chenshu Wu
- Li Zhang
- Zheng Yang
tags: []
categories: []
date: '2019-09-01'
lastmod: 2021-05-18T16:51:58+08:00
featured: false
draft: false
url_pdf: "papers/ubicomp19_ivr.pdf"
url_slides: "slides/iVR.pptx"
doi: "https://dl.acm.org/doi/abs/10.1145/3351272"

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
projects: ["SLAM", "Localization"]
publishDate: '2021-05-18T08:51:58.623530Z'
publication_types:
- '2'
abstract: "Smartphone localization is essential to a wide range of applications in shopping malls, museums, office buildings, and other public places. Existing solutions relying on radio fingerprints and/or inertial sensors suffer from large location errors and considerable deployment efforts. We observe an opportunity in the recent trend of increasing numbers of security surveillance cameras installed in indoor spaces to overcome these limitations and revisit the problem of smartphone localization with a fresh perspective. However, fusing vision-based and radio-based systems is non-trivial due to the absence of absolute location, incorrespondence of identification and looseness of sensor fusion. This study proposes iVR, an integrated vision and radio localization system that achieves sub-meter accuracy with indoor semantic maps automatically generated from only two surveillance cameras, superior to precedent systems that require manual map construction or plentiful captured images. iVR employs a particle filter to fuse raw estimates from multiple systems, including vision, radio, and inertial sensor systems. By doing so, iVR outputs enhanced accuracy with zero start-up costs, while overcoming the respective drawbacks of each individual sub-system. We implement iVR on commodity smartphones and validate its performance in five different scenarios. The results show that iVR achieves a remarkable localization accuracy of 0.7m, outperforming the state-of-the-art systems by >70%."
publication: '*PACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT/Ubicomp)*'
---
