+++
# A Projects section created with the Portfolio widget.
widget = "portfolio"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 30  # Order that this section will appear.

title = "Publications"
subtitle = ""

[content]
  # Page type to display. E.g. project.
  page_type = "news"
  
  # Filter toolbar (optional).
  # Add or remove as many filters (`[[content.filter_button]]` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove toolbar, delete/comment all instances of `[[content.filter_button]]` below.
  
  # Default filter index (e.g. 0 corresponds to the first `[[filter_button]]` instance below).
  filter_default = 0

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   5 = Showcase
  view = 1

  # For Showcase view, flip alternate rows?
  flip_alt_rows = false

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.
  
  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "DeepSkyBlue"
  # gradient_end = "SkyBlue"
  
  # Background image.
  # image = "background.jpg"  # Name of image in `static/img/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

  # Text color (true=light or false=dark).
  # text_color_light = true  
  
[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
+++
<i class="fas fa-hand-point-right"></i> For a complete list, see my [CV](files/cv.pdf) or [Google Scholar Profile](https://scholar.google.com/citations?user=ZbqGJ_YAAAAJ&hl=en). Click [HERE]({{< ref "/publication/_index.md" >}}) for searching by filtering.

\* indicates co-primary author
## <i class="fa fa-file"></i> Conference
1. [<span class="booktitle">USENIX NSDI'22</span>] **Jingao Xu\***, Hao Cao*, Zheng Yang, Longfei Shangguan, Jialin Zhang, Xiaowu He, Yunhao Liu, "<a class="publication-title" target="blank" href="#">SwarmMap: Scaling Up Real-time Collaborative Visual SLAM at the Edge</a>" (forthcoming), 19th USENIX Symposium on Networked Systems Design and Implementation, Renton, USA, April 4-6, 2022.
<!-- <a class="btn btn-success btn-sm" href="#"><i class="fa fa-file-pdf-o"></i> PDF</a> -->
<!-- <button id="pdf_alert_nsdi" class="btn btn-success btn-sm" data-toggle="popover" data-container="body" data-html="true" data-placement="bottom" data-content="Please E-mail me if you want the preprint."><i class="fa fa-file-pdf-o"></i> PDF</button> -->
<button id="code_alert_nsdi" class="btn btn-secondary btn-sm" data-toggle="popover" data-container="body" data-html="true" data-placement="bottom" data-content="GitHub page is comming soon. Please E-mail me if you want the code."><i class="fa fa-code"></i> Code</button>
1. [<span class="booktitle">ACM MobiSys'21</span>] **Jingao Xu\***, Guoxuan Chi*, Zheng Yang, Danyang Li, Qian Zhang, Qiang Ma, Xin Miao, "<a class="publication-title" target="blank" href="publication/xu-2021-mobisys-followupar/">FollowUpAR: Enabling Follow-up Effects in Mobile AR Applications</a>", ACM International Conference on Mobile Systems, Applications, and Services, Virtual Online, 24 June-2 July, 2021.
<a class="btn btn-success btn-sm" href="papers/mobisys21_followupar.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<button id="slide_alert_mobisys" class="btn btn-info btn-sm" data-toggle="popover" data-container="body" data-html="true" data-placement="bottom" data-content="Please E-mail me if you want this Slide"><i class="fa fa-file-powerpoint-o"></i> Slide</button>
<!-- <a class="btn btn-info btn-sm" href="slides/FollowUpAR.pptx"><i class="fa fa-file-powerpoint-o"></i> Slide</a> -->
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/xu-2021-mobisys-followupar/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
<a class="btn btn-danger btn-sm" href="https://www.youtube.com/watch?v=UFQIosYguDI"><i class="fa fa fa-video-camera"></i> Demo</a>
<a class="btn btn-info btn-sm" href="https://youtu.be/L87En6m06s0"><i class="fa fa fa-slideshare"></i> Talk</a>
1. [<span class="booktitle">IEEE INFOCOM'21</span>] Danyang Li*, **Jingao Xu\***, Zheng Yang, Yumeng Lu, Qian Zhang, Xinglin Zhang, "<a class="publication-title" target="blank" href="publication/li-2021-infocom-itoloc/">Train Once, Locate Anytime for Anyone: Adversarial Learning Based Wireless Localization</a>", IEEE Conference on Computer Communications, Virtual Online, 10-13 May, 2021.
<a class="btn btn-success btn-sm" href="papers/infocom21_iToLoc.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<a class="btn btn-info btn-sm" href="slides/iToLoc.pdf"><i class="fa fa-file-powerpoint-o"></i> Slide</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/li-2021-infocom-itoloc/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
1. [<span class="booktitle">IEEE ICPADS'20</span>] Erqun Dong, Jianzhe Liang, Zeyu Wang, **Jingao Xu**, Longfei Shangguan, Qiang Ma, Zheng Yang, "<a class="publication-title" target="blank" href="publication/dong-2020-icpads-gmnp">Improving the Applicability of Visual Peer-to-Peer Navigation with Crowdsourcing</a>", IEEE International Conference on Parallel and Distributed Systems, Hong Kong, China (Virtual Online), 2-4 December, 2020.
<a class="btn btn-success btn-sm" href="papers/icpads20_GMNP.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<!-- <button id="dong2020icpads_gmnp" class="btn btn-sm btn-primary" data-toggle="popover" data-container="body" data-html="true" data-placement="bottom"><i class="fa fa-book"></i> Bibtex</button> -->
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/dong-2020-icpads-gmnp/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
1. [<span class="booktitle">IEEE INFOCOM'20</span>] **Jingao Xu**, Hao Cao, Danyang Li, Kehong Huang, Chen Qian, Longfei Shangguan, Zheng Yang, "<a class="publication-title" target="blank" href="publication/xu-2020-infocom-edge-slam">Edge Assisted Mobile Semantic Visual SLAM</a>", IEEE Conference on Computer Communications, Beijing, China (Virtual Online), 5-8 July, 2020.
<a class="btn btn-success btn-sm" href="papers/infocom20_edgeSLAM.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<a class="btn btn-info btn-sm" href="slides/edgeSLAM.pptx"><i class="fa fa-file-powerpoint-o"></i> Slide</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/xu-2020-infocom-edge-slam/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
1. [<span class="booktitle">IEEE ICCCN'20</span>] Liang Dong, **Jingao Xu**, Guoxuan Chi, Danyang Li, Xinglin Zhang, Jianbo Li, Qiang Ma, Zheng Yang, "<a class="publication-title" target="blank" href="publication/dong-2020-icccn-imac">Enabling Surveillance Cameras to Navigate</a>", International Conference on Computer Communications and Networks, Singapore (Virtual Online), 3-6 Auguest, 2020.
<a class="btn btn-success btn-sm" href="papers/icccn20_imac.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/dong-2020-icccn-imac/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
1. [<span class="booktitle">ACM UbiComp'19</span>] **Jingao Xu**, Hengjie Chen, Kun Qian, Erqun Dong, Min Sun, Chenshu Wu, Li Zhang, Zheng Yang, "<a class="publication-title" target="blank" href="publication/xu-2019-ubicomp-ivr">iVR: Integrated Vision and Radio Localization with Zero Human Effort</a>", PACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, London, UK, Sep 11 - Sep 13, 2019.
<a class="btn btn-success btn-sm" href="papers/ubicomp19_ivr.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<a class="btn btn-info btn-sm" href="slides/iVR.pptx"><i class="fa fa-file-powerpoint-o"></i> Slide</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/xu-2019-ubicomp-ivr/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
1. [<span class="booktitle">IEEE INFOCOM'19</span>] Erqun Dong*, **Jingao Xu\***, Chenshu Wu, Yunhao Liu, Zheng Yang, "<a class="publication-title" target="blank" href="publication/dong-2019-infocom-pairnavi">Pair-Navi: Peer-to-Peer Indoor Navigation with Mobile Visual SLAM</a>", IEEE Conference on Computer Communications, Paris, France, 29 April-2 May, 2019. (<span class="highlight">Best-in-Session Presentation Award, 1 out of 4</span>)
<a class="btn btn-success btn-sm" href="papers/infocom19_pair.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<a class="btn btn-info btn-sm" href="slides/Pair-navi.pptx"><i class="fa fa-file-powerpoint-o"></i> Slide</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/dong-2019-infocom-pairnavi/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
1. [<span class="booktitle">IEEE MASS'18</span>] **Jingao Xu**, Zheng Yang, Hengjie Chen, Yunhao Liu, Xiancun Zhou, Jianbo Li, Nicholas Lane, "<a class="publication-title" target="blank" href="publication/mass-2018-xu-viviplus">Embracing Spatial Awareness For Reliable WiFi-based Indoor Location Systems</a>", IEEE International Conference on Mobile Ad-hoc and Sensor Systems, Chengdu, China, Oct 8 - Oct 11, 2018.
<a class="btn btn-success btn-sm" href="papers/mass18_viviplus.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<a class="btn btn-info btn-sm" href="slides/ViViPlus.pptx"><i class="fa fa-file-powerpoint-o"></i> Slide</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/mass-2018-xu-viviplus/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
<a class="btn btn-danger btn-sm" href="slides/ViViPlus.pptx"><i class="fa fa fa-video-camera"></i> Demo</a>
1. [<span class="booktitle">ACM UbiComp'17</span>] Chenshu Wu, **Jingao Xu**, Zheng Yang, Nicholas D. Lane, Zuwei Yin, "<a class="publication-title" target="blank" href="publication/wu-2017-ubicomp-vivi">Gain Without Pain: Accurate WiFi-based Localization with Fingerprint Spatial Gradient</a>", PACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, vol.1, no.2, pp.29:1-29:19, 2017, Maui, USA, Sep 11 - Sep 15, 2017.
<a class="btn btn-success btn-sm" href="papers/ubicomp17_vivi.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<a class="btn btn-info btn-sm" href="slides/ViVi.pptx"><i class="fa fa-file-powerpoint-o"></i> Slide</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/wu-2017-ubicomp-vivi/cite.bib"><i class="fa fa-book"></i> Bibtex</button>


## <i class="fa fa-file-alt"></i> Journal
1. [<span class="booktitle">IEEE TMC</span>] Guoxuan Chi, **Jingao Xu**, Jialin Zhang, Qian Zhang, Qiang Ma, Zheng Yang, "<a class="publication-title" target="blank" href="publication/chi-2020-tmc-isat">Locate, Tell, and Guide: Enabling Public Cameras to Navigate the Public</a>",  IEEE Transactions on Mobile Computing, 2021.
<a class="btn btn-success btn-sm" href="papers/tmc_isat.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/chi-2020-tmc-isat/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
1. [<span class="booktitle">ACM TOSN</span>] Danyang Li, **Jingao Xu**, Zheng Yang, Chenshu Wu, Nicholas D. Lane, "<a class="publication-title" target="blank" href="publication/li-2021-wireless">Wireless Localization with Spatial-Temporal Robust Fingerprints</a>",  ACM Transactions on Sensor Networks, 2022.
<a class="btn btn-success btn-sm" href="papers/tosn_viviplus.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/li-2021-wireless/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
1. [<span class="booktitle">ACM TOSN</span>] **Jingao Xu**, Erqun Dong, Qiang Ma, Chenshu Wu, Zheng Yang, "<a class="publication-title" target="blank" href="publication/xu-2021-smartphone">Smartphone-Based Indoor Visual Navigation with Leader-Follower Mode</a>",  ACM Transactions on Sensor Networks, 2021.
<a class="btn btn-success btn-sm" href="papers/tosn_pairnavi.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/xu-2021-smartphone/cite.bib"><i class="fa fa-book"></i> Bibtex</button>
1. [<span class="booktitle">ACM TOSN</span>] Liang Dong, **Jingao Xu**, Guoxuan Chi, Danyang Li, Xinglin Zhang, Jianbo Li, Qiang Ma, Zheng Yang, "<a class="publication-title" target="blank" href="publication/dongtosn-imac">Enabling Surveillance Cameras to Navigate</a>",  ACM Transactions on Sensor Networks, 2021.
<a class="btn btn-success btn-sm" href="papers/tosn_imac.pdf"><i class="fa fa-file-pdf-o"></i> PDF</a>
<button type="button" class="btn btn-sm btn-primary my-1 mr-1 js-cite-modal" data-filename="/~jingao/publication/dongtosn-imac/cite.bib"><i class="fa fa-book"></i> Bibtex</button>