function defaultImageonHomePage(e, t) {
    e.src = t;
    e.onerror = "";
    return true
}
function add_Product(e, t) {
    jQuery(function (n) {
        n.post("", {
            Idproduct: e
        }, function (e) {
            n("#" + t).html(e)
        })
    })
}
jQuery(function (e) {
	var rTableHead = $('.rTableRow.descplabels').find('.rTableHead');
	var rTableCell = $('.rTableRow.valueslabels').find('.rTableCell');
	/*if( rTableHead.length >= 5)
		$('.rTableRow.descplabels').find('.rTableHead:nth-child(3)').remove();
	if( rTableCell.length >= 5 )
		$('.rTableRow.valueslabels').find('.rTableCell:nth-child(3)').remove();*/
    var t = e("#bag_items_container > .shopping_bag_item").length;
	
    if (t == 0) {
        e("#my_bag_items").css("height", "100px");
        e("#bag_items_container").css("overflow", "hidden");
        e("#my_bag_price").css("display", "none");
        e("#bag_items_container").css("height", "0px");
        e(".boton_continuar_compra_bottom").css("display", "none");
        e("#bag_items_container").css("display", "none")
    } else if (t == 1) {
        e("#my_bag_items").css("height", "127px");
        e("#bag_items_container").css("overflow", "hidden");
        e("#msg_bolsa_vacia").css("display", "none")
    } else if (t == 2) {
        e("#my_bag_items").css("height", "auto");
        e("#my_bag_items").css("padding-bottom", "26px");
        e("#bag_items_container").css("overflow", "hidden");
        e("#msg_bolsa_vacia").css("display", "none")
    } else if (t == 3) {
        e("#my_bag_items").css("height", "270px");
        e("#my_bag_items").css("padding-bottom", "26px");
        e("#bag_items_container").css("height", "376px");
        e("#msg_bolsa_vacia").css("display", "none")
    } else if (t >= 4) {
        e("#my_bag_items").css("height", "270px");
        e("#my_bag_items").css("padding-bottom", "26px");
        e("#bag_items_container").css("height", "253px");
        e("#msg_bolsa_vacia").css("display", "none")
    }
    e("#my_bag_toggle a").live("click", function () {
        e("#my_bag_items").stop(true, true).slideToggle(400);
        return false
    });
    e(document).click(function () {
        e("#my_bag_items").stop(true, true).slideUp(400)
    });
    /*e("div.shopping_bag_item").on('hover',function() {
     $(this).remove();
     e("#my_bag_items div.shopping_bag_item h1").css("tex-decoration", "underline");
     e("#my_bag_items div.shopping_bag_item h1").css("color", "#2D74C5");
     }, function() {
     e("#my_bag_items div.shopping_bag_item h1").css("tex-decoration", "none");
     e("#my_bag_items div.shopping_bag_item h1").css("color", "#000");
     })*/

    //Replace syntaxis "1x" to "Cant: 1"
    $('#my_bag_items').find('.quantity_layer_bolsa').each(function (a, b) {
        var cant = $(this).text();
        var vas = cant.replace("x", "");
        $(this).text(vas);
        $(this).prepend("<span>Cantidad:</span>");
    });

    $("div.shopping_bag_item").hover(function (e) {
        $(this).find("h1").css({"text-decoration": "underline",
            "color": "#2D74C5"
        });
    }, function () {
        $(this).find("h1").css({"text-decoration": "none",
            "color": "#000"
        });
    });

});
jQuery(function (e) {
    var t = window.navigator.userAgent;
    var n = t.indexOf("MSIE ");
    var r = e("#otherBrowser").val();
    var i = e("#internetExplorer").val();
    var s = e("#retailerId").val();
    var o = e("#retailerIdPropertyValue_HP").val();
    var u = e("#retailerIdPropertyValue_CL").val();
    var a = e("#retailerIdPropertyValue_PDP").val();
    var f = e("#retailerIdPropertyValue_PLP").val();
    var l = e("#retailerIdPropertyValue_MAC").val();
    if (n > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        if (s != o && document.getElementById("hideLabel") != null) {
            document.getElementById("hideLabel").style.display = "none";
            e("#main_content").css("margin", "0px 0px 0px");
            clearTimeout(setTimeout, i)
        } else if (s != a
                && document.getElementById("pdpPagehideLabel") != null) {
            document.getElementById("pdpPagehideLabel").style.display = "none";
            clearTimeout(setTimeout, i)
        } else if (s != u
                && document.getElementById("catLandinghideLabel") != null) {
            clearTimeout(setTimeout, i)
        } else if (s != f
                && document.getElementById("catListinghideLabel") != null) {
            clearTimeout(setTimeout, i)
        } else if (s != l
                && document.getElementById("macLandinghideLabel") != null) {
            document.getElementById("macLandinghideLabel").style.display = "none";
            clearTimeout(setTimeout, i)
        }
        setTimeout(
                function () {
                    var t = e("#home-slot").find(".cs-rec").length;
                    var n = e("#catLandinghideLabel .cs-rec").length;
                    var r = e("#macLandinghideLabel .cs-rec").length;
                    var i = e("#catListinghideLabel .cs-rec").length;
                    var s = e("#pdpPagehideLabel .cs-rec").length;
                    if (document.getElementById("hideLabel") != null) {
                        if (t == 0) {
                            document.getElementById("product_carrousel").style.display = "none";
                            e("#main_content").css("margin", "0px 0px 0px")
                        }
                    } else if (document.getElementById("catLandinghideLabel") != null) {
                        if (n > 0) {
                            document.getElementById("catLandingRecommLabel").style.display = "block"
                        }
                        if (n == 0) {
                            document.getElementById("catLandinghideLabel").style.display = "none"
                        }
                    } else if (document.getElementById("macLandinghideLabel") != null) {
                        if (r > 0) {
                            document.getElementById("macLandingRecommLabel").style.display = "block"
                        }
                        if (r == 0) {
                            document.getElementById("macLandinghideLabel").style.display = "none"
                        }
                    } else if (document.getElementById("catListinghideLabel") != null) {
                        if (i == 0) {
                            if (i > 0) {
                                document
                                        .getElementById("catListingRecommLabel").style.display = "block"
                            }
                            document.getElementById("catListinghideLabel").style.display = "none"
                        }
                    } else if (document.getElementById("pdpPagehideLabel") != null) {
                        if (s > 0) {
                            document.getElementById("pdpRecommLabel").style.display = "block"
                        }
                        if (s == 0) {
                            document.getElementById("pdpPagehideLabel").style.display = "none"
                        }
                    }
                }, i)
    } else {
        if (s != o && document.getElementById("hideLabel") != null) {
            document.getElementById("hideLabel").style.display = "none";
            e("#main_content").css("margin", "0px 0px 0px");
            clearTimeout(setTimeout, r)
        } else if (s != a
                && document.getElementById("pdpPagehideLabel") != null) {
            document.getElementById("pdpPagehideLabel").style.display = "none";
            clearTimeout(setTimeout, r)
        } else if (s != u
                && document.getElementById("catLandinghideLabel") != null) {
            document.getElementById("catLandinghideLabel").style.display = "none";
            clearTimeout(setTimeout, r)
        } else if (s != f
                && document.getElementById("catListinghideLabel") != null) {
            document.getElementById("catListinghideLabel").style.display = "none";
            clearTimeout(setTimeout, r)
        } else if (s != l
                && document.getElementById("macLandinghideLabel") != null) {
            document.getElementById("macLandinghideLabel").style.display = "none";
            clearTimeout(setTimeout, r)
        }
        setTimeout(
                function () {
                    var t = e("#home-slot").find(".cs-rec").length;
                    var n = e("#catLandinghideLabel .cs-rec").length;
                    var r = e("#catListinghideLabel .cs-rec").length;
                    var i = e("#pdpPagehideLabel .cs-rec").length;
                    var s = e("#macLandinghideLabel .cs-rec").length;
                    if (document.getElementById("hideLabel") != null) {
                        if (t == 0) {
                            document.getElementById("product_carrousel").style.display = "none";
                            e("#main_content").css("margin", "0px 0px 0px")
                        }
                    } else if (document.getElementById("catLandinghideLabel") != null) {
                        if (n > 0) {
                            document.getElementById("catLandingRecommLabel").style.display = "block"
                        }
                        if (n == 0) {
                            document.getElementById("catLandinghideLabel").style.display = "none"
                        }
                    } else if (document.getElementById("macLandinghideLabel") != null) {
                        if (s > 0) {
                            document.getElementById("macLandingRecommLabel").style.display = "block"
                        }
                        if (s == 0) {
                            document.getElementById("macLandinghideLabel").style.display = "none"
                        }
                    } else if (document.getElementById("catListinghideLabel") != null) {
                        if (r > 0) {
                            document.getElementById("catListingRecommLabel").style.display = "block"
                        }
                        if (r == 0) {
                            document.getElementById("catListinghideLabel").style.display = "none"
                        }
                    } else if (document.getElementById("pdpPagehideLabel") != null) {
                        if (i > 0) {
                            document.getElementById("pdpRecommLabel").style.display = "block"
                        }
                        if (i == 0) {
                            document.getElementById("pdpPagehideLabel").style.display = "none"
                        }
                    } else if (document.getElementById("overlayconfirmation") != null) {
                        if (i > 0) {
                            document.getElementById("pdpRecommLabel").style.display = "block"
                        }
                        if (i == 0) {
                            document.getElementById("pdpPagehideLabel").style.display = "none"
                        }
                    }
                }, r)
    }
    // For Non Akamai pages this should be called...
    buildRecomm();
});


