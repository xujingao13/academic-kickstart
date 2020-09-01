var xu2019ubicomp_ivr = 
"<pre>@INPROCEEDINGS{xu2019ubicomp_ivr,\n\
author={Jingao Xu and Hengjie Chen and Kun Qian and Erqun Dong and Min Sun and Chenshu Wu and Li Zhang and Zheng Yang},\n\
booktitle={PACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},\n\
title={iVR: Integrated Vision and Radio Localization with Zero Human Effort},\n\
pages={},\n\
month={Sep},\n\
year={2019},\n\
}</pre>"; 

var dong2019infocom_pairnavi = 
"<pre>@INPROCEEDINGS{dong2019infocom_pairnavi,\n\
author={Erqun Dong and Jingao Xu and Chenshu Wu and Yunhao Liu and Zheng Yang},\n\
booktitle={Proceedings of the IEEE INFOCOM},\n\
title={Pair-Navi: Peer-to-Peer Indoor Navigation with Mobile Visual SLAM},\n\
pages={},\n\
month={29 April-2 May},\n\
year={2019},\n\
}</pre>"

var xu2020infocom_edgeSLAM = 
"<pre>@INPROCEEDINGS{xu2020infocom_edgeSLAM,\n\
author={Jingao Xu and Hao Cao and Danyang Li and Kehong Huang and Chen Qian and Longfei Shangguan and Zheng Yang},\n\
booktitle={Proceedings of the IEEE INFOCOM},\n\
title={Edge Assisted Mobile Semantic Visual SLAM},\n\
pages={},\n\
month={27-30 April},\n\
year={2020},\n\
}</pre>"

var dong2020icccn_imac = 
"<pre>@INPROCEEDINGS{dong2020icccn_imac,\n\
author={Liang Dong and Jingao Xu and Guoxuan Chi and Danyang Li and Xinglin Zhang and Jianbo Li and Qiang Ma and Zheng Yang},\n\
booktitle={Proceedings of the IEEE ICCCN},\n\
title={Enabling Surveillance Cameras to Navigate},\n\
pages={},\n\
month={3-6 Auguest},\n\
year={2020},\n\
}</pre>"

var mass2018xu_viviplus = 
"<pre>@inproceedings{mass2018xu_viviplus,\n\
author = {Jingao Xu and Zheng Yang and Hengjie Chen and Yunhao Liu and Xianchun Zhou and Jinbo Li and Nicholas Lane},\n\
booktitle = {Proceedings of the IEEE MASS},\n\
title = {Embracing Spatial Awareness for Reliable WiFi-Based Indoor Location Systems},\n\
year = {2018},\n\
}</pre>"

var wu2017ubicomp_vivi = 
"<pre>@INPROCEEDINGS{wu2017ubicomp_vivi,\n\
author={Chenshu Wu and Jingao Xu and Zheng Yang and Nicholas D. Lane and Zuwei Yin},\n\
booktitle={PACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},\n\
title={Gain Without Pain: Accurate WiFi-based Localization with Fingerprint Spatial Gradient},\n\
pages={},\n\
month={Sep 11-15},\n\
year={2017},\n\
}</pre>"

$(function(){
    $('[data-toggle="popover"]').popover()
    initialize_bibtex()
})

function initialize_bibtex(){
    $("#xu2019ubicomp_ivr").attr("data-content", xu2019ubicomp_ivr)
    $("#dong2019infocom_pairnavi").attr("data-content", dong2019infocom_pairnavi);
    $("#mass2018xu_viviplus").attr("data-content", mass2018xu_viviplus);
    $("#wu2017ubicomp_vivi").attr("data-content", wu2017ubicomp_vivi);
    $("#xu2020infocom_edgeSLAM").attr("data-content", xu2020infocom_edgeSLAM);
    $("#dong2020icccn_imac").attr("data-content", dong2020icccn_imac);
}