/*** recommendations-***/
buildRecomm = function () {

    if (typeof ATGSvcs !== "undefined") {

        ATGSvcs.rec_builder(
                "build_scroll_recomm",
                function (e, t) {
                    if (document.getElementById("hideLabel") != null) {
                        document.getElementById("product_carrousel").style.display = "block";
                        document.getElementById("homePage_recomm").style.display = "block";
                        $("#main_content").css("margin", "0px 0px 0px")
                    }
                    if (document.getElementById("pdpPagehideLabel") != null) {
                        document.getElementById("pdpRecommLabel").style.display = "block";
                        document.getElementById("pdpPagehideLabel").style.display = "block"
                    }
                    if (document.getElementById("catListinghideLabel") != null) {
                        document.getElementById("catListingRecommLabel").style.display = "block";
                        document.getElementById("catListinghideLabel").style.display = "block"
                    }
                    if (document.getElementById("catLandinghideLabel") != null) {
                        document.getElementById("catLandingRecommLabel").style.display = "block";
                        document.getElementById("catLandinghideLabel").style.display = "block"
                    }
                    if (document.getElementById("overlayconfirmation") != null) {
                        document.getElementById("pdpRecommLabel").style.display = "block";
                        document.getElementById("pdpPagehideLabel").style.display = "block"
                    }
                    if (document.getElementById("macLandinghideLabel") != null) {
                        document.getElementById("macLandinghideLabel").style.display = "block"
                    }
                    var n = ATGSvcs.dom, r = ATGSvcs.cfg, i = ATGSvcs.price(e,
                            t.price), s = r("-name-length", e, 0), o = s ? ATGSvcs.util
                            .trunc(t.name, s)
                            : t.name, u = r("-append-title", e, null), a = u ? n
                            .SPAN({
                                Class: "cs-append-title"
                            }, u)
                            : null, f = r("dataItems", e, null), l, c;
                    var h = document.createElement("div");
                    h.setAttribute("class", "cs-rec");
                    h.setAttribute("id", ATGSvcs.rec_id(e, t.productId));
                    h.setAttribute("itemscope", "itemscope");
                    h.setAttribute("itemtype", "http://schema.org/Product");
                    var p = document.createElement("a");
                    p.setAttribute("href", t.url);
                    p.setAttribute("className", t.productId);
                    //START:Added for defect 7608
                    p.setAttribute("onclick", "onLinkClickToPDP()");
                    //END:Added for defect 7608
                    var d = document.createElement("img");
                    d.setAttribute("class", "cs-image");
                    d.setAttribute("src", t.image);
                    d.setAttribute("alt", t.image);
                    d.setAttribute("name", t.productId);
                    d.setAttribute("onerror",
                            "onImgErrorProductoRecomendacion(this)");
                    p.appendChild(d);
                    var v = document.createElement("span");
                    v.setAttribute("class", "cs-title cs-name");
                    v.setAttribute("itemprop", "name");
                    v.appendChild(document.createTextNode(o, a));
                    var m = document.createElement("hgroup");
                    m.setAttribute("class", "grupo_precios");
                    m.setAttribute("itemscope", "itemscope");
                    m.setAttribute("itemprop", "offers");
                    m.setAttribute("itemtype",
                            "http://schema.org/AggregateOffer");
                    if (f) {
                        var g = "";
                        var y = false;
                        for (l = 0; l < f.length; ) {
                            c = t[f[l]];
                            g = f[l++];
                            var b = document.createElement("span");
                            b.setAttribute("itemprop", g);
                            b.setAttribute("class", "rod_lowPrice");
                            b.appendChild(document.createTextNode(c));
                            if (g == "lowPrice") {
                                if (c != null) {
                                    var w = c;
                                    var E = Number(w.replace("$", "").replace(
                                            ",", ""));
                                    var S = i;
                                    var x = Number(S.replace("$", "").replace(
                                            ",", ""));
                                    var T = document.createElement("h2");
                                    var N = document.createElement("span");
                                    T.setAttribute("class", "cs-" + g);
                                    N.setAttribute("class", "rod_price");
                                    N.setAttribute("itemprop", "price");
                                    N.appendChild(document.createTextNode(i));
                                    if (E != x) {
                                        var C = document.createElement("h3");
                                        C.setAttribute("class", "cs-price");
                                        C.appendChild(b);
                                        m.appendChild(C)
                                    } else
                                        N.setAttribute("class",
                                                "rod_price_normal");
                                    T.appendChild(N);
                                    m.appendChild(T)
                                } else {
                                    var T = document.createElement("h2");
                                    T.setAttribute("class", "cs-lowPrice");
                                    var k = document.createElement("span");
                                    k.setAttribute("class", "rod_price_normal");
                                    k.setAttribute("itemprop", "price");
                                    k.appendChild(document.createTextNode(i));
                                    T.appendChild(k);
                                    m.appendChild(T)
                                }
                            } else {
                                if (c != null) {
                                    var w = c;
                                    var E = Number(w.replace("$", "").replace(
                                            ",", ""));
                                    var S = i;
                                    var x = Number(S.replace("$", "").replace(
                                            ",", ""));
                                    var T = document.createElement("h2");
                                    var N = document.createElement("span");
                                    T.setAttribute("class", "cs-" + g);
                                    N.setAttribute("class", "rod_price");
                                    N.setAttribute("itemprop", "price");
                                    N.appendChild(document.createTextNode(i));
                                    if (E != x) {
                                        var C = document.createElement("h3");
                                        C.setAttribute("class", "cs-price");
                                        C.appendChild(b);
                                        m.appendChild(C)
                                    } else
                                        N.setAttribute("class",
                                                "rod_price_normal");
                                    T.appendChild(N);
                                    m.appendChild(T)
                                } else {
                                    var T = document.createElement("h2");
                                    T.setAttribute("class", "cs-lowPrice");
                                    var k = document.createElement("span");
                                    k.setAttribute("class", "rod_price_normal");
                                    k.setAttribute("itemprop", "price");
                                    k.appendChild(document.createTextNode(i));
                                    T.appendChild(k);
                                    m.appendChild(T)
                                }
                            }
                        }
                    } else {
                        var k = document.createElement("span");
                        k.setAttribute("class", "cs-lowPrice");
                        k.setAttribute("class", "rod_price_normal");
                        k.setAttribute("itemprop", "price");
                        m.appendChild(k)
                    }
                    p.appendChild(v);
                    p.appendChild(m);
                    h.appendChild(p);
                    return h
                })
    }

}
// add tiempo aire
$(document).ready(function () {
    var sectionCelular = $('#submenu-cat4450173 > .popover-content > .submenu2-foot > .lastchildt > #footver');
    sectionCelular.text('RECARGA TIEMPO AIRE');
    sectionCelular.attr('href', 'https://www.liverpool.com.mx/tienda/checkout/airtimeTicket.jsp');
    sectionCelular.attr('style', 'cursor:pointer!important;');
    
	var fh = new Date();
    var dh = fh.getDate();
    var mh = fh.getMonth();

	function hotSaleLinks(){
    	$('.own-main-visitors div:nth-child(1)').addClass('hotsale-add');
    }
	
	//fixNameSession
	try{
		var homeSessionName = window.location.href;
		urlHome = homeSessionName.slice(homeSessionName.lastIndexOf('mx/') , -1);
		if(urlHome == 'mx/tienda'){
			$('#user_login #login').addClass('fixNameHome');
		}
		else if(urlHome == 'mx/tienda/home.js'){
			$('#user_login #login').addClass('fixNameHome');
		}
	}
	catch(err){
	}
	//Banner VN
	var click = 0;
	$( "body" ).on( "vn-event", function( event) {
        bannerVN();
    });
				
		
if(window.location.href.indexOf("giftRegistry.jsp") > -1 || window.location.href.indexOf("mesaDeRegalos.jsp") > -1){
	  var height = $( window ).height();
	  if(height <= 768 ){
	  $("#footer_wrapper").css({'position':'relative'});
	 	}else{
	  $("#footer_wrapper").css({'bottom':'0','position':'absolute','width':'100%'});
	 	}
}
$( window ).resize(function() {
if(window.location.href.indexOf("giftRegistry.jsp") > -1 || window.location.href.indexOf("mesaDeRegalos.jsp") > -1){
 	var height = $(this).height();
 	console.log(height);
 	if(height <= 768 ){
  $("#footer_wrapper").css({'position':'relative'});
 	}else{
  $("#footer_wrapper").css({'bottom':'0','position':'absolute','width':'100%'});
 	}
}
});
//end footer only tienda/giftregistry/giftRegistry.jsp
	function bannerVN(){
		if (window.location.href.indexOf("home.jsp") > -1 || window.location.href==="https://www.liverpool.com.mx/tienda/?DPSLogout=true" || window.location.href==="https://www.liverpool.com.mx/tienda/") {
   			$(".message").append("<div class='bannerHot' id='bannerhotvn'></div>");
   			$(".message").append("<div class='closeBanner'><i class='icon-liv-thin-down-05'></i></div>");
			$(".closeBanner").addClass("upArrow");
			$(".backopacity").css("top","203px");
			$(".closeBanner").on("click", function(){
				if(click == 0){
					$(".bannerHot").slideUp(500);
					$(".closeBanner").removeClass("upArrow");
					$(".backopacity").css("top","123px");
					click = 1;
				}
				else{
					$(".bannerHot").slideToggle(500);
					$(".closeBanner").addClass("upArrow");
					$(".backopacity").css("top","203px");
					click = 0;
				}
			});
			$("#bannerhotvn").on("click",function(){
				if( !$("#user_login").is(":visible") ){
					location.href="https://www.liverpool.com.mx/tienda/Boletin/boletin/";
				} else{
					location.href="https://www.liverpool.com.mx/tienda/Boletin/boletin/";
				}
			});
		}
	}
	
	/*change title mac by img logo AD*/
	var text = $(".left-nav .name_category").text().toLowerCase();
	if(text === "mac"){
		$(".left-nav .name_category").before("<img src='https://assetsqa.liverpool.com.mx/assets/images/lef-nav-logo-mac-8-8-17.png' style='margin-bottom:5px; width:265px;'>")
		$(".left-nav .name_category").remove();
	}
	/* end change title mac by img logo AD*/
});

