/* march Release 4/03/2017 */
/* */
var ar_d = [];
var ar_c = [];
var ar_i = [];
var ar_nav = [];
var ci = 0;
var url = window.location.href;








$(document).ready(function($) {
	try {
		
		var pages ={
			"orderHistory":["orderHistory","lineItemStatus","orderDetails"],
			"creditCards":["creditCards","editCreditCard","newCreditCard"],
			"cieOrderHistory":["cieOrderHistory"],
			"updateProfile"	:["updateProfile"],
			"changePassword":["changePassword"],
			"addressBook":["addressBook","editAddress","newShippingAddress"],
			"viewPhones":["viewPhones","addPhone"],
			"subscription":["subscription"],
			"myEBooks":["myEBooks"]

		};
		var filename = url.substring(url.lastIndexOf("/") + 1);
		filename = filename.substring(0,filename.indexOf("."));		
		if(filename.length>30){
			filename = filename.substring(0,filename.indexOf("?"));
		}
		//new tag changes open pay
		for(var page in pages){
			var asociatePage = pages[page];
			if( asociatePage.indexOf(filename) >= 0){
				$("#my_account_asideBox ul li a").each(function(){
					var a = $(this);
					var optionMenu = a.attr("id");
					if(optionMenu === page){
						a.addClass("actual-section");
					}
				});
			}
		}
		if("myAccount" === filename){
            $("#main_wrapper").addClass("myaccount_home");
		}
		if("myEBooks"===filename){
			$("#my_account_content").addClass("myEbooks");
			$("#my_account_tree_view").addClass("myEbooksTree");
		}

	}catch(error){

	}
	// Cambios para eliminar parentesis del numero de productos de la bolsita
	try{
	// Codigo que elimina los paréntesis de la bolsita
		var cc = document.getElementById('cart-count');
		cc.innerText = cc.outerText.split('(')[1].split(')')[0];
	}catch(err){console.log(err.message);}

	// Mobile Moviendo el inicion de session al megamenu
	try{
	// Guest
	var ulList;
	var ss = document.getElementsByClassName('iniciar-session');
	var divMegaMenu;
	var li = document.createElement("li");
	if(ss.length){
		// console.log('...........El padre es : HeaderLinks_loggedin-footer');
		divMegaMenu = document.getElementsByClassName('HeaderLinks_loggedin-footer');
		ulList = divMegaMenu[0].children[0];
		var ach = ss[0];
		li.appendChild(ach);
		ulList.appendChild(li);

		divMegaMenu = document.getElementsByClassName('HeaderLinks_guest-footer');
		ulList = divMegaMenu[0].children[0];
		li.appendChild(ach);
		ulList.appendChild(li);

	}else{
		// console.log('...........El padre es : HeaderLinks_guest-footer');
		// console.log('No se encontro el elemento buscado asi que lo vamos a crear ....');
		divMegaMenu = document.getElementsByClassName('HeaderLinks_guest-footer');
		ulList = divMegaMenu[0].children[0];

		var _a = document.createElement("a");
		_a.setAttribute('href', '/tienda/m/users/login.jsp');
		_a.setAttribute('class', 'iniciar-session');
		_a.innerText = 'Iniciar sesión';
		li.appendChild(_a);
		ulList.appendChild(li);
	}

}catch(err){
	console.log(err.message);
}
	try{
		// Logged
		var ss = document.getElementById('m_logout_href_iphone_ak');
		var divMegaMenu = document.getElementsByClassName('HeaderLinks_loggedin-footer');
		var ulList = divMegaMenu[0].children[0];
		var li = document.createElement("li");
		li.appendChild(ss);
		ulList.appendChild(li);
	}catch(err){
		console.log(err.message);
	}
	// cambio para al dar click en la bolsita te lleve al checkout 0
	try{
		var bolsita = document.getElementsByClassName('mini-bags');
		bolsita[0].href = '/tienda/cart/cart.jsp';
	}catch(err){
		console.log(err.message);
	}
	// donaciones MexicoUnido
	var evento = $('#gift_registry_number_event').text();
	if ((evento.length > 0 && evento == "#42888701") || (evento.length > 0 && evento == "#42892742")) {
		$('.gift_registry_detail_event_module_content').eq(1).hide();
		$('.gift_registry_detail_event_module_content').eq(2).hide();
		$('.gift_registry_detail_event_module_content').eq(3).hide();
		$('.gift_registry_detail_event_module_content').eq(4).hide();
		$('.gift_registry_detail_event_module_content > p').eq(0).hide();
		$('.gift_registry_detail_event_module_content > h1').eq(0).text('Donaciones por México');
		$('.gift_registry_detail_event_module_content > h1').eq(0).append('<p style="color: #000!important; font-size: 15px!important; margin-bottom: 0px; font-weight: normal!important; margin-top: 10px">Ante el desastre ocurrido por los sismos del 19 de septiembre en la, Ciudad de México, Estado de México, Morelos y Puebla.</p>');
		$('.gift_registry_detail_event_module_content > h1').eq(0).append('<p style="color: #000!important; font-size: 15px!important; margin-bottom: 0px; font-weight: normal!important;">En Liverpool necesitamos de tu ayuda para apoyar a las personas afectadas.</p>');
		$('.gift_registry_detail_event_module_content > h1').eq(0).append('<p style="color: #000!important; font-size: 15px!important; margin-bottom: 0px; font-weight: normal!important;">Te invitamos ser solidario con aquellos que cuentan con nosotros y a donar comprando un certificado electrónico.</p>');
		$('.add_to_cart_button').attr("value", "Aportar");
	} else {
		console.log("evento equivocado");
		$('.gift_registry_detail_event_module_content').each(function(a, b) {
			$(this).addClass('last_step_' + a);
		});
	}
	//sorteos link's
	var timeFunctionSorteos = function() {
		$('#user_top').find('#location').before('<li id="sorteos" style="padding: 0;"><a target="_self" href="https://sorteos.liverpool.com.mx">Sorteos</a></li>');
		$('#user_top').find('#location').before('<li id="revista" style="padding: 0px 0px 0px 5px;"><a target="_self" href="http://revista-blog.liverpool.com.mx">Blog</a></li>');
	}
	timeFunctionSorteos();

		//Close the details popup on click outside
	$(document).mouseup(function(e) {
		var container = $(".toolTipCredit");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.hide();
		}
	});
	//show tooltip
		$('.detailsCheckBoxKeep').on('click', function(){
				$('.toolTipCredit').css('display','block');
		});
/*		$('.closeTooltip').on('click', function(){
			 $('.toolTipCredit').css('display','none');
	 });*/
		/*Start: Bugzilla Defect#15732 */
			$('.closeAutoLogin').on('click', function(){
					$('.toolTipCredit').css('display','none');
			});
		/*End: Bugzilla Defect#15732 */

	//R2 2017 Release
	 $(".cardBlock a.grayButton").on("click", function () {
					var cardItemId = $(this).attr("creditCardId");
					$('#cardItemIdForRemoveCard').val(cardItemId);
			})

			$(".cardBlock a.grayDarkButton").on("click", function () {
					var cardItemId = $(this).attr("creditCardId");
					$('#cardItemIdForBlockCard').val(cardItemId);
			})


	//Hide Show 'Estado de Cuenta - Facturación'
	var timeFunction = function(){
		var date = new Date();

		var actualMonth = date.getMonth() + 1;
		var actualDay = (date.getDate()<10?'0':'') + date.getDate();
		var actualHour = (date.getHours()<10?'0':'') + date.getHours();
		var actualMinute = (date.getMinutes()<10?'0':'') + date.getMinutes();

		//ELEMENTOS A OCULTAR
		//Facturación Footer
		var facturacionElem = $('#master_footer #list_links_footer ul#fac_e > li:nth-child(2)');
		//Facturación en Mi Cuenta menu
		var facturacionElem2 = $('#my_account_tree_view_options li:nth-child(7)');

		//Estado de Cuenta Elementos
		var estadoElem = $('#menu.nav .creditmenu .edocuent');
		var estadoButton = $('.accountDetail .contentDetail .btnCuenta');
		var estadoLeftMenu = $('#leftCreditMenuCard ul li:nth-child(2)');

		try{
			// hide edo
			if( ( (actualDay == 15) || (actualDay == 16) ) && (actualMonth == 12) ) {
				estadoElem.hide();
				estadoButton.hide();
				estadoLeftMenu.hide();
			}
			else if (  (actualDay == 17) && (actualHour <= 2) && (actualMonth == 12)  ){
				estadoElem.hide();
				estadoButton.hide();
				estadoLeftMenu.hide();
			}
		}
		catch(err){

		}
		/*else if (  (actualDay == 22) && (actualHour <=3) )  {
			estadoElem.hide();
			estadoButton.hide();
			estadoLeftMenu.hide();
		}*/
	}

	timeFunction();

	//Fix for Duplicated Stores
	setTimeout(function () {
		 var str = ["Liverpool Cd. Jardín.","Liverpool Coacalco.", "Liverpool Ecatepec Plaza Las Américas.", "Liverpool Galerías Atizapán.", "Liverpool Galerías Perinorte.", "Liverpool Paseo Interlomas.", "Liverpool Satélite.", "Liverpool Tlalnepantla."];
	for(var i=0; i<=str.length;i++){
			$('#lstAlmacenes option:contains('+str[i]+')').each(function(){
			 $(this).hide();
			});
	}
	}, 1000);

		//Help Step2
		setTimeout(function () {
				$('#billingFormIdlp > div > span > a.help-ck, #billingFormIdAnonymous > div > span > label.helper.short-label > a').attr('href', 'https://assets.liverpool.com.mx/ayuda/#/sec/credito/nip-cvv');
		}, 1000);

		setTimeout(function () {


				//IF conditional IPAD --select store option IPAD

				if (navigator.userAgent.match(/(iPad)/)) {



						function selecttienda() {

								setTimeout(function () {

										$('#lstAlmacenes').append($('<option>', {
												value: 0,
												selected: 'selected',
												text: 'Selecciona una tienda...'
										}));

				}, 400);
			};



						$('#cboAlmacen').on('change', function (e) {
								selecttienda();
								e.preventDefault();
						});
				}
				//end IF conditional IPAD

		}, 1000);

		//specific fix to remove extra buttons generated by flixmedia
		setTimeout(function () {
				if ($("#flix_hotspots").length >= 1) {
						$(this).remove();
				}
		}, 1000);
		//estado de cuenta
		$("#submenu-transp > li a:contains('Contrato liverpool DILISA')").html("Contrato Liverpool Departamental");
		$("#submenu-transp > li a:contains('Contrato liverpool LPC')").html("Contrato Liverpool Visa");
		/* Lo nuevo megamenu*/
		//$("#master_menu #menu .servicios a").text("Lo nuevo").attr("href", "/tienda/cat5430035");
		//asterisco y precio promo en lugar de ver promos
		/*$(".cta-buttons .go-promotions").html("<p class='presdis'>* Precio con descuento aplicado</p>");
		 $(".price-state.price-special .price-amount").after("<span style='color:red;font-size:10px;position:absolute;margin-top:1px;'>*</span>");*/
		//Tab extra entregas
		//Ver Detalle Boton add go-detail class because was overriden in the october release
		$(".cta-buttons .add-bag").each(function () {
				var txvrdet = $(this).text().toLowerCase();
				if (txvrdet.indexOf("ver detalle") >= 0) {
						$(this).attr("class", "go-detail");
				}
		});

		//delete long description PIM PDP
		if ($("#compare-features .table-features > div").size() > 1) {
				$("body .descripcion_heredada").css("display", "none");
		}
		//Delete flix media from compare view
		setTimeout(function () {
				if ($(".comparacion-view").length > 0) {
						$("body").find("#flix-minisite").remove();
						$("body").find("#flix-inpage").remove();
				}
		}, 1000);

		//telcel
		//Crdito, solicitar tarjeta, cambio de cards

		//Credit landing page, Ley de Transparencia
		var urles = window.location.href;
		if (urles.match(/credit/)) {
				$("#credit_info").after('<div id="ley_credit"><h1>Ley de Transparencia</h1><span>Inf\u00f3rmate acerca de la Ley de Transparencia.</span><ul id="contracts"><li class="contract_dilisa"><a onclick="javascript:window.open("https://assets.liverpool.com.mx/web/lib/contratoDILISA.pdf","CreditAgreement","width=800,height=600"); return false;" title="Credit Agreement" href="https://assets.liverpool.com.mx/web/lib/contratoDILISA.pdf">Contrato Liverpool Departamental <i class=" icon-liv-right-06"></i> </a></li><li class="contract_visa"><a onclick="javascript:window.open("https://assets.liverpool.com.mx/web/lib/contratoLPC.pdf","CreditAgreement","width=800,height=600"); return false;" title="Credit Agreement" href="https://assets.liverpool.com.mx/web/lib/contratoLPC.pdf">Contrato Liverpool Visa<i class="two icon-liv-right-06"></i></a></li></ul></div>');
		}

		// breadcrumb change slash by triangule
		$("#breadcrumbs ul li .icon-icon-liv-slash-06").remove();

		//REMOVE LAST ICON
		if ($('#breadcrumbs ul li:last-of-type').is(':empty')) {
				$('#breadcrumbs ul li:last-of-type').remove();
		}

		// solving bug 11231 (icon should be on li, not to "a" element) & 11578 (first category show correctly)
		// OLD $("#breadcrumbs ul li:not(:last-of-type),#breadcrumb_paginaciontop ul li:not(:last-of-type),#breadcrum ul li:not(:last-of-type)").append("<i class='icon-liv-go-14'></i>");
		$('#breadcrumbs ul li:not(:last-of-type)').append("<i class='icon-liv-go-14'></i>")
		$("#breadcrumbs ul li a").css("padding-left", "0px");
		// remove both spans contents
		$('#ancestorLbl, #breadCrumbLbl').attr("style", "display: none !important");
		$('#breadcrumbs li[style*="display: block"]').attr("style", "display: none !important");
		// OLD $('#breadcrumbs ul li span#ancestorLbl, #breadcrumb_paginaciontop ul li span#ancestorLbl, #breadcrum ul li span#ancestorLbl').parent('li').attr("style", "display: none !important");

		//remover ley de transparencia y bloquear tarjeta Credito menu header

		/*$('.creditmenu').mouseover(function(){
		 setTimeout(function(){
		 $("#menu > li.active.creditmenu.open > ul > li").filter("[data-submenu-id='submenu-transp']").remove();
		 },50)
		 setTimeout(function(){
		 $("#menu > li.active.creditmenu.open > ul > li:nth-child(4)").remove();
		 },90);
		 });*/


		var txtCard = $(".tipo-tarjeta-content .section-title").text();
		var txtCard2 = $.trim(txtCard);
		txtCard2.indexOf("Livert")
		setTimeout(function () {
				if (txtCard2.indexOf('cate') > 1) {
						$(".section-title img").attr("src", contextPathAbs + "/assets/images/iconos/tarjetas_credito7.png");
				}
				if (txtCard2.indexOf('Francia') > 1) {
						$(".section-title img").attr("src", contextPathAbs + "/assets/images/iconos/tarjetas_credito5.png");
				}
				if (txtCard2 == "Liverpool Departamental") {
						$(".section-title img").attr("src", contextPathAbs + "/assets/images/iconos/tarjetas_credito6.png");
				}
				if (txtCard2.indexOf("vert") > 1) {
						$(".section-title img").attr("src", contextPathAbs + "/assets/images/iconos/tarjetas_credito4.png");
				}
				if (txtCard2 == "Liverpool Premium Card Visa") {
						$(".section-title img").attr("src", contextPathAbs + "/assets/images/iconos/tarjetas_credito2.png");
				}
				$(".tipo-tarjeta-content .section-title img").css("display", "inline-block");
		}, 200);

		//código para el fix relacionado al contexto assets.liverpool.com.mx
		//código para el fix relacionado al contexto assets.liverpool.com.mx
		$("img").each(function () {
				imgsrc = this.src;

				if (imgsrc.indexOf("https://www.liverpool.com.mx") != -1) {
						if (imgsrc.indexOf("https://www.liverpool.com.mx/tienda/kaptcha.jpg") != -1) {

						} else {
								var res = imgsrc.replace("https://www.liverpool.com.mx", "https://assets.liverpool.com.mx");
								this.src = res;
						}
				}
		});
		$("a").each(function () {
				href = this.href;

				if (href.indexOf("https://www.liverpool.com.mx") != -1 && href.indexOf(".html") != -1) {
						var res = href.replace("https://www.liverpool.com.mx", "https://assets.liverpool.com.mx");
						this.href = res;
				}

				if (href.indexOf("https://www.liverpool.com.mx") != -1 && href.indexOf(".html") != -1) {
						var res = href.replace("https://www.liverpool.com.mx", "https://assets.liverpool.com.mx");
						this.href = res;
				}

				if (href.indexOf("https://wpp.liverpool.com.mx") != -1) {
						var res = href.replace("https://wpp.liverpool.com.mx", "https://www.liverpool.com.mx");
						this.href = res;
				}

				if (href.indexOf("https://wpp.liverpool.com.mx") != -1) {
						var res = href.replace("https://wpp.liverpool.com.mx", "https://www.liverpool.com.mx");

						this.href = res;
				}

		});
		//END código para el fix relacionado al contexto assets.liverpool.com.mx
		//hp2.0


		//Remove Regalar Button from Mis Descargas My Account
		var regarito = $(".add_to_cart_button").attr("value");
		if (regarito == "Regalar") {
				$(".add_to_cart_button").hide();
		}
		//Add legend to my account Actualizar Datos Personales
		if ($("#my_account_section_title").text() == "Actualizar Datos Personales") {
				$("#my_account_content .required_fields").after("<p class='legendi'>Los emails de confirmaci\u00f3n ser\u00e1n enviados a este correo</p>");
		}
		//remove Home breadcrumb in home
		$("a > font:contains('Home')").remove();

		//se elimin� Mis descargas de My Account
		$("#my_account_tree_view_options #myEBooks").parent().css("display", "none");

		//START PA : SiteRedesign Store Pickup
		//Ajuste Pick&Click 1.0
		/*
		$("li#bag a#bag").live('click', function () {
				$('#bag .dropdown-menu').toggleClass("highlight");
		});
		$("#user_login").live('hover', function () {
				$('#bag .dropdown-menu').removeClass("highlight");
		});
		*/
		$(".radio_form_express").not("#pick-up-storin").on('change', function () {
				$(".stores-available").fadeOut("fast");
				$("#editAddress").fadeIn("fast");
				$(".radio_form_express").prop("checked", false);
				$(this).prop("checked", true);
		});
		$("#pick-up-storin").on('change', function () {
				if ($('#selected-shipToNew-Id').exists()) {
						$("#selected-shipToNew-Id").val(false);
				}
				$("#selected-shipToStore-Id").val(true);
				$(".stores-available").fadeIn("fast");
				$("#editAddress").fadeOut("fast");
				$(".ship-new-address").hide("slow");
		});

		$("#send-addr-picl").on('change', function () {
				$("#selected-shipToNew-Id").val(true);
				$("#selected-shipToStore-Id").val(false);
				$(".stores-available").fadeOut("fast");
				$(".ship-new-address").fadeIn("slow");
		});

		// commented for March Release IRIS defect 928
		/*  if ($('.bandera-producto-modulo.libro-importacion').length > 0) {
		 $('.bandera-producto-modulo.libro-importacion').after('<span class="flag"><i class="icon-liv-cdl"></i> Libro de Importaci�n</span>');
		 $('.bandera-producto-modulo.libro-importacion').remove();
		 }*/

		// fix for cases when last element of the breadcrumb is not pink
		var nli = 0;
		$("#breadcrum li").each(function () {
				if ($(this).is("li")) {
						nli++;
				}
		});
		$("#breadcrum li a").eq(nli - 1).addClass("fixbread");
		$("#breadcrum li a .icon-liv-go-14").eq(nli - 1).remove();

		//Facets toggle arrow icon up or down
		$('.fac-title.fac-title-menos i').removeClass("icon-liv-down-02").addClass("icon-liv-up-01");
		$('.fac-title.fac-title-menos').click(function () {
				$("i", this).toggleClass("icon-liv-up-01 icon-liv-down-02");
		});
		/* Submenu Seguros*/
		$("#master_menu .servicios > a").after("<ul class='dropdown-menu' role='menu'><li class='edocuent'><a href='https://ventaliverpool.autoevalua.com/'>Seguros de auto</a></li><li class='creditstatus'><a href='https://assets.liverpool.com.mx/pif/'>M&#xE1;s informaci&#xF3;n de Seguros</a></li><li class='edocuentla'><a href='http://assets.liverpool.com.mx/proteccioncelular/'>Protecci&oacute;n Celular</a></li></ul>");
		$("#master_menu .servicios > a").append("<i class='icon-liv-thin-down-05'></i>");
		$("#master_menu .servicios > a").addClass("dropdown-toggle").attr("data-toggle", "dropdown");




		$("#user_login a#login i").attr('class', 'icon-liv-thin-down-05');
		//Legend for click&pick step 1
		$(".select-storin").append("<p class='clickpicklegend'>* El tiempo estimado de entrega es de 3 a 9 dias</p>");

		//ajuste chafa login lightbox paso 0
		if (url.match(/cart.jsp/)) {
				$("#home .fancybox-outer .fancybox-inner.fancybox-loginpopup").css("height", "560px");
		}
		if (url.match(/productComparision.jsp/)) {
				setTimeout(function () {
						$("#content #contentFrame").css("display", "none");
				}, 500);
		}
		//ajuste provisional viajes
		if (url.match(/cat5280345/)) { /*cat5280345*/
				$(".cat-dynamic h4:nth-child(3)").prepend("<div class='plecamedia'></div>");
				$(".cat-dynamic li").css("margin-bottom", ".4em").css("height", "180px");
				$(".cat-dynamic li a img").css("width", "250px").css("height", "175px");
		}




		// Delete AZ sorting from PLP | Endeca Oct Release
		//$("#controls-top .sort.control-item label:nth-child(2) select option:nth-child(4)").remove();
		//$("#controls-top .sort.control-item label:nth-child(2) select option:last-child").remove();
		// cdigo provisional para PIM PDP dos columnas
		var orderli = $(".descripcion_larga .descripcion_heredada h3 > #detalle_producto_bullets");
		var liol = orderli.children("li").size();
		if (liol > 10) {
				orderli.addClass("twocolumnspdp");
		} else if (orderli.hasClass("twocolumnspdp")) {
				orderli.removeClass("twocolumnspdp");
		}

		//ajuste ubica tu tienda footer
		$("#footer_my_account a:last-child ul li").css("font-size", "13px").css("background", "none").css("margin-left", "-8px");

		//ajuste para qu es esto' del checkout paso 2
		$(".step2 .help-ck").attr("title", "Son los tres números atrás de tu tarjeta");

		//message my account about the usage of the email || Este código se ha inválidado y se debe borrar en un futuro
		/*setTimeout(function(){
		 var titelin = $("#my_account_content .my_account_module_content .my_account_module_content_title").text();
		 if(titelin == "Datos Personales"){
		 $("#my_account_content .my_account_module_content .my_account_module_content_title").after("<p class='caveat'>Los emails de confirmaci\u00f3n ser\u00e1n enviados a este correo</p>");
		 }else{
		 $("#my_account_content .my_account_module_content .required_fields").after("<p class='caveat'>Los emails de confirmaci\u00f3n ser\u00e1n enviados a este correo</p>");
		 }
		 },350);*/

		/***ocultar cosas para ventas nocturnas/especiales**/


		function hideStuffVN() {

		//hideEInvoicing();
		//hideStatementOfAccount();
	};

		function hideEInvoicing() {
				$('#fac_e > li a[href*="/tienda/users/invoiceWelcomePage.jsp"]').remove();
				$('#my_account_tree_view_options li a[href*="./invoiceWelcomePage.jsp?showSubMenuFact=true"]').remove();
				$('#fac_e > li:nth-child(2),#my_account_tree_view_options > li:nth-child(7)').remove();
				$('.prod-details-bottom .gift-message').remove();
		}

		function hideStatementOfAccount() {
				if (url.match(/credit/)) {
						if ($(".credit_options li:nth-child(4) a").text() == "Estado de cuenta") {
								$(".credit_options li:nth-child(4)").remove()
						}
				}
				$('#menu > li.creditmenu > ul > li.edocuent').remove();
				$('#menu > li.creditmenu > ul > li:nth-child(3)').hide();
				$('#menu > li.creditmenu > ul > li:nth-child(3)').hide();
				$('#menu > li.creditmenu > ul > li:nth-child(3)').hide();
		}


		hideStuffVN();



		//avoid multiple calls for invoice and checkout step 3 terminar compra
		/*$(".step3  input.button-label").on("click", function() {
		 $(".step3  input.button-label").attr("disabled", "disabled");
		 });
		 $(".registration_page #my_account_content .accept_button, .registration_page #my_account_content .continue_button").on("click", function() {
		 $(".registration_page #my_account_content .accept_button").attr("disabled", "disabled");
		 $(".registration_page #my_account_content .continue_button").attr("disabled", "disabled");
		 });*/

		/*var aprilFools = {
		 year: 2016,
		 month: 5,
		 date: 2 || 3
		 }

		 function isItAprilFoolDay() {
		 var now = new Date();
		 return (now.getYear() == aprilFools.year && now.getMonth() == aprilFools.month && now.getDate() == aprilFools.date);
		 }

		 if(isItAprilFoolDay()){
		 alert('ola k ase');
		 } else {
		 // there is less fake stuff today
		 }*/

		/*var now=new Date(),
		 dd = now.getDate(),
		 mm= now.getMonth(),
		 yyyy=now.getYear()



		 if (dd==2 && mm==5 && yyyy==2016) {

		 hideStuffVN();



		 } else if (dd==3 && mm==5 && yyyy==2016) {

		 hideStuffVN();

		 }   else {}*/


		/***ocultar cosas para ventas nocturnas/especiales**/


		//mesa de regalos ajuste
		if (url.match(/giftregistry/)) {
				setTimeout(function () {
						$(".chmodan_me0 .search_button, .chmodan_me1 .search_button").fadeOut(50);
						$("#eventSearch .search_button").fadeOut(50);
						$("#help_secondary").empty();
						$("#help_secondary").append("<ul><li style='width: 158px;'><a href='https://assets.liverpool.com.mx/ayuda/#/sec/mesa-de-regalos/bodas' target='_blank'>Ayuda de Mesa de Regalos</a><i class='icon-liv-ayuda'></i></li></ul>");
				}, 70)

				$(".gift_registry_module_content #gift_registry_day").parent().remove()
				$("h1.chan_me0").append("<p class='required'>* Campos obligatorios</p>")
				$("#eventSearch .gift_registry_module_content:nth-child(5) > h1").append("<p class='required'>* Campos obligatorios</p>")

				$("#gift_registry_input_name").prev("label").prepend("<span class='required'>*</span>")
				$("#gift_registry_input_father_name").prev("label").prepend("<span class='required'>*</span>")
				$("#gift_registry_input_event_number").prev("label").prepend("<span class='required'>*</span>")

				/*****************************************
				 NUEVO CÓDIGO PARA VALIDAR FORMULARIO MESA DE REGALOS
				 ******************************************/

				 //DESACTIVAR BOTONES
				$('#eventSearch').on('submit', function(){
				 var giftRegistrySubmitButton = $('#eventSearch input[type="submit"].search_button');
				 giftRegistrySubmitButton.hide();
			 })

			 $('#eventNumberSearch').on('submit', function(){
				 var giftRegistrySubmitButton2 = $('#eventNumberSearch input[type="submit"].search_button');
				 giftRegistrySubmitButton2.hide();
			 })

				//QUITAR DOBLE ESPACIO INPUT
				$('#gift_registry_input_name , #gift_registry_input_father_name').on('keypress keyup', function(){
					$(this).val(   $(this).val().replace(/\s\s+/g, ' ') );
				})

			 //DESACTIVAR ENTER PRIMER CAMPO
			 $('#eventSearch').on('keyup keypress', function(e) {
					 var keyCode = e.keyCode || e.which;
					 if (keyCode === 13) {
						 e.preventDefault();
						 return false;
					 }
			 });

			 //DESACTIVAR ENTER SEGUNDO CAMPO
			 $('#eventNumberSearch').on('keyup keypress', function(e) {
					 var keyCode = e.keyCode || e.which;
					 if (keyCode === 13) {
						 e.preventDefault();
						 return false;
					 }
			 });

				//VARIABLES
				var inpit1 = $('#eventSearch #gift_registry_input_name');
				var inpit2 = $('#eventSearch #gift_registry_input_father_name');
				var inpit3 = $('#eventNumberSearch #gift_registry_input_event_number');
				var requiredInputs = $('.regaloInputSearch');
				var searchButton = $('#eventSearch #mes_name_search_button');
				var searchButtonNo = $('#mes_eventNumber_search_button');

		//VALIDAR MIN-LENGTH
		var validateInput = function() {
try{
			if (inpit1.val().length > 2 && inpit2.val().length > 2) {
				searchButton.fadeIn();
			} else if (inpit1.val().length <= 2 || inpit2.val().length <= 2) {
				searchButton.fadeOut();
			}
}catch(e){
							console.log("no se encontraron los objetos del formulario de mesa.");
			}
		}

				//DETECTAR CAMBIOS
				requiredInputs.each(function () {
						$(this).on('change keyup paste', validateInput);
				})

				//FUNCIONES DE INICIO
				validateInput();
				$('#eventSearch').validate({
						rules: {
								'/com/liverpool/giftregistry/formhandler/GiftRegistryFormHandler.name': {
										required: true
								},
								'/com/liverpool/giftregistry/formhandler/GiftRegistryFormHandler.apellidoPaterno': {
										required: true
								}
						},
						messages: {
								'/com/liverpool/giftregistry/formhandler/GiftRegistryFormHandler.name': '',
								'/com/liverpool/giftregistry/formhandler/GiftRegistryFormHandler.apellidoPaterno': ''
						}
				});

				$('#eventNumberSearch').validate({
						rules: {
								'/com/liverpool/giftregistry/formhandler/GiftRegistryFormHandler.eventNo': {
										required: true,
										minlength: 4
								}
						},
						messages: {
								'/com/liverpool/giftregistry/formhandler/GiftRegistryFormHandler.eventNo': ''
						}
				});

				//ACOMODAR ESTRUCTURA HTML
				$('#gift_registry_left_content form#eventSearch, #gift_registry_left_content form#eventNumberSearch').wrapAll('<div id="leftForms">')

				//DETECTAR CAMBIOS EN EL SEGUNDO FORMULARIO
				//DETECTAR CAMBIOS EN EL SEGUNDO FORMULARIO
				try{
				inpit3.on('change keyup paste', function() {
					$(this).val($(this).val().replace(/[^\d]+/g, ''));
						if ($(this).val().length > 2) {
						searchButtonNo.fadeIn();
					} else {
						searchButtonNo.fadeOut();
					}
				});
				}catch(e){console.log("error 1");}



				/******* CÓDIGO ANTERIOR PARA VALIDAR MESA DE REGALOS ************
				 $(".gift_registry_module_content input").on('keyup', function() {
				 var inpit1 = $("#gift_registry_input_name").val();
				 var inpit2 = $("#gift_registry_input_father_name").val();
				 var inpit3 = $("#gift_registry_input_event_number").val();
				 if (inpit1 !== "" && inpit2 !== "") {
				 $(".chmodan_me0 .search_button").fadeIn("fast");
				 $("#eventSearch .gift_registry_module_content:nth-child(5) .search_button").fadeIn("fast");
				 } else {
				 $(".chmodan_me0 .search_button").fadeOut("fast");
				 $("#eventSearch .gift_registry_module_content:nth-child(5) .search_button").fadeOut("fast");
				 }
				 if (inpit3 !== "") {
				 $(".chmodan_me1 .search_button").fadeIn("fast");
				 $("#eventSearch .gift_registry_module_content:nth-child(6) .search_button").fadeIn("fast");
				 } else {
				 $(".chmodan_me1 .search_button").fadeOut("fast");
				 $("#eventSearch .gift_registry_module_content:nth-child(6) .search_button").fadeOut("fast");
				 }

				 });*******************/
		}
		//css fix for weird bug
		if (url.match(/creditCardBalancePage.jsp/)) {
				$("#product_carrousel").css("margin-left", "-120px");
		}

		/*START : STIBO Code */
		//PDP video button and display
		// fix bug etalage video muestra la imagen de play en el preview del producto
		$(document).on("hover", "#etalagevideo", function () {
				if ($('.demoupUI-playimage').find('img').length !== 0) {
						$(".demoupUI-playimage > img").remove();
				}
				if ($('.demoupUI-playimage').find('span').length == 0) {
						$(".demoupUI-playimage").append("<span class='play_etalage'></span>");
				}
		});
		$(document).on("click", "#etalagevideo", function () {
				$("#pdpvideoetalage").fadeIn("slow");
				$(".etalage_thumb.etalage_thumb_active").hide();
		})
		//PDP video button and display
		$(document).on("click", "#etalagevideoplay", function () {
				$("#pdpvideoetalage").fadeIn("slow");
				$(".etalage_thumb.etalage_thumb_active").hide();
		})
		$("body").not("#etalagevideoplay, #etalagevideo").on('click', function () {
				$("#pdpvideoetalage").fadeOut("slow");
				$(".etalage_thumb.etalage_thumb_active").show();
		})
		$(document).on("click", ".etalage_small_thumbs li", function () {
				var vidin = document.getElementById('videoselfhost');
				if (vidin != undefined) {
						vidin.pause();
				}

				//document.getElementById('videoselfhost').pause();
				// if($("#videoselfhost").is(":visible")){
				// vidin.pause();
				// }
				$("#pdpvideoetalage").hide();
				$(".etalage_thumb.etalage_thumb_active").fadeIn("slow");
		});
		/*END : STIBO Code */
		if (url.match(/cat3410054/)) {
				$('.nav_portada li').each(function () {
						ar_nav.push($(this).html());
				})
				$.each(ar_nav, function (index, val) {
						if (ci < 6) {
								ar_d.push(val);
						}
						if (ci > 5 && ci < 12) {
								ar_c.push(val);
						}
						if (ci > 11) {
								ar_i.push(val);
						}
						ci++;
				})
				$('.nav_portada').remove();
				$('.menu_portada').append('<h5>DAMAS</h5><ul class="nav_portada" id="nav-damas"></ul><h5>CABALLEROS</h5><ul class="nav_portada" id="nav-caballeros"></ul><h5>INFANTILES</h5><ul class="nav_portada" id="nav-infantiles"></ul>')
				$.each(ar_d, function (index, val) {
						$('#nav-damas').append('<li>' + val + '</li>');
				})
				$.each(ar_c, function (index, val) {
						$('#nav-caballeros').append('<li>' + val + '</li>');
				})
				$.each(ar_i, function (index, val) {
						$('#nav-infantiles').append('<li>' + val + '</li>');
				})
		}
		// Delete mi account and credit Direcciones de Entrega

		/* table for compare features in PDP */
		/*  function comparefeat(){
		 var arrfeat = [], chk = 0, lenghtrowsdad=0;
		 var disc = $(".table-features .rowrengs").size();
		 var lenghtrowsdad = disc-(disc -1);
		 $(".table-features .rowrengs").each(function(){
		 $(this).children("div").not(".columna-feat").each(function(key){
		 arrfeat[key] = $(this).text();
		 });
		 for(var i=0;i<=lenghtrowsdad;i++){
		 if(arrfeat[0] == arrfeat[i+1]){
		 ++chk;
		 }
		 }
		 if (chk == lenghtrowsdad+1){ console.log("ch: "+chk+", len: "+lenghtrowsdad+1);
		 $(".table-features .rowrengs").not(".columna-feat").css("background","#e9c2dc");
		 $(this).children("div").not(".columna-feat").css("background","#fff");
		 }
		 chk = 0;
		 }); console.log("es: "+arrfeat);
		 }
		 $('#cmn-toggle-1').click(function() {
		 if ($('#cmn-toggle-1').attr('checked')) {
		 $(".switch span").text("ESCONDER DIFERENCIAS");
		 comparefeat();
		 } else {
		 $(".switch span").text("MOSTRAR DIFERENCIAS");
		 $(".table-features .rowrengs div").each(function(){
		 $(this).not(".columna-feat").not(".columna-feat").css("background","#fff");
		 });
		 }
		 })*/



		/**
		 *  Bugzilla defect #8283 Start
		 */

		$('#cmn-toggle-1').click(function () {
				if ($('#cmn-toggle-1').attr('checked')) {
						$("#compare-features .switch span").text($('#esconder_text').val());
						var colLen = $('.table-features .rowrengs').eq(0).children().length;
						$('.table-features .rowrengs').each(function (input) {
								for (var i = 1, j = 2; i < colLen; i++, j++) {
										if (j == colLen) {
												j = 1;
										}
										if ($(this).children().eq(i).text() != $(this).children().eq(j).text()) {
												$(this).addClass("differences");
												break;
										}
								}
						});
				} else {
						$("#compare-features .switch span").text($('#mostrar_text').val());
						$('.table-features .rowrengs').removeClass('differences');
				}
		})
		/**
		 *  Bugzilla defect #8283 Start
		 */

		/******** COLOR SELECTOR LISTING PRODUCT *********/
		$('.color-selector').each(function () {
				$(this).find('.color-carousel .color-offset i').each(function () {
						var color_sel = $(this);
						color_sel.on('click', function () {
								$(this).parent().children('i').removeClass('active');
								$(this).addClass('active');
						})

				})
				if ($(this).find('.color-carousel .color-offset i').length > 7) {
						var color_sel = $(this).find('.color-carousel .color-offset i'),
										btn_more = $(this).find('.more');

						btn_more.css('display', 'inline-block');
						$(this).find('.color-offset').width((color_sel.length + 5) * color_sel.width());

						btn_more.on('mouseenter', function () {
								var e = $(this).parent().children('.color-carousel').children();
								e.stop().animate({
										left: (e.parent().width()) * -1
								}, 1000);
								return false;
						})
						$(this).on('mouseleave', function () {
								var e = $(this).find('.color-offset');
								e.stop().animate({
										left: 0
								}, 200);
						})

				}
		});
		//START PA: lpsiteRedesign for dynamic code implementation for Quick Look Popup
		$('.quick-look').on('click', function (e) {
				// Added as a part of site redesign
				// quick look START
				var contextPath = $("#contextJSPPath").val();
				var displayName = $(this).find("input#displayName").val();
				var brand = $(this).find("input#brand").val();
				var gtmPrice = $(this).find("input#gtmPrice").val();
				var productID = $(this).find("input#productId").val();
				var listPrice = $(this).find("input#listPrice").val();
				var thumbnailImage = $(this).find("input#productImgUrlQl").val();
				var salePrice = $(this).find("input#salePrice").val();
				var productType = $(this).find("input#productType").val();
				var actionPath = $(this).find("input#actionPath").val();
				var materialGroup = $(this).find("input#materialGroup").val();
				var skipInventory = $(this).find("input#skipInventory").val();
				var skuId = $(this).find("input#skuId").val();
				//START PA: SiteRedesign : replace count with numRecords
				var count = $(this).find("input#numRecords").val();
				//END PA: SiteRedesign : replace count with numRecords
				var cdlImageLink = $(this).find("input#cdlImageLink").val();
				var isbnId = $(this).find("input#isbnId").val();
				var measurement = $(this).find("input#measurement").val();
				var productType = productType.replace(/[^A-Z0-9]/ig, "_");
				// PA: SiteRedesign : change display name logic to fix Bugzilla Defect#7450 and Defect#6539
				var brand = escape(brand);
				var displayName = escape(displayName);
				//PA: SiteRedesign : Removed longDescription
				var promoPrice = $(this).find("input#promoPrice").val();
				var isBundleSku = $(this).find("input#isBundleSku").val();
				var averageRating = $(this).find("input#averageRating").val();
				var ratingCount = $(this).find("input#ratingCount").val();
				var ebookImageLink = $(this).find("input#ebookImageLink").val();
				var mapSize = $(this).find("input#mapSize").val();
				var csMapSize = $(this).find("input#csMapSize").val();
				var isLensePage = $(this).find("input#isLensePage").val();
				var onlyColorVariant = $(this).find("input#onlyColorVariant").val();
				var onlySizeVariant = $(this).find("input#onlySizeVariant").val();
				var recSkuId = $(this).find("input#recSkuId").val();
				var minimumListPrice = $(this).find("input#minimumListPrice").val();
				var maximumListPrice = $(this).find("input#maximumListPrice").val();
				var minimumPromoPrice = $(this).find("input#minimumPromoPrice").val();
				var maximumPromoPrice = $(this).find("input#maximumPromoPrice").val();

				var newProductStartDate = $(this).find("input#newProductStartDate").val();
				var isNewProduct = $(this).find("input#isNewProduct").val();
				var newProductEndDate = $(this).find("input#newProductEndDate").val();
				var exclusiveProduct = $(this).find("input#exclusiveProduct").val();
				var exclusiveProductStartDate = $(this).find("input#exclusiveProductStartDate").val();
				var exclusiveProductEndDate = $(this).find("input#exclusiveProductEndDate").val();
				var isShipPleasant = $(this).find("input#isShipPleasant").val();
				var shipPleasantStartDate = $(this).find("input#shipPleasantStartDate").val();
				var shipPleasantEndDate = $(this).find("input#shipPleasantEndDate").val();
				//PA: SiteRedesign : Removed longDescription from href
				// added requestURIWithQueryString parameter
				var requestURIWithQueryString = $(this).find("input#requestURIWithQueryString").val();
				var requestURIWithQueryStringTrim = requestURIWithQueryString.replace(/[=]/ig, "_");
				//Defect id 9156 starts
				var thumbnailImagepram = "";
				if (thumbnailImage != undefined) {
						thumbnailImagepram = '&thumbnailImage=' + thumbnailImage;
				} else {
						thumbnailImagepram = '';
						$('#bx-pager').remove();
				}
				//Defect id 9156 end

				e.preventDefault();
				$.fancybox({
						href: contextPath + '/browse/quicklook_popup.jsp?&productID=' + productID + thumbnailImagepram + '&brand=' + brand + '&listPrice=' + listPrice + '&salePrice=' + salePrice + '&gtmPrice=' + gtmPrice + '&productType=' + productType + '&actionPath=' + actionPath + '&count=' + count + '&count=' + count + '&displayName=' + displayName + '&skuId=' + skuId + '&materialGroup=' + materialGroup + '&skipInventory=' + skipInventory + '&isbnId=' + isbnId + '&measurement=' + measurement + '&promoPrice=' + promoPrice + '&isBundleSku=' + isBundleSku + '&averageRating=' + averageRating + '&ratingCount=' + ratingCount + '&ebookImageLink=' + ebookImageLink + '&mapSize=' + mapSize + '&csMapSize=' + csMapSize + '&isLensePage=' + isLensePage + '&onlyColorVariant=' + onlyColorVariant + '&recSkuId=' + recSkuId + '&cdlImageLink=' + cdlImageLink +
										'&onlySizeVariant=' + onlySizeVariant + '&minimumListPrice=' + minimumListPrice + '&maximumListPrice=' + maximumListPrice +
										'&minimumPromoPrice=' + minimumPromoPrice + '&maximumPromoPrice=' + maximumPromoPrice + '&isNewProduct=' + isNewProduct + '&newProductStartDate=' + newProductStartDate + '&newProductEndDate=' + newProductEndDate + '&exclusiveProduct=' + exclusiveProduct + '&exclusiveProductStartDate=' + exclusiveProductStartDate + '&exclusiveProductEndDate=' + exclusiveProductEndDate + '&isShipPleasant=' + isShipPleasant + '&shipPleasantStartDate=' + shipPleasantStartDate + '&shipPleasantEndDate=' + shipPleasantEndDate + '&requestURIWithQueryStringTrim=' + requestURIWithQueryStringTrim,

						type: 'ajax',
						afterShow: function () {
								// we have commented the following slider initialization because
								// we
								// have initialized in skuvariants.js
								/*
								 * $('.qls').bxSlider({ pagerCustom: '.bx-pager' });
								 */
								// quick look END
								$("#qls").css("display", "none");
								$(".loader").show();
								$('#quick-tabs').slideTabs({
										// Options
										contentAnim: 'slideH',
										contentAnimTime: 600,
										contentEasing: 'easeInOutExpo',
										autoHeight: true,
										tabsSlideLength: 0
								});

						}

				});
				return false;
		});
		///END PA: lpsiteRedesign for dynamic code implementation for Quick Look Popup
		$('.quick-look.quick-tabs').on('click', function (e) {
				e.preventDefault();
				$.fancybox({
						href: '/assets/pieces/modals/modal-quicklook-tabs.html',
						type: 'ajax',
						afterShow: function () {
								$('.qls').bxSlider({
										pagerCustom: '.bx-pager'
								});
								$('#quick-tabs').slideTabs({
										// Options
										contentAnim: 'slideH',
										contentAnimTime: 600,
										contentEasing: 'easeInOutExpo',
										autoHeight: true,
										tabsSlideLength: 0
								});
						}
				});
				return false;
		})
		$('.quick-look.quick-range').on('click', function (e) {
				e.preventDefault();
				$.fancybox({
						// content: $('.quick-look-box').html(),
						href: '/assets/pieces/modals/modal-quicklook-range.html',
						type: 'ajax',
						afterShow: function () {
								$('.qls').bxSlider({
										pagerCustom: '.bx-pager'
								});
						}
				});
				return false;
		})
		if ($('.item-zoom').length > -1) {
				$('.item-zoom').fancybox({
						openEffect: 'elastic',
						closeEffect: 'elastic',
						arrows: false,
						helpers: {
								title: {
										type: 'over'
								}
						}
				})
		}


		//START PA: lpsiteRedesign for dynamic code implementation for Promotion popup
		$('.box-consolidar').fancybox();
		$(".go-promotions, .btn-promo").on('click', function (e) {
				var contextPath = $("#contextJSPPath").val();
				//START PA: SiteRedesign Added parameters for ver promocione button
				var productID = $(this).parents(".product-cell").find(".quick-look-promocione #productIdPromocion").val();
				var listPrice = $(this).parents(".product-cell").find(".quick-look-promocione #listPricePromocion").val();
				var salePrice = $(this).parents(".product-cell").find(".quick-look-promocione #salePricePromocion").val();
				var displayName = $(this).parents(".product-cell").find(".quick-look-promocione #displayNamePromocion").val();
				//var displayName = displayName.replace(/[^A-Z0-9]/ig, "_");
				displayName = escape(displayName);
				var largeImage = $(this).parents(".product-cell").find(".quick-look-promocione #productImgUrlPromocion").val();
				var actionPath = $(this).parents(".product-cell").find(".quick-look-promocione #actionPathPromocion").val();
				var isBundleSku = $(this).parents(".product-cell").find(".quick-look-promocione #isBundleSkuPromocion").val();
				var productType = $(this).parents(".product-cell").find(".quick-look-promocione #productTypePromocion").val();
				var promoPrice = $(this).parents(".product-cell").find(".quick-look-promocione #promoPricePromocion").val();
				// var actionPath = $(this).parents(".product-cell").find(".quick-look-promocione #actionPath").val();
				var thumbnailImage = $(this).parents(".product-cell").find("input#productImgUrlQlPromocion").val();
				var minimumListPrice = $(this).parents(".product-cell").find("input#minimumListPricePromocion").val();
				var maximumListPrice = $(this).parents(".product-cell").find("input#maximumListPricePromocion").val();
				var minimumPromoPrice = $(this).parents(".product-cell").find("input#minimumPromoPricePromocion").val();
				var maximumPromoPrice = $(this).parents(".product-cell").find("input#maximumPromoPricePromocion").val();

				//START PA: SiteRedesign : added numRecords
				var numRecords = $(this).parents(".product-cell").find("input#numRecordsPromocion").val();
				//END PA: SiteRedesign : added numRecords
				//END PA: SiteRedesign Added parameters for ver promocione button
				//PA: SiteRedesign : added numRecords in href
				e.preventDefault();
				$.fancybox({
						"autoSize": false,
						width: 710,
						height: 400,
						href: contextPath + '/browse/promotions_popup.jsp?&productID=' + productID + '&listPrice=' + listPrice + '&salePrice=' + salePrice + '&displayName=' + displayName + '&largeImage=' + largeImage + '&actionPath=' + actionPath + '&isBundleSku=' + isBundleSku + '&productType=' + productType + '&promoPrice=' + promoPrice + '&thumbnailImage=' + thumbnailImage + '&minimumListPrice=' + minimumListPrice + '&maximumListPrice=' + maximumListPrice + '&minimumPromoPrice=' + minimumPromoPrice + '&maximumPromoPrice=' + maximumPromoPrice + '&numRecords=' + numRecords,
						type: 'iframe',

						afterShow: function () {
								$(".fancybox-iframe").contents().find(".go-detail").click(function () {
										$.fancybox.close();
										window.location.href = ' /tienda/' + actionPath;

								})
						}

				});
				return false;
		})
		//END PA: lpsiteRedesign for dynamic code implementation for Promotion popup



		// Delete mi account and credit Direcciones de Entrega
		if (url.match(/creditCards.jsp/)) {
				$('.my_account_module_content_info label').each(function () {
						if ($(this).html() == 'DirecciÃ³n' || $(this).html() == 'Entre Las Calles:' || $(this).html() == 'TelÃ©fonos:') {
								$(this).next('p').remove();
								$(this).remove();
						}
				})
		}
		if (url.match(/cat4460002/)) {
				window.location.href = "https://assets.liverpool.com.mx/muebles/gridSalas.html"
		}

		if (url.match(/myAccount.jsp/)) {
				$("#my_account_content .my_account_module_content").last().remove();
		}
		if (url.match(/myAccount.jsp/)) {
				$("#my_account_content .my_account_module_content").last().remove();
		}

		if (url.match(/orderSuccess.jsp/)) {

				$(".cie_contents > ul li").each(function () {
						if ($(this).find("p").text().length <= 1) {
								$(this).remove()
						}
				});
		}

		if (url.match(/cat4340010/)) {
				//temporally test, dont remove clasificaci�n por bloques
				var arreglin = [];
				var godin = [];
				var textin;
				var nombrecin;

				$(".fac-container.f-categories .numeral").each(function (a, b) {
						textin = $(this).text().replace(/\(|\)/g, '');
						arreglin[a] = textin;

				});

				$(".fac-container.f-categories .atr-e").each(function (c, d) {
						nombrecin = $(this).text();
						godin[c] = nombrecin;
				});

				$(".product-list ").before("<h2 style='font-size: 1.5rem;color: black;line-height: 218%;margin: 12px 10px;border-bottom: 2px solid #fafafa; padding-top: 10px;'>" + godin[0] + "</h2>");
				$(".product-list  .producto-modulo:nth-child(" + arreglin[0] + ")").after("<h2 style='font-size: 1.5rem;color: black;line-height: 218%;margin: 12px 10px;border-bottom: 2px solid #fafafa; padding-top: 10px;'>" + godin[1] + "</h2>");

		}

		if (url.match(/MAC%20Collection/)) {
				window.alert = function () {}
				var ok = "<td class='oki'><div class='textines' style='width:260px;'><h1 class='h1_mac' style='padding:10px 0;'>";
				ok += $(".h1_mac").text();
				ok += "</h1></div></td>";
				$(".h1_mac").remove();
				$(".subportada_foto").after(ok);
				var descrit = $(".descripcion_look .gris_normal");
				$("#contenidos_coleccion_auto .oki .textines").after(descrit);
				$(".gris_normal:not(:first)").remove();

				$("#contenidos_coleccion_auto > table > tbody").append("<tr class='otrin'></tr>");
				var lasti = $("#contenidos_coleccion_auto > table > tbody td.descripcion_td");
				$("#contenidos_coleccion_auto > table > tbody tr.otrin").append(lasti);
		}

		/**Add class producto-libro to books un PLP***/

		$("img[id*='PUB']").addClass('producto-libro');

});


$("#borrar_todo").click(function () {
		var l_url_check_box = contextPathAbs + "/assets/images/check_box.gif";
		$("ul.fyeah li a").css('background', 'url(' + l_url_check_box + ') no-repeat -15px 0px transparent');
		$("li a.en-talla").removeClass("newClass");
});
$(function () {

		//show checkbox selected if has class activec
		if ($("ul.fyeah li").find('a').hasClass("activec") || ((($("#crumb-facets").find("a").length > 1) && ($("#itIsSearchPage").val() == "false" || $("#combo").val() == "0")) || ((($("#crumb-facets").find("a").length > 2) || $("#catFacetSelecetdInSearch").val() >= 1) && $("#itIsSearchPage").val() == "true"))) {
				$('#borrar_todo').show();
		}

		// add multiple select
		$("ul.fyeah li").find('a').click(function () {
				if ($(this).hasClass('inactive')) {
						$(this).removeClass('inactive');
						$(this).addClass('activec');
						/*INITS ID:JS201610130001*/
						var l_url_check_box = contextPathAbs + "/assets/images/check_box.gif";
						$(this).css('background', 'url(' + l_url_check_box + ') no-repeat 0px -15px transparent');
						/*ENDS ID:JS201610130001*/
				}
				if ($(this).hasClass('activec')) {
						$(this).removeClass('activec');
						$(this).addClass('inactive');
						/*INITS ID:JS201610130001*/
						var l_url_check_box2 = contextPathAbs + "/assets/images/check_box.gif";
						$(this).css('background', 'url(' + l_url_check_box2 + ') no-repeat -15px 0px transparent');
						/*ENDS ID:JS201610130001*/
				}
		});
});




$(function () {
		var fltrElem = document.getElementById('filterApplied');
		var spElem = document.getElementById('sortAndPaginationApplied');
		if ((fltrElem != null && fltrElem.value == "true") && (spElem == null) && !($("ul.fyeah li").find('a').hasClass("activec") || ((($("#crumb-facets").find("a").length > 1) && ($("#itIsSearchPage").val() == "false" || $("#combo").val() == "0")) || ((($("#crumb-facets").find("a").length > 2) || $("#catFacetSelecetdInSearch").val() >= 1) && $("#itIsSearchPage").val() == "true")))) {
				if (document.getElementById('catListingContextPath').value != null && document.getElementById('existingCategoryPageUrl') != null) {
						var finalUrl = document.getElementById('catListingContextPath').value + document.getElementById('existingCategoryPageUrl').value;
						window.location.href = finalUrl;
				}
		}
});

$(function () {
		// previene al presionar las teclas ctrl + '-' y ctrl + '+'
		$(document).keydown(function (event) {
				if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
						event.preventDefault();
				}
		});
		//previene al usar ctrl + 'scroll del mouse'
		$(window).bind('mousewheel DOMMouseScroll', function (event) {
				if (event.ctrlKey == true) {
						event.preventDefault();
				}
		});

});

$(document).ready(function () {

		//Convert uppercase facturacion

		$('#cf').keyup(function () {
				this.value = this.value.toUpperCase();
		});

		$('#rfc1, #rfc3').val(function () {
				return this.value.toUpperCase();
		});


		$('.color_width_look select').on('change', function () {});
		//show hide giftbox
		$('.ui-layer-message').hide();
		$(document).on("click", ".ui-add-message", function (e) {
				$(e.target).next("div").fadeToggle();
				e.stopPropagation();
				e.preventDefault()
				return false;
		});
		$('.ui-layer-message-gift').hide();
		$(document).on("click", ".ui-layer-message-gift", function (e) {
				$(e.target).next("div").fadeToggle();
				e.stopPropagation();
				e.preventDefault()
				return false;
		});
});

$(document).ready(function () {

		var isMobile = {
				Android: function () {
						return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function () {
						return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function () {
						return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function () {
						return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function () {
						return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
				},
				any: function () {
						return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
		};

		if (isMobile.any()) {
				$("body").css({
						'width': '100% !important'
				})
				$(".sgray>li>a").css({
						'padding': '9px 10px 11px 10px !important'
				})
				$("#secondary_menu,.wrapper_fwidth").css({
						'width': '100% !important '
				})

		}


		/****************Start:  Added For CR_Payment ***********/
		var paymentSelected = $("#paymentSelected").val();
		var isLoggedIn = $("#isLoggedIn").val();
		var contextPath = $("#contextpath").val();
		var onPageLoad = 'true';
		var message = jQuery("#noPaymentSelected").val();
		/**************Start:Added for showing error msg for not selecting any payment method***********/
		if (isLoggedIn == 'true') {
				jQuery("#selectPaymentMethod .btn_pagar_precheckout").live('click', function ($) {
						if (jQuery("input[type=radio]:checked").size() == 0) {
								showErrorMsg(message);
						}
				});
		}
		/**************End:Added for showing error msg for not selecting any payment method***********/
		if (paymentSelected != null && paymentSelected == "creditCard" || paymentSelected == "CIEBancomer" || paymentSelected == "paypal") {
				if (paymentSelected != null && paymentSelected == "creditCard") {
						$(".external_opt input").attr('checked', 'checked');
						$(".invalid_product_check").hide();
						getAvailablePayment(paymentSelected, isLoggedIn, contextPath, onPageLoad, false);
				} else if (paymentSelected != null && paymentSelected == "CIEBancomer") {
						$(".bancomer_opt_d input").attr('checked', 'checked');
						$(".invalid_product_check").hide();
						getAvailablePayment(paymentSelected, isLoggedIn, contextPath, onPageLoad, false);
				} else if (paymentSelected != null && paymentSelected == "paypal" && $("#disablePayPalRadioButton").val() != "2") {
						$(".paypal_opt input").attr('checked', 'checked');
						getAvailablePayment(paymentSelected, isLoggedIn, contextPath, onPageLoad, false);
				}
		}
		if ($("#disablePayPalRadioButton").val() == "2") {
				document.getElementById("selecttarjeta_radio").disabled = true;
		}
		$(".selecttarjeta_a").click(function (event) {
				onPageLoad = 'false';
				if ($('.selecttarjeta_a').is(':checked')) {
						var selectedPG = $(this).val();
						getAvailablePayment(selectedPG, isLoggedIn, contextPath, onPageLoad, false);
				}
		});
		/* Added the code related to selection of Payment group if we click on ICON :: START*/
		$("#bancomer_payment_method").click(function (event) {
				onPageLoad = 'false';
				$(".bancomer_opt_d input").attr('checked', 'checked');
				if ($('.selecttarjeta_a').is(':checked')) {
						var selectedPG = "CIEBancomer";
						getAvailablePayment(selectedPG, isLoggedIn, contextPath, onPageLoad, true);
				}
		});
		$("#creditcard_payment_method").click(function (event) {
				onPageLoad = 'false';
				$(".external_opt input").attr('checked', 'checked');
				if ($('.selecttarjeta_a').is(':checked')) {
						var selectedPG = "creditCard";
						getAvailablePayment(selectedPG, isLoggedIn, contextPath, onPageLoad, true);
				}
		});
		//For Paypal
		$('#paypal_payment_method').on('click', function () {
				if ($("#disablePayPalRadioButton").val() != "2") {
						$('.promo_payform').fadeOut('fast');
			$(this).find('.radio_form_express_a').attr('checked', true);;
						if ($('.selecttarjeta_a').is(':checked')) {
								var selectedPG = "paypal";
								getAvailablePayment(selectedPG, isLoggedIn, contextPath, onPageLoad, true);
						}
				}
		});
		/* Added the code related to selection of Payment group if we click on ICON :: END*/
		/****************End:  Added For CR_Payment ***********/
		/**************** initialise date picker***********/
		$(document).ready(function () {

				/******Funcion placeholder buscador*********/
				$(".dummy-search .search_box_form #buscador").attr("placeholder", "Tenemos lo que buscas");
		/*added 3/17/17*/
		//$("#buscador").attr("placeholder","Buscar...");
		$("#buscador").removeAttr("onblur");
		$( "#buscador" ).focusout(function() {
				//$(this).attr("placeholder","Buscar...");
		});
		$(".dummy-search .search_box_form #buscador").css("font-style", "italic");
		$(".dummy-search .search_box_form #buscador").focusin(function() {
			$(".dummy-search .search_box_form #buscador").removeAttr("placeholder");
			$(".dummy-search .search_box_form #buscador").css('font-style', 'normal');
		});
		$(".dummy-search .search_box_form #buscador").focusout(function() {
			var atri = $(".dummy-search .search_box_form #buscador").val();
			if (atri != "") {} else {
				$(".dummy-search .search_box_form #buscador").css("font-style", "italic");
			}
			$(".dummy-search .search_box_form #buscador").attr("placeholder", "Tenemos lo que buscas");
		});

		/******Funcion placeholder buscador*********/
		var date = $(".date_data").val();
		if (typeof date == "undefined") {} else {
			$(".date_data").datepicker({
				dateFormat: 'dd/mm/yy'
			});
		}

		});
		$('input.date_data').trigger('click');
		$(".date_data").on('click', function () {
				$(".date_data").datepicker({
						dateFormat: 'dd/mm/yy'
				});
		});

		$("#espacioRegresar").click(function (e) {
				window.location.href = document.referrer;
		});

		$("#espacioRegresarLoadOrder").click(function (e) {
				var url = "searchAndLoadOrder.jsp";
				window.location.assign(url);
		});

		if ($("#displayDeliveryAddress").val() === "1") {
				$(".direccion_confirmacion").find(".ribbon-end").css("background", "url('/assets/images/bg/endeca-sprite.png') no-repeat scroll -281px -410px #A8DCFF");
				$(".forma_pago_confirmacion").find(".ribbon-end").css("background", "url('/assets/images/bg/endeca-sprite.png') no-repeat scroll -282px -474px #A8DCFF");

		}

		$.fn.exists = function () {
				return $(this).length > 0;
		}
		if ($('.gift_registry_female_name').exists()) {
				$('#gift_registry_detail_event_right_content').css({
						'width': '1250px'
				});
				$('.gift_registry_detail_event_right_content').css({
						'background-color': '#000'
				});
				$('.gift_registry_detail_event_right_content h1').css({
						'background-color': '#fff'
				});
				var morra = $('.gift_registry_female_name').text();
				var morro = $('.gift_registry_male_name').text();
				var date_morros = $('#gift_registry_date_event').text();
				var morros_event = $('#gift_registry_number_event').text();



				var morro_ = morro.split(' ')[0];

				var morra_ = morra.split(' ')[0];

				$('.last_step_2,.last_step_1,.last_step_0').remove()


				$('#gift_registry_detail_event_left_content').css({
						'width': '100%'
				});
				$('.gift_registry_detail_event_module_content').css({
						'border': 'none'

				})

				$('.last_step_4').prepend('<div class="wr_last_step"><div class="new_title_gr">' + morra_ + ' & ' + morro_ + '</div><div class="num_event">No de evento : ' + morros_event + '</div><div class="date_evnt">Fecha de evento : ' + date_morros + '</div></div>');

				$('.wr_last_step').css({
						'position': 'absolute',
						'margin': '20px auto',
						'width': '300px',
						'text-align': 'center',
						'height': 'auto',
						'top': '0',
						'left': '0',
						'right': '0',
						'bottom': '0'
				})
				$('.new_title_gr').css({
						'font-size': '25px',
						'font-family': 'robotocondensedregular',
						'font-weight': 'bold'

				});

				$('.date_evnt').css({
						'color': '#8d8d8d',
						'font-family': 'robotoregular',
						'margin': '5px 0',
						'font-size': '15px'
				});


				$('.num_event').css({
						'color': '#e10089'
				});


		} else {

		}




		if ($('#birthday_registry_banner_promo').exists()) {
				var enableGiftRegistry = $('#enableGiftRegistry').val();
				//for gift registry home
				$('.gift_registry_module_content h1').each(function (a, b) {
						$(this).addClass('chan_me' + a);
				});

				$('.gift_registry_module_content ').each(function (a, b) {
						$(this).addClass('chmodan_me' + a);
				});
				/*Start : IBM RTC #4323 Fix*/
				if(enableGiftRegistry == undefined || enableGiftRegistry == 'false') {
					$('.chan_me0').text('Buscar Mesa de Regalos');
				}
				/*End : IBM RTC #4323 Fix*/
				$('.chan_me1').text('Encuentra la mesa de regalos con el numero de evento');

				$('.anniversary_event #gift_registry_right_content').remove();
				//$('.chmodan_me0,.chmodan_me1').wrapAll('<div class="wrap_per">');

				$('.gift_registry_module_content h1').css({
						'color': '#161616',
						'font-size': '17px',
						'font-weight': '400',
						'font-family': 'robotocondensedregular'
				})

				$('#gift_registry_left_content').css({
						'width': '100%'
				})
				$('.chmodan_me0.chmodan_me1').css({
						'width': '405px'
				})
				$('.chmodan_me1 h1').css({
						'color': '#757575'
				})
				$('.gift_registry_module_content').css({
						'border': 'none'

				})
				$('.wrap_per').css({
						'width': '405px',
						'float': 'left'
				})
				$('.chmodan_me2').css({
						'width': '405px',
						'float': 'left',
						'margin': '0 0 0 30px'

				})

				$('#birthday_registry_banner_promo').css({
						'display': 'none'
				})

				$('.gift_registry_module_content input').css({
						'height': '23px',
						'width': '280px'

				})
				$('.gift_registry_button .search_button').css({
						'height': '40px',
						'padding': '10px',
						'width': '135px'
				});

				$('#gift_registry_left_content').append('<img src="https://assets.liverpool.com.mx/assets/images/img_bodas.jpg" class="rec_gf_0" >')



				$('img.rec_gf_0').css({
						'position': 'absolute',
						'width': '416px'
				});
		} else {

				//for step 1 gift registry


				//for step 1 gift registry

				setTimeout(function () {
						$('#gift_registry_detail_event_right_content').fadeIn('fast');
						$('#gift_registry_detail_event_right_content').css({
								'display': 'block'

						});
						$('#gift_registry_detail_event_left_content').fadeIn('fast');
						$('#gift_registry_detail_event_left_content').css({
								'display': 'block'
						});

				}, 1000)


				function remake_btn() {

						$('.date_item').each(function (a, b) {

								var gol = $(this).attr('href');
								$(this).append('<a class="new_view_button_evt">VER LISTA DE REGALOS</a>');
								$('.new_view_button_evt').css({
										'padding': '5px 10px',
										'width': '130px',
										'height': '30px',
										'background-color': '#E10089',
										'color': '#fff',
										'margin': '10px 0 0 45px',
										'font-size': '13px',
										'font-family': 'inherit',
										'font-weight': 'lighter'
								});
								$('#gift_registry_table_events').css({
										'width': '895px'
								})


								$('.event_item,.date_item,.remark_search').css({
										'color': '#161616'
								})
								$('#breadcrumbs ul > li:first-child a').css({
										'color': '#E10089'
								})



								$('#gift_registry_table_events td').css({
										'padding': '10px 5px 3px 3px',
										'height': '30px'
								});
								$('#gift_registry_table_events td a').css({
										'font-weight': '400',
										'font-size': '12px'
								});

						});
				}
				remake_btn();


				$(document).ajaxSuccess(function (a) {
						$('.new_view_button_evt').remove();
						remake_btn();
				});

				//for results in gift registry


				$('#gift_registry_detail_event_content').css({
						'width': '1250px'
				})


				$('.gift_registry_detail_event_table_events').css({
						'width': '100%'
				});

				$('.gift_registry_detail_event_table_events td').css({
						'font-size': '10px',
						'padding': '5px 2px 3px 0',
						'word-break': 'break-all',
						'font-size': '13px',
						'font-family': 'robotocondensedregular'
				});
				$('.gift_registry_detail_event_table_events td:first-child').css({
						'text-align': 'center'
				});


				$('.my_account_content_buttons .add_to_cart_button').addClass('save_form_button')

				$('.event_item_photo').each(function (a, b) {
						var lupe = $(this).attr('href');
						$(this).parent('td').html("<img class='renew_cl' src=" + lupe + ">")
				})
		var evento2 = $('#gift_registry_number_event').text();
		if ((evento2.length > 0 && evento2 == "#42888701") || (evento2.length > 0 && evento2 == "#42892742")) {
			$('.add_to_cart_td .add_to_cart_button').attr('value', 'Aportar');
		} else {
				$('.add_to_cart_td .add_to_cart_button').attr('value', 'Agregar a mi bolsa');
		}
				$('.add_to_cart_td .add_to_cart_button').css({
						'width': '188px',
						'font-family': 'roboto',
						'font-size': '13px',
						'height': '30px',
						'padding': '0 0 3px 0',
						'position': 'relative',
						'right': '10px'

				});


				$('.add_to_cart_td').append('<i class="icon-liv-go-14"></i>')
				$('.add_to_cart_td > i').css({

						'position': 'relative',
						'right': '39px',
						'bottom': '21px',
						'color': '#FFF'

				})

				$('img.renew_cl').css({
						'width': '150px'
				});


				$("img.event_item_photo").on('error', function () {
						$(this).addClass('error_image_ol_a')
				}).attr("src", 'hola');




		}



		if ($('.bag-list').exists()) {
				$("div.bag-list:last").addClass("lastitem");
		}



		//print CSS + Fecha

		var fullDate = new Date();
		var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);
		var twoDigitDate = fullDate.getDate() + "";
		if (twoDigitDate.length == 1)
				twoDigitDate = "0" + twoDigitDate;
		var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
		var detail = $(location).attr('href');
		//Head extra assets
		if ($('#tools_producto').exists()) {
				$("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='https://assets.liverpool.com.mx/assets/css/print/print_detalle_producto.css' type='text/css' media='print'>");
				window.old_print = window.print
				window.print = function () {
						$('#master_footer').append('<br />A la Fecha:' + currentDate);
						$("li").remove(".etalage_magnifier, .etalage_icon, .etalage_hint, .etalage_zoom_area, .etalage_small_thumbs");
						window.old_print();
				}
				$("#print_product").click(function () {
						window.print();
						setTimeout('document.location.reload()', 10);
				});
				$('body').keydown(function (e) {
						if (e.keyCode == 80 && e.ctrlKey) {
								window.print();
						}
				});
		}


		// Ajuste de m�dulos en Portada de secci�n: elimina el margin izquierdo cada 4 elementos
		$(".portada:nth-child(4n+1)").css("margin-right", "0px");


		if ($('.eb-download').exists()) {
				$(".eb-download").fancybox({
						padding: 0,
						//type : "iframe",
						type: "ajax",
						href: "/ebStatic/eb-dn-modal.html"
				})
		}

		/** OTHER PRODUCTS HOME **/
		if ($('#home #slide').exists()) {
				$("#home #slide").awShowcase({
						content_width: 987,
						content_height: 670,
						fit_to_parent: false,
						auto: false,
						interval: 1,
						continuous: false,
						loading: true,
						tooltip_width: 200,
						tooltip_icon_width: 32,
						tooltip_icon_height: 32,
						tooltip_offsetx: 18,
						tooltip_offsety: 0,
						arrows: true,
						buttons: false,
						btn_numbers: false,
						keybord_keys: true,
						mousetrace: false,
						pauseonover: true,
						stoponclick: true,
						transition: "hslide",
						transition_delay: 0,
						transition_speed: 100,
						show_caption: "onload",
						thumbnails: false,
						thumbnails_position: "outside-last",
						thumbnails_direction: "vertical",
						thumbnails_slidex: 1,
						dynamic_height: false,
						speed_change: true,
						viewline: true,
						custom_function: null
				})
		}


		/**** tabs para credito  ***/

		function tabs_hack() {
				if (document.getElementById('conPath') != undefined) {
						var conPath = document.getElementById('conPath').value;
						$('#dilisa_tab').load(conPath + '/users/credit/includes/dilisaDetailPage.jsp');
						$('#lpc_tab').load(conPath + '/users/credit/includes/lpcDetailPage.jsp');
						$('#livertu_tab').load(conPath + '/users/credit/includes/livertuDetailPage.jsp');
						$('#fashion_tab').load(conPath + '/users/credit/includes/fashionDetailPage.jsp');
						$.getScript(contextPathAbs + "/assets/js/jquery-ui.js").done(function () {
								$(".tabs_credit_info").tabs();
						});
				}
		}

	var credit = $("#tabs_credit").val();
	if (typeof credit == "undefined") {} else {
		$("#tabs_credit").tabs(tabs_hack());
	}

		/**** RATINNGS  ****/
		$(".rating-stars a").on("mouseover", function () {
				$(this).children(".review-summary").css({
						top: $(this).height() + 30 + "px",
						left: '-78px'
				})
				$(this).children(".review-summary").fadeIn("fast");
				$(this).children(".review-summary").children(".rev-active").css({
						position: "absolute",
						height: "15px",
						width: "100%",
						left: "0px"
				})
		})

		$("#rating-out").on("mouseover", function () {
				$(this).children('.rating-stars').children(".review-summary").css({
						top: $(this).height() + 10 + "px",
						left: '0px',
						width: '75%'
				})
				$(this).children('.rating-stars').children(".review-summary").fadeIn("fast");
				$(this).children('.rating-stars').children(".review-summary").children(".rev-active").css({
						position: "absolute",
						height: "15px",
						width: "100%",
						left: "0px"
				})
		})
		$("#rating-out").on("mouseleave", function () {
				$(this).children('.rating-stars').children(".review-summary").fadeOut("fast");
		})
		// AKAMAI RATINGS CHANGE- Updated to search for click on BODY after DOM was updated dynamically
		$("body")
						.on(
										"click", '#starlogged img',
										function () {
												$(".firstRating").html('&nbsp;');
												var rating = $(this).index() + 1;
												var productId = $("#productId").val()
												$.ajax({
														type: "post",
														url: contextPath + "/common/frag/updateProductRating.jsp",
														data: "productId=" + productId + "&rating=" + rating,
														success: function (data) {}
												});
												$(".green_and").css({
														display: "block"

												}).addClass("logingreen_and").removeClass("green_and");

												$("#noratemsg").css({
														display: "none",
												});
										})
		/**** RATINNGS  ****/

		$('#checkout_recommendations_fancy').css('display', 'none');
		setTimeout(function () {
				$('#checkout_recommendations_fancy').fadeIn('slow');
		}, 2000);

		// FANCYBOX DE LAS FOTOS DE CADA PRODUCTO
		$('.event_item_photo').click(function (evt) {
				evt.preventDefault();
				url_mesa_regalos = $(this).attr('href');
		if (typeof console != 'undefined') {}
				$('div#master_navigation').css('z-index', '-5000000');
				$.fancybox({
						'padding': 12,
						'width': 324,
						'height': 246,
						'autoScale': true,
						'autoSize': false,
						'type': 'image',
						'scrolling': 'no',
						'overlayShow': true,
						'overlayOpacity': .8,
						'enableEscapeButton': true,
						'href': url_mesa_regalos,
						'beforeClose': function () {
								$('div#master_navigation').css('z-index', '5000000');
						}
				});
		});

		/* Gestiona la visibilidad de TOP BANNER en checkout */
		var href = $(location).attr('href');
		if (href.match(/checkoutExpress/) || href.match(/checkout/)) {
				$("#banner-top").css("display", "none");
				$("a.cp_help").css("display", "none");
		}

		if (href.match(/airtime_quick/)) {
				$("#banner-top").css("display", "block");
				$("body").css("backgroundImage", "url(/assets/images/bg/bk-main.png)");
				$("body").css("backgroundPosition", "0px 0px");
				$("body").css("backgroundRepeat", "repeat no-repeat");
		}

		if (href.match(/new_creditc.jsp?param_new=true&checkout=true/)) {
				//alert('checkout');
				$("body").css({
						"background": "#FAFAFA",
						"margin-top": "30px"
				});
				$("body").remove("#banner-top");
		}

		if (href.match(/Registry.jsp/) || href.match(/mesaDeRegalos.jsp/)) {
				$("div#main_wrapper").css("width", "1250px");
				$("#_registry_content").css("width", "1250px");
				$("#_registry_left_content").css("margin-right", "34px");
		}

		if (href.match(/cieOrderHistory.jsp/)) {
				$(".consultar_compra").css("display", "none");
				$(".ayuda_").css("display", "none");
				$(".accept_button.consultar_").css("display", "none");
				$(".my_account_link").css("margin-top", "-60px");
				$(".my_account_order_status_section_subtitle:first-child p").css("display", "none");
		}

		if (href.match(/billing.jsp/)) {
				$(".clear.prod_precheckout").each(function (index, element) {
			if ($(this).find(".col.promo_ck_pay").children(".forma-apgo").exists()) {} else {
								$(this).find(".cantidad_ck_pay").css("margin-left", "240px");

						}
				});
		}



		//code to delete precheckout banner and add a flag instead
		var plop = "/cart/cart.jsp";
		var plop1 = "/checkout/billing.jsp";
		var href = $(location).attr('href');

		function drawFlag() {
				if (href.match(plop) || href.match(plop1)) {
						$(".total_col_left").empty();
						$(".total_col").parent().prepend('<span class="total_label"><i class="icon"></i><i class="shadow"></i>El descuento se aplica con tu forma de pago</span>');
						clearTimeout(timeout);
				}
		}
		var timeout = setTimeout(drawFlag, 500);
		setTimeout(function () {
				$('#checkout_recommendations_express').prepend('<h3>Tambi&eacute;n te recomendamos</h3>');
		}, 500);

		var xxxp = '/shopping/checkoutExpress/step1/paymentMethod.jsp';

		if (href.match(xxxp)) {
				$("body").remove("#banner-top");
		}

		if (href.match(/ayuda/)) {
				$("body").remove("#banner-top");
		}


		$("table#codigos_regreso_clases tr:odd").addClass("odd_code");

		$('section#all_promos ul#promo_list div img').each(function () {
				var alt_mo = $(this).height();
				var lista_mo = $('section#all_promos ul#promo_list li');
				$(lista_mo).height(alt_mo + 180);
		});



		$('#submenu-header').css('display', 'none');
		$('#submenu-header').css('background', 'none');

		/*HARDCODE PARA EL 11vo nivel reparar para hacerlo dinamico*/
		$('.btncat480406').addClass('float-right');

		$("#typeahead").hide();


		/*Funcin que detecta los banners y los quita para el layout full banner*/

		if ($('#gate_1, #gate_2').exists()) {

				$('#gate_1, #gate_2').css({
						'display': 'none'
				});

				$('#banner_main_html').addClass('.full-banner-display');
				$('#banner_main_html, #banner-fade, li.bjqs-slide, li.bjqs-slide>div').css({
						'width': '100%',
						'height': '460px',
						'border': '0'

				});
		}

		if ($('#banner-fade').exists()) {
				//funcin para el nuevo slider
				$('#banner-fade').bjqs({
						height: 460,
						width: "100%",
						responsive: false,
						animspeed: 6000,
						automatic: true
				});
		}

		if ($('#home_credit').exists()) {
				//funcin para el nuevo slider
				$('#credit_slider').bjqs({
						height: 370,
						width: 680,
						responsive: false,
						animspeed: 6000,
						automatic: true
				});
		}
		$(".b_eliminar a").on("click", function () {
				var cardItemId = $(this).attr("id");
				$('#cardItemId').val(cardItemId);
				//$(this).fancybox();
				//Start: Modified for IRIS defect 662
		$.fancybox([{
			href: '#modal-confirm'
		}]);
				//End: Modified for IRIS defect 662
		})
		$(".btn-box-cancel").on("click", function () {
				$.fancybox.close();
		})

		/*Detalle de optica tooltip de ayuda*/
		$("a.power-tooltip").hover(
						function () {
								$(".tool-info-power").fadeToggle("slow", "linear");

						}
		);
		$("a.cilindro-tooltip").hover(
						function () {
								$(".tool-info-cilindro").fadeToggle("slow", "linear");

						}

		);

		/*Click a la bolsa llena o vaca*/
		if ($('div.shopping_bag_item').exists()) {
				$('div#my_bag_toggle a#open_shopping_bag').addClass('active_bg');
				$('a#open_shopping_bag').on('click', function () {
						$('a#open_shopping_bag').removeClass('active_bg');
						$('a#open_shopping_bag').addClass('active_bg_white');
				});
		}



		/*Ajuste menu-ayuda*/
		var helpmenu = '/help';

		if (href.match(helpmenu)) {
				$('.column_sec_menu').addClass('help-header');
		}


		/*Ayuda para breadcrumbs*/

		var airtimehref = '/tienda/checkout/airtimeTicket.jsp';

		if (href.match(airtimehref)) {
				if ($('#breadcrum').length > 0) {
						//do nothing
				} else {
						$("#breadcrumbs").append('<ul id="breadcrum"><li><a href="https://liverpool.com.mx">Home</a></li><li><a href="#" class="actual">Tiempo Aire</a></li></ul>');
				}
		}


		function breadcrumbs() {
				var coco = 0;
				$('div.masters_nav ul#breadcrum').find('li').each(function () {
						coco++;
				});
				if (coco == 1) {
						$('div.masters_nav').css('display', 'none');
				}
		}
		breadcrumbs();

	if (('div#breadcrumb-reg').length < 0) {} else {
				$('div.masters_nav').css('display', 'block');
		}

		/*Quitar clase de ancla agregar tarjeta/numero*/
		$('#table_sotred_phone_numbers').find('a').removeClass('delete_button');

		/*Agrega clase a Home Products para meterle padding*/
		/*Add class para recommendations Home*/
		if ($('#gate_1').exists()) {
				$('#product_carrousel').addClass('r-home');
				$('#home nav').addClass('nav-home');

		}

		if ($("#main_wrapper .col_main:nth-child(2n)").exists()) {
				$(".col_main:nth-child(2n)").addClass('col_main-segunda');

		}

		/*Eliminar clase conflictiva en seguimiento a pedido*/
		if ($('.ordfollowup > #contenido_columna > .linkaction').exists()) {
				$('.ordfollowup #contenido_columna div.linkaction').removeClass('linkaction').addClass('link-regresar-sp');
		}

		/*Eliminar clase conflictiva en seguimiento a pedido*/
		if ($('.ed_ccard .full-col > .linkaction').exists()) {
				$('.ed_ccard .full-col div.linkaction').removeClass('linkaction').addClass('link-regresar-tj');
		}
		/*Start : Moved code from jsp :7491*/
		if ($('#downloading').exists()) {
				$("#downloading").click(function () {
						$(this).hide();
				});

				$("#current_month").click(function () {
						$('#downloading').show();
				});
				$("#previous_months").click(function () {
						$('#downloading').show();
				});
				$("#previous_months_select").click(function () {
						$('#downloading').show();
				});
		}
		/*End : Moved code from jsp :7491*/
		if ($('#buscador_festejado').exists()) {
				/*Mesa correccion de copies en el Home Page*/
				$('.titulo_buscador_mesa').text('Encuentra el registro de pareja');
				$('.nombre_dato_buscador_mesa span.titulo_buscador_mesa').text('Busca por evento');
				$('.txt_buscador_mesa').text('');
		}

		/*-----------ALERTAS------------------*/
		/*-------CONTAR Y MARCAR CHECKBOXES-------*/
		/*Nuevas Alertas con Endeca*/
		$('.btn-comprar-modulo').on('click', function () {
				//$('#alertas').fadeIn(200);
		});

		//Estilo inicial del btn de comparar como desactivado
		$('#comparar input').css('backgroundPosition', '0px -191px');
		$('#comparar input').css('color', '#757575');

		/*QUITAR ALERTAS Y AVISOS*/
		$('#alertas, .alertas, #errors, .exito, .aviso, .error, .avisos, #messagesDiv,.alert-orders').on('click', function () {
				if ($(this).is(':visible')) {
						$(this).fadeOut('slow');
						/*PA Fix Start*/
						$("#main_wrapper,html,body").css({
								'overflow': 'visible'
						});
						$('body').css({
								'position': 'relative'
						});
						/*PA Fix end*/
				} else {
						$(this).fadeIn('slow');
				}
		});
		// Akamai changes to move teh DOM lemenet inside, After updating dom ON function doesnt work..So change dto BODY...
		$("body")
						.on(
										'click', '#comparar input, p.comparacion-ckb',
										function () {
												var checked = $("#contenidos input:checkbox:checked").length;
												if (checked <= 1) {
														$('.avisos').fadeIn(200);
														$('.aviso').fadeIn(200);
														$('#comparar input').css('backgroundPosition', '0px -191px');
														$('#comparar input').css('color', '#757575');
												} else {
														//Cambia el estilo del boton de comparar a Activo
														$('#comparar input').css('backgroundPosition', '0px -215px');
														$('#comparar input').css('color', '#000');
														$('p.comparacion-ckb').css('color', '#000');

												}
										});

		/*--------------------------------------*/


		if ($('#jq_fmslideshow_banners').exists()) {
				$('#jq_fmslideshow_banners').fmslideshow({
						//BANNER CENTRO
						//Nota: para modificar a pronfundidad ir a fmslideshow.js.

						banner_width: 738,
						banner_height: 267,

						slideShow: true,
						slideShow_delayTime: 5,

						image_background: "",
						image_topShadow: "",
						image_bottomShadow: "",

						background_fullScreen: true,
						background_move: true,
						background_moveDistance: 700,

						buttons_type: 1,
						buttons_autoHide: true,

						button_nextPrevious_autoHide: false,
						button_nextPrevious_type: 1,
						button_next_align: "C",
						button_next_spacing: "0,345",
						button_previous_align: "C",
						button_previous_spacing: "0,-345"

				});
		}


		//Seccion
		if ($('.slideshow').exists()) {


				$('.slideshow img').css('width', '742');
				$('.slideshow img').css('height', '343');

				$('.slideshow').fadeIn('slow');

				$('.slideshow')
								.before('<div id="nav">')
								.cycle({
										fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
										speed: 1000,
										pager: '#nav',
										fit: true,
										height: 341,
										width: 736,
										pause: 1
								});
		}

		if ($("a.switch_thumb").exists()) {
				$("a.switch_thumb").toggle(function () {
						$(this).addClass("swap");
						$("ul.display").fadeOut("fast", function () {
								$(this).fadeIn("fast").addClass("thumb_view");

								$(".tools").css("display", "block");
								$(".quantity").css("display", "block");
								$(".clear").css("display", "block");
								$(".descripcion_larga").css("display", "block");
								$("a#switch_1.switch_thumb").css("background", "url(assets/images/iconos/icono_vistas1.png)");

						});

				}, function () {
						$(this).removeClass("swap");
						$("ul.display").fadeOut("fast", function () {
								$(this).fadeIn("fast").removeClass("thumb_view");

								$(".tools").css("display", "none");
								$(".quantity").css("display", "none");
								$(".clear").css("display", "none");
								$(".descripcion_larga").css("display", "none");
								$("a#switch_1.switch_thumb").css("background", "url(assets/images/iconos/icono_vistas2.png)");

						});
				});
		}

		if ($(".callToolTip").exists()) {
				$(".callToolTip").hover(
								function () {
										$(this).find(".tooltip").stop(true, true).fadeIn("slow");
								},
								function () {
										$(this).find(".tooltip").stop(true, true).fadeOut("slow");
								}
				);
		}

		//CallBacks Portada Seccion
		if ($('#jq_fmslideshow').exists()) {
				//BANNER
				$('#jq_fmslideshow').fmslideshow({
						//BUNDLES
						//Nota: para modificar a pronfundidad ir a fmslideshow.js.

						banner_width: 736,
						banner_height: 341,

						image_background: "bg.png",
						image_topShadow: "top_border.png",
						image_bottomShadow: "bottom_border.png",

						background_fullScreen: true,
						background_move: true,
						background_moveDistance: 700,

						buttons_type: 1,
						buttons_autoHide: false,

						button_nextPrevious_autoHide: false,
						button_nextPrevious_type: 1,
						button_next_align: "C",
						button_next_spacing: "0,470",
						button_previous_align: "C",
						button_previous_spacing: "0,-470"
				});

		}

		if ($(".cateagoria_list").exists()) {
				//Reordena las columnas en seccion
				$('.cateagoria_list:eq(2)').before($("<br style='clear:both' />"));
		}



		if ($(".cateagoria_list").exists()) {
				//Reordena las columnas en seccion
				$('.cateagoria_list:eq(2)').before($("<br style='clear:both' />"));
		}

		/*Elimina el segundo #control-top*/

		if ($('.producto-modulo:eq(0)').exists()) {
				var me = 0;
				$('#contenidos').find('#controls-top').each(function () {
						me++;
						if (me == 2) {
								$(this).hide();
						}
				});

		}

		/*** Script para corregir el contenido cortado de las portadas de seccin ***/
		/* En explorer no jala bien el script con esto se soluciona */
		var is_ie = navigator.userAgent.toLowerCase().indexOf('msie ') > -1;

		if (is_ie) {
				if ($('div#st_horizontal').exists()) {
						// Horizontal Sliding Tabs demo
						$('div#st_horizontal').slideTabs({
								// Options
								contentAnim: 'slideH',
								contentAnimTime: 600,
								contentEasing: 'easeInOutExpo',
								autoHeight: true,
								tabsSlideLength: 0
						});
				}
		} else {
				if ($('div#st_horizontal').exists()) {
						// Horizontal Sliding Tabs demo
						$("img.bordergreybold").load(function () {
								var unoH = $("img.bordergreybold").height();
								$("#banner_img").css("height", unoH);
								$('div#st_horizontal').slideTabs({
										// Options
										contentAnim: 'slideH',
										contentAnimTime: 600,
										contentEasing: 'easeInOutExpo',
										autoHeight: true,
										tabsSlideLength: 0
								});
						});
				}
		}

		if ($('div#st_horizontal').exists()) {
				$('div#st_horizontal').slideTabs({
						contentAnim: 'slideH',
						contentAnimTime: 600,
						contentEasing: 'easeInOutExpo',
						autoHeight: true,
						tabsSlideLength: 0
				});
		}

		/*** fin **/

		if ($(".descripcion_heredada").exists()) {
				//ver mas button
				var alto = $(".descripcion_heredada");
				var altoNu = alto.innerHeight();
				$('.ver_mas').toggle(function () {
						$('.descripcion_larga').animate({
								height: altoNu
						}, 500);
						$(this).addClass('ver_mas_active')


				}, function () {
						$('.descripcion_larga').animate({
								height: 167
						}, 500);
						$(this).removeClass('ver_mas_active')
				});
		}

		if ($(".callToolTip").exists()) {
				$(".callToolTip").hover(
								function () {
										$(this).find(".tooltip").fadeIn("slow");
								},
								function () {
										$(this).find(".tooltip").fadeOut("slow");
								}
				);
		}
		if ($("div.talla_toggle").exists()) {
				$("div.talla_toggle").click(function () {
						// remove previous class if there is any
						$("div.talla_toggle").removeClass("talla_seleccionada");
						// add class to the clicked link
						$(this).addClass("talla_seleccionada");
						// this prevents browser from following clicked link
						return false;
				});
		}

		//MAC
		if ($('.tooltip').exists()) {
				$('.tooltip').hover(
								function () {
										$(this).find(".tooltip").fadeIn("slow");
								},
								function () {
										$(this).find(".tooltip").fadeOut("fast");
								}
				);
		}

		//Checkout
		if ($('#cross_sale').exists()) {
				//CROSS SALE
				$('#cross_sale').fmslideshow({
						//BUNDLES
						//Nota: para modificar a pronfundidad ir a fmslideshow.js.

						banner_width: 950,
						banner_height: 240,

						slideShow: true,
						slideShow_delayTime: 5,

						image_background: "bg.png",
						image_topShadow: "top_border.png",
						image_bottomShadow: "bottom_border.png",

						background_fullScreen: true,
						background_move: true,
						background_moveDistance: 700,

						buttons_type: 1,
						buttons_autoHide: false,

						button_nextPrevious_autoHide: false,
						button_nextPrevious_type: 1,
						button_next_align: "C",
						button_next_spacing: "0,470",
						button_previous_align: "C",
						button_previous_spacing: "0,-470"

				});



				$.fn.equalHeights = function (px) {
						$(this).each(function () {
								var currentTallest = 0;
								$(this).children().each(function (i) {
										if ($(this).height() > currentTallest) {
												currentTallest = $(this).height();
										}
								});
								if (!px || !Number.prototype.pxToEm)
										currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
								// for ie6, set height since min-height isn't supported
								if ($.browser.msie && $.browser.version == 6.0) {
										$(this).children().css({
												'height': currentTallest
										});
								}
								$(this).children().css({
										'min-height': currentTallest
								});
						});
						return this;
				};
		}
		if ($('.mensaje_regalo a.add_data').exists()) {

				$('.mensaje_regalo a.add_data').click(function () {
						$('.mensaje_regalo_tool').stop(true, true).slideToggle(400);
						return false;
				});

				$('.mensaje_regalo_tool a.shopping').click(function () {
						$('.mensaje_regalo_tool').stop(true, true).slideUp(400);
						return false;
				});

				$('.mensaje_regalo_tool a.add_data').click(function () {
						$('.mensaje_regalo_tool').stop(true, true).slideUp(400);
						return false;
				});

		}

		if ($('.nav_cerrar a').exists()) {
				//EDITAR DIRECCIN
				$('.nav_cerrar a').click(function () {
						$('.direccion_edit_cont').animate({
								height: 0
						}, 500);
						$('.editar_agregar_tarjeta').animate({
								height: 0
						}, 500);
				});
		}
		if ($('.edit_address').exists()) {
				$('.edit_address').toggle(function () {
						$('.direccion_edit_cont').animate({
								height: 800
						}, 500);
						$('a .edit_address').css('color', '#333333');

				}, function () {
						$('.direccion_edit_cont').animate({
								height: 0
						}, 500);
				});
		}
		if ($('.choose_card a').exists()) {
				//EDITAR TARJETA
				$('.choose_card a').toggle(function () {
						$('.editar_agregar_tarjeta').animate({
								height: 900
						}, 500);
				}, function () {
						$('.editar_agregar_tarjeta').animate({
								height: 0
						}, 500);

				});

		}



		//Eliminamos boorde derecho de ultima opcion de paginacion
		var pags = $('.paginacion > a').length;
		$(".paginacion > a:nth-child(" + pags + ")").css('border-right', 'none');

		if ($.browser.msie) {
				var ver = parseInt($.browser.version, 10);
				if (ver == 7) {
						//solo para IE7
						$(function () {
								var zIndexNumber = 100;
								$('div').each(function () {
										$(this).css('zIndex', zIndexNumber);
										zIndexNumber -= 3;

										$('.col_main').css('zIndex', (zIndexNumber + 30000));
										$('.recomendations').css('zIndex', (zIndexNumber + 30000));
										$('.modulo').css('zIndex', (zIndexNumber + 30000));
										$('.seccion_datos').css('zIndex', (zIndexNumber + 30000));
										$('.menu_portada').css('zIndex', (zIndexNumber + 30000));
										$('.breadcrumb-move').css('zIndex', (zIndexNumber + 30000));

								});

						});
				}

		}


		// Iguala la altura de los modulos en las recomendaciones "Otros productos"
		$.fn.equalHeights = function (minHeight, maxHeight) {
				tallest = (minHeight) ? minHeight : 0;
				this.each(function () {
						if ($(this).height() > tallest) {
								tallest = $(this).height();
						}
				});
				if ((maxHeight) && tallest > maxHeight)
						tallest = maxHeight;
				return this.each(function () {
						$(this).height(tallest).css("overflow", "hidden");
				});
		}

		$(".cols").equalHeights();
		$("#main_content .recomendations:eq(" + 0 + ") div.modulo").equalHeights();
		$("#main_content .recomendations:eq(" + 1 + ") div.modulo").equalHeights();
		$(".listado_productos div.modulo").equalHeights();


		/*****************************************************************************
		 ENDECA
		 ******************************************************************************/
		/* TYPEHEAD */
		$(document).keyup(function (e) {
				$('.field-search').keypress(function () {

					/*console.log( $("#hiddenSearchValues").attr("min"));*/
					if(!$('#typeahead').is(':visible') && ($(this).val().length + 1) >= $("#hiddenSearchValues").attr("min") ) {
						$('#typeahead').css('display', 'block');

						/*$("#main_wrapper").css('filter',"blur(5px)");
						$(".top-banner").css('filter',"blur(5px)"); temp aw*/

					}
				})
		});


		/*LEYENDAS DE SORT BY & VIEW */

		if ($('#controls-top #controls-pagination').exists()) {
				$('#controls-pagination:eq(0)').css('marginTop', '17px')
		}



		/* Modifica modulo en multiplos de 4 */
		var contre = 0;
		$(".producto-modulo").each(function () {
				contre++;
				if (contre == 5 || contre == 9 || contre == 13 || contre == 17) {
						$(this).css('border-left', 'none');
			 };
		});


		if ($('#filtros').exists()) {
				var h1 = $('.product-list ').innerHeight();
				var h3 = $('#controls-top').innerHeight();
				var h4 = $('#crumb-facets').innerHeight();
				var ad = 43;
				var nb = $('#controls-pagination').length;

				if ($('#controls-pagination:nth-child(2n)').exists()) {
						var h2 = $('#comparar').innerHeight() * 2;

				} else {
						var h2 = $('#comparar').innerHeight();
				}

				var sum = h1 + h3 + h4 + ad;

		}



		/* Layout  Change grid to Bigger Grid*/
		$('img.foto-modulo').css({
				marginLeft: '-7px'
		});

		/* ==============================================================================================================
		 EBOOKS GRID AND ENDECA GRID SWITCH VIEW
		 ==============================================================================================================*/

		$('#grid').live('click', function () {
				document.getElementById("viewType").value = "grid";
				if ($(this).hasClass("active")) {
						return false;
				} else {
						$('#list, #rows').removeClass("active")
						$(this).addClass("active")

						$('.product-list').fadeOut('slow', function () {
								$('.producto-modulo').removeClass('rowsview');

								$('.producto-modulo').attr('style', '');
								$('img.foto-modulo').attr('style', '');
								$('.comparacion-ckb').attr('style', '');
								$('.producto-modulo').css('padding', '0px');

								$('.producto-modulo').removeClass('producto-list');
								//$('.foto-modulo').removeClass('foto-list');
								$('.nombre-producto-modulo').removeClass('nombre-producto-list');
								$('.col-banderas-precio-comprar').removeClass('col-list');

								$('.btn-ver-promociones').css('position', 'absolute');
								$('.btn-ver-promociones').css('top', 'inherit');
								$('.btn-ver-promociones').css('left', 'inherit');

								$('.producto-modulo').addClass('producto-grid');

								$('.precio-tachado-modulo, .precio-modulo').css('position', 'static');
								$('.mod-abstract').css({
										display: 'none'
								});
								$('.product-list').fadeIn('slow');
						});
				}
				return false;
		});

		$('#list').live('click', function () {
				document.getElementById("viewType").value = "list";
				if ($(this).hasClass("active")) {
						return false;
						$('producto-grid').css('padding-left', '0px');
						$('.descuento').css({
								textAlign: 'left',
								paddingLeft: '4px'
						});

				} else {
						$('#grid').removeClass("active");
						$(this).addClass("active");
						$('.product-list').addClass("lista");


						$('.product-list').fadeOut('slow', function () {

								$('.producto-modulo').css({
										width: '288px',
										height: '500px',
										padding: '10px 10px 5px 10px'
								});

								$('.comparacion-ckb').css({
										marginBottom: '0px'
								});

								$('.descuento').css({
										textAlign: 'left',
										paddingLeft: '29px'
								});


								$('.producto-modulo:even').css({
										borderRight: 'none'
								});


								$('img.foto-modulo').css({
										marginLeft: '-27px'

								});


								$('.product-list').fadeIn('slow');


						});
				}
				return false;
		});
		if ($('body').hasClass("ebookbody"))
				onloadrows();

		$('#rows').live('click', function () {
				document.getElementById("viewType").value = "rows";
				if ($(this).hasClass("active")) {

						return false;
						$('producto-grid').css('padding-left', '0px');
						$('.descuento').css({
								textAlign: 'left',
								paddingLeft: '4px'
						});

				} else {

						$('#grid').removeClass("active");
						$(this).addClass("active");
						$('.product-list').addClass("rows view");


						$('.product-list').fadeOut('slow', function () {
								$('.producto-modulo').addClass('rowsview');
								$('.producto-grid').css({
										width: '743px',
										height: 'auto',
										padding: '10px 10px 5px 10px'
								});

								$('.comparacion-ckb').css({
										marginBottom: '0px',
										position: 'absolute'
								});

								$('.descuento').css({
										textAlign: 'left',
										paddingLeft: '29px'
								});
								$('.precio-tachado-modulo').css({
										right: '64px',
										top: '31px'
								});
								$('.precio-modulo').css({
										right: '71px',
										top: '51px'
								});
								$('.ebook-summary').css({
										'margin-top': '15px'
								});
								$('.producto-grid:even').css({
										borderRight: 'none'
								});
								$('.mod-abstract').css({
										display: 'block',
										float: 'left',
										width: '414px'
								});
								$('#product-list').fadeIn('slow');
						});
				}
				return false;
		});

		function onloadrows() {
				$('#rows').addClass("active");
				$('#grid').removeClass("active");
				$('.shop-list.product-list').fadeOut('slow', function () {
						$('.producto-modulo').addClass('rowsview');
						$('.pm-large').css({
								width: '743px',
								height: 'auto',
								padding: '10px 10px 5px 10px'
						});

						$('.comparacion-ckb').css({
								marginBottom: '0px',
								position: 'absolute'
						});

						$('.descuento').css({
								textAlign: 'left',
								paddingLeft: '29px'
						});
						$('.precio-tachado-modulo').css({
								position: 'absolute',
								right: '64px',
								top: '31px'
						});
						$('.precio-modulo').css({
								right: '71px',
								top: '51px'
						});
						$('.nombre-producto-modulo').css({
								'margin-top': '15px'
						});
						$('.producto-grid:even').css({
								borderRight: 'none'
						});
						$('.mod-abstract').css({
								display: 'block',
								float: 'left',
								width: '414px'
						});
						$('.product-list ').fadeIn('slow');

				});
		}
		/* ==============================================================================================================
		 END
		 EBOOKS GRID AND ENDECA GRID SWITCH VIEW
		 ==============================================================================================================*/
		/* Scroll-up animated */
		$(function () {

				$(window).scroll(function () {
						if ($(this).scrollTop() != 0) {
								$('#toTop').fadeIn();
						} else {
								$('#toTop').fadeOut();
						}
				});

				$('#toTop').live('click', function () {
						$('body,html').animate({
								scrollTop: 0
						}, 800);
				});
		});

		/* on/off talla */
		$('ul.tallasf li a').click(function () {
				//alert('entro');
				$(this).toggleClass('newClass');
				return false;
		});

		/************ FACETS CONTROL ***********************/
		$(".fac-container #tabs").each(function () {
				$(this).addClass('facTab');
		});

		var href = $(location).attr('href');
		if (href.match(/content/)) {
				//callback's to Facets Tabs
				$.getScript(contextPathAbs + "/assets/js/jquery-ui.js").done(function (script, textStatus) {

						$(".facTab").tabs();
						//$( "#tabs, #tabs2" ).tabs();
				}).fail(function (jqxhr, settings, exception) {});
		}
		/************ END FACETS CONTROL ***********************/

		/*Acordion*/
		$(".fac-title").live('click', function () {
				var i = 1;
				$(this).parent(".fac-wrapper").children(".fac-container").slideToggle('slow');
		});

		$(".fac-title").live('click', function () {
				var i = 1;
				$(this).parent(".fac-wrapper").children(".fac-containerscroll").slideToggle('fast');
				$(this).toggleClass("fac-title-menos");


		});



		/* Elimina columna de filtros y ajusta controles de header cuando solo hay un producto */
		var num_productos_seccion = $(".producto-modulo").length;

		if (num_productos_seccion == 0) {

				$("#filtros").css("display", "none");
				$("#crumb-facets").css("float", "none");
				$("#crumb-facets").css("width", "970px");
				$("#controls-top").css("width", "960px");
				$("#productos-seccion").css("width", "992px");

		}


		$("ul#new_user_register:contains('Inicia sesi')").css("display", "block");
		$("ul#new_user_register:contains('Salir')").css("display", "block");
		$("ul#new_user_register:contains('Salir')").parent().css({
				"display": "block",
				"position": "absolute",
				"right": "144px",
				"text-align": "center",
				"top": "52px",
				"width": "140px",
				"z-index": "10000000"
		});


		$('.sd_overlay').click(function () {
				$('#sd_container').remove();
				$('#sd_overlay').remove();
		});


});
//Function for credit system select box(Registered card drop down - Start)
function loadCard() {
		var id = $('#creditCard_type').val();
		var url = location.href.split("?", 1);
		location.href = url + '?refNo=' + id;
}
//Function for credit system select box(Registered card drop down - End)

//Timeout validation after onload (for recomendations)

$(window).load(function () {
		function hideRecs() {
				var $productCarrousel = $('#product_carrousel');
				var $recsProd = $("#product_carrousel .cs-rec");
				var $recsOracle = $('#recs_oracle');
				var $recomendations = $('#recomendations');
				var $col_left = $('aside#col_promo');
				var $main_content = $('#main_content');
				var $mod = $('div.col_main div.recomendations');
				var $modulo = $('div.col_main div.recomendations div.modulo');
				var $modulo_img = $('div.col_main div.recomendations div.modulo img.image');
				var $cs = $('div.col_main-segunda');
				var altura_gate3 = $('#gate_3').outerHeight();
				var $joder = $('div#main_content.col_main');

				if ($recsProd.length == 8) {
						if ($('#gate_3')[0])
								$productCarrousel.css('margin-top', altura_gate3 + 60);
						$recsOracle.stop().fadeIn(1750);
						$recomendations.stop().fadeIn(1750);
						$productCarrousel.stop().show('fast', function () {
								$joder.css('margin-top', '0px');
								/*  $main_content.css({marginTop:'4px'},0);*/
								$mod.css({
										marginTop: '15px',
										marginRight: '0',
										marginBottom: '0',
										marginLeft: '25px'
								}, 0);
								$modulo.css({
										width: '224',
										height: '224'
								}, 0);
								$modulo_img.css({
										width: '220',
										height: '160'
								}, 500);

						});

				}
	};
		$.fn.exists = function () {
				return $(this).length > 0;
		}
		window.setTimeout(hideRecs, 1800);


});
$('.boton_detalle_bolsa').css('z-index', '128 !important');

function etalage_load() {

		//Gallery
		$('#etalage').etalage({
				thumb_image_width: 520,
				thumb_image_height: 408,
				source_image_width: 972,
				source_image_height: 729,
				zoom_area_width: 490,
				zoom_area_height: 368,
				magnifier_opacity: 0.9,
				small_thumbs: 4,
				smallthumbs_position: 'left',
				autoplay: false
		});

}

function get_time_etalage() {
		return 8000;
}
$(document).ready(function () {

		(function (e) {
				e.fn.hoverIntent = function (t, n, r) {
						var i = {
								interval: 100,
								sensitivity: 7,
								timeout: 0
						};
						if (typeof t === "object") {
								i = e.extend(i, t)
						} else if (e.isFunction(n)) {
								i = e.extend(i, {
										over: t,
										out: n,
										selector: r
								})
						} else {
								i = e.extend(i, {
										over: t,
										out: t,
										selector: n
								})
						}
						var s, o, u, a;
						var f = function (e) {
								s = e.pageX;
								o = e.pageY
						};
						var l = function (t, n) {
								n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
								if (Math.abs(u - s) + Math.abs(a - o) < i.sensitivity) {
										e(n).off("mousemove.hoverIntent", f);
										n.hoverIntent_s = 1;
										return i.over.apply(n, [t])
								} else {
										u = s;
										a = o;
										n.hoverIntent_t = setTimeout(function () {
												l(t, n)
										}, i.interval)
								}
						};
						var c = function (e, t) {
								t.hoverIntent_t = clearTimeout(t.hoverIntent_t);
								t.hoverIntent_s = 0;
								return i.out.apply(t, [e])
						};
						var h = function (t) {
								var n = jQuery.extend({}, t);
								var r = this;
								if (r.hoverIntent_t) {
										r.hoverIntent_t = clearTimeout(r.hoverIntent_t)
								}
								if (t.type == "mouseenter") {
										u = n.pageX;
										a = n.pageY;
										e(r).on("mousemove.hoverIntent", f);
										if (r.hoverIntent_s != 1) {
												r.hoverIntent_t = setTimeout(function () {
														l(n, r)
												}, i.interval)
										}
								} else {
										e(r).off("mousemove.hoverIntent", f);
										if (r.hoverIntent_s == 1) {
												r.hoverIntent_t = setTimeout(function () {
														c(n, r)
												}, i.timeout)
										}
								}
						};
						return this.on({
								"mouseenter.hoverIntent": h,
								"mouseleave.hoverIntent": h
						}, i.selector)
				}
		})(jQuery)
		var a = [],
						c = [],
						b = [];
		d = [];
		$('div#menu_catalogos ul#menu.menu.sgray.fade').find('li.elemento').each(function () {
				a.push($(this).outerWidth(true));
				$(this).hoverIntent({
						sensitivity: 5, // number = sensitivity threshold (must be 1 or higher)
						interval: 100, // number = milliseconds for onMouseOver polling interval
						over: makeTall, // function = onMouseOver callback (REQUIRED)
						timeout: 200, // number = milliseconds delay before onMouseOut
						out: makeShort // function = onMouseOut callback (REQUIRED)
				});
				var columnas = $(this).find('ul#master_menu_container').attr('class');

				function makeTall() {
						$(this).find('ul#master_menu_container').fadeIn('slow');
				};

				function makeShort() {
						$(this).find('ul#master_menu_container').fadeOut('fast')
				};
		});
		b.push(a[0]);
		c.push(b[0]);
		for (var i = 1; i <= (a.length - 1); i++) {
				b.push(a[i] + a[i - 1]);
		};
		for (var j = 1; j <= b.length; j++) {
				c.push(b[j] + b[j + 1]);
		};


		$('.especial_elemento_10 a').attr('href', 'https://assets.liverpool.com.mx/shopping/store/shop.jsp?catId=cat861126');
		//alert('elementos menu\n'+ a +'\n elementos menu width\n'+ b +'\n c \n'+c);
});

jQuery(document).ready(function ($) {


		var marcas = ["Levi`s", "Nautica", "Aeropostale", "GAP", "Lacoste"];
		$('#master_menu_container.btncat610036 ').find('li#columna_5 div a').each(function () {
				var nombre = $(this).text();
				if (nombre.match(marcas[0])) {

						$(this).append('<div id="img_levis"></div>');
						$('#img_levis').css({
								'display': 'block',
								'height': '60px',
								'background': 'url(/assets/images/logos/levis_.jpg)',
								'width': '160px'
						});
				}
				if (nombre.match(marcas[1])) {

						$(this).append('<div id="img_nautica"></div>');
						$('#img_nautica').css({
								'display': 'block',
								'height': '60px',
								'background': 'url(/assets/images/logos/nautica_.jpg)',
								'width': '160px'
						});
				}
				if (nombre.match(marcas[2])) {

						$(this).append('<div id="img_aeropostale"></div>');
						$('#img_aeropostale').css({
								'display': 'block',
								'height': '60px',
								'background': 'url(/assets/images/logos/aeropostale_.jpg)',
								'width': '160px'
						});
				}
				if (nombre.match(marcas[3])) {

						$(this).append('<div id="img_gap"></div>');
						$('#img_gap').css({
								'display': 'block',
								'height': '60px',
								'background': 'url(/assets/images/logos/gap_.jpg)',
								'width': '160px'
						});
				}
				if (nombre.match(marcas[4])) {

						$(this).append('<div id="img_lacoste"></div>');
						$('#img_lacoste').css({
								'display': 'block',
								'height': '60px',
								'background': 'url(/assets/images/logos/lacoste_.jpg)',
								'width': '160px'
						});
				}

		});
		/*Endeca Oct Release*/
		/*if ($('#gate_3_1').exists()) {
		 $('#gate_3_1').prepend('<div id="brands-carousel"></div>');
		 var loadito = contextPathAbs +"/assets/web/images/targeted_promotions/es/html/brands-carousel/include-brands-carousel.html"
		 $('#brands-carousel').load(loadito);
		 }*/
		/** credit sections statment_download**/
		$("input[id='previous_months']").change(function () {
				$("#prev_months").show("slow");
				$("input[name='current_month']").removeAttr('checked');
		});

		$("input[id='current_month']").change(function () {
				$("#prev_months").hide("slow");
				$("input[name='previous_months']").removeAttr('checked');
		});
		$("#downloading").click(function () {
				var radioVal = $('input[name="month_download"]:checked').val();
				if (radioVal == 'current_month') {
						$('#current_month_downloading').submit();
				} else if (radioVal == 'previous_months') {
						var selectVal = $('#previous_months_select option:selected').val();
						$('#idURL').val(selectVal);
						if (selectVal != null && selectVal != '') {
								$('#previous_months_downloading').submit();
						}
				}
		});

		/* Ajuste de botn Agregar direccin, en Checkoutexpress */

		var href = $(location).attr('href');
		if (href.match(/step2/)) {
				if ($("a").hasClass("btn_pagar_precheckout") == true) {} else {
						$('a.super-gray.ctrl-data-checkout').css({
								marginTop: 35,
								marginBottom: 25,
								marginLeft: -8,
								float: "left",
								width: 123,
								paddingTop: 10,
								paddingBottom: 10
						});
				}
		}


		$.fn.exists = function () {
				return $(this).length > 0;
		}

		// Code using $ as usual goes here.
		if ($('.tallasf').exists()) {
				var cuantos = $('.tallasf li').length;
				var alto = $('a.en-talla').outerHeight();

				var linea = 2.8; //Divisor
				var altura = cuantos * alto / linea;

				$('ul.tallasf').innerHeight(altura);
		}


		$('.calcular_promo').live('click', function () {
				$('.calculo_promos').slideToggle('slow');
		});

		//  Caso default por si en los banners se ejecutan los fillers
		var gx1 = "/web/images/filler_banner_lateral_a.jpg"
		var y = $('aside#gate_1').find('img').attr('src');
		if (y = gx1) {
				$('aside#gate_1').find('img').css({
						'width': '190px',
						'position': 'relative',
						'top': '75px',
						'left': '20px'
				});
				$('#gate_1').css({
						'height': '320px',
						'min-height': '320px',
				});

		}


		var gx2 = "/web/images/filler_banner_lateral_b.jpg"
		var x = $('aside#gate_2').find('img').attr('src');
		if (x = gx2) {
				$('aside#gate_2').find('img').css({
						'width': '190px',
						'position': 'relative',
						'top': '75px'
				});
		}

		var pedido_detail = "/shopping/users/pedido_detail.jsp";
		var href = $(location).attr('href');
		if (href.match(pedido_detail)) {
				$('.linkaction').css({
						'position': 'relative',
						'width': '120px',
						'top': '-107px',
						'left': '500px'
				});
		}



});

function fix_pseudoplaceholder() {
		pseudoplaceholder($('#email'));
		pseudoplaceholder($('#password'));
		pseudoplaceholder($('#correo_electronico'));
}

function pseudoplaceholder(e) {
		if ($(e).exists()) {
				$(e).on('blur', function () {
						if ($(e).val() != "") {
								$(e).css({
										'background-image': 'none'
								})
						} else {
								$(e).css({
										'background-image': 'url("/assets/images/bg/pseudo-placeholder.jpg")'
								})
						}
				});
		}
}

/**************** THIS IS START OF THE SCRIPT THAT WILL BE IN THE script_main.js SO IT CAN FILTER EBOOKS ***********/
jQuery.expr[':'].Contains = function (a, i, m) {
		return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};
$("input.filterinput").live('keyup', function () {
		var filter = $(this).val();
		var inputId = $(this).attr('rel');
		var ebooksf = $('#' + inputId);
		if (filter) {
				// this one finds all anchors within the lis,
				// and shows them or hides them
				$matches = $(ebooksf).find('a:Contains(' + filter + ')').parent();
				$('li', ebooksf).not($matches).slideUp();
				$matches.slideDown();
		} else {
				$(ebooksf).find("li").slideDown();
		}
		return false;
})

/**************** THIS IS END OF THE SCRIPT THAT WILL BE IN THE script_main.js SO IT CAN FILTER EBOOKS ***********/


/******************Credit System*****************************/


/******************Listing Page flag auto adjustment*****************************/
$(document).ready(function () {
		$('#grid').live('click', function () {
				$('.flagcontent').css('height', 'auto');
				var itemsPerRow = 5,
								items = $('.flagcontent'),
								rows = items.length / itemsPerRow,
								r, min, max;
				if (rows < 1)
						rows = 1;
				for (r = 0; r < rows; r++) {
						min = itemsPerRow * r,
										max = min + itemsPerRow;
						normalizeHeight(items.slice(min, max));
				}
		});
		$('#list').live('click', function () {
				$('.flagcontent').css('height', 'auto');
				var itemsPerRow = 5,
								items = $('.flagcontent'),
								rows = items.length / itemsPerRow,
								r, min, max;
				if (rows < 1)
						rows = 1;
				for (r = 0; r < rows; r++) {
						min = itemsPerRow * r,
										max = min + itemsPerRow;
						normalizeHeight(items.slice(min, max));
				}
		});
});

function normalizeHeight(items) {
		var maxHeight = 0,
						itemHeight;
		items.each(function () {
				itemHeight = $(this).height();
				if (itemHeight > maxHeight) {
						maxHeight = itemHeight;
				}
		}).height(maxHeight + 60 + 'px');
}

function normalizeHeightcompare(items) {
		var maxHeight = 0,
						itemHeight;
		items.each(function () {
				itemHeight = $(this).height();
				if (itemHeight > maxHeight) {
						maxHeight = itemHeight;
				}
		}).height(maxHeight + 'px');
}
/************* flag height manage ************/
function flagnormalheight(size) {
		var itemsPerRow = size,
						items = $('.heightarrange'),
						rows = items.length / itemsPerRow,
						r, min, max;
		if (rows < 1)
				rows = 1;
		for (r = 0; r < rows; r++) {
				min = itemsPerRow * r,
								max = min + itemsPerRow;
				normalizeHeightcompare(items.slice(min, max));
		}
}

(function ($) {
		$(document).ready(function () {
				var itemsPerRow = 5,
								items = $('.flagcontent'),
								rows = items.length / itemsPerRow,
								r, min, max;
				if (rows < 1)
						rows = 1;
				for (r = 0; r < rows; r++) {
						min = itemsPerRow * r,
										max = min + itemsPerRow;
						normalizeHeight(items.slice(min, max));
				}
				if ($("#content").find('.comparacion-view').hasClass("modulos-4")) {
						var itemsPerRow = 4,
										items = $('.modulo-comparacion'),
										rows = items.length / itemsPerRow,
										r, min, max;
						flagnormalheight(4)
						if (rows < 1)
								rows = 1;
						for (r = 0; r < rows; r++) {
								min = itemsPerRow * r,
												max = min + itemsPerRow;
								normalizeHeightcompare(items.slice(min, max));
						}

				}
				if ($("#content").find('.comparacion-view').hasClass("modulos-2")) {
						var itemsPerRow = 2,
										items = $('.modulo-comparacion'),
										rows = items.length / itemsPerRow,
										r, min, max;
						flagnormalheight(2);
						if (rows < 1)
								rows = 1;
						for (r = 0; r < rows; r++) {
								min = itemsPerRow * r,
												max = min + itemsPerRow;
								normalizeHeightcompare(items.slice(min, max));
						}
				} else if ($("#content").find('.comparacion-view').hasClass("modulos-3")) {
						var itemsPerRow = 3,
										items = $('.modulo-comparacion'),
										rows = items.length / itemsPerRow,
										r, min, max;
						flagnormalheight(3)
						if (rows < 1)
								rows = 1;
						for (r = 0; r < rows; r++) {
								min = itemsPerRow * r,
												max = min + itemsPerRow;
								normalizeHeightcompare(items.slice(min, max));
						}
				} else {
						var itemsPerRow = 4,
										items = $('.modulo-comparacion'),
										rows = items.length / itemsPerRow,
										r, min, max;
						flagnormalheight(4);
						if (rows < 1)
								rows = 1;
						for (r = 0; r < rows; r++) {
								min = itemsPerRow * r,
												max = min + itemsPerRow;
								normalizeHeightcompare(items.slice(min, max));
						}
				}

		});

}(jQuery));

/**************** SCRIPT ADDED FOR CREDIT SYSTEM FOR TAKING FLOAT VALUES ONLY AND AVOIDING ALPHABETS  ***********/
function isNumberKey(event) {
		var e = event || window.event;
		var src = e.srcElement || e.target;
		var charCode = e.which || e.keyCode || e.charCode;
		if ((charCode > 31 && charCode != 36) && (charCode < 48 || charCode > 57) && charCode != 46) {
				return false;
		} else if (e.keyCode == 8) {
				return true;
		} else {
				var input = src.value;
				var len = input.length;
				var index = input.indexOf('.');

				if (index > 0 && charCode == 46)
						return false;

				if (index > 0 || index == 0) {
						var CharAfterdot = (len + 1) - index;
						if (CharAfterdot > 3)
								return false;
				}

				if (charCode == 46 && input.split('.').length > 1) {
						return false;
				}
		}
		return true;
}

function getAvailablePayment(selectedPG, isLoggedIn, contextPath, onPageLoad, refreshBillingPage) {
		$.post(contextPath + "/checkout/includes/checkAvailablePaymentOptios.jsp", {
				selectedPG: selectedPG
		},
						function (data) {
								var isCIEAvailable = $(data).filter("#cieNotAvailable").val();
								var isCIENotAvailable = $(data).filter("#ciePaymentError").val();
								if (selectedPG == 'CIEBancomer') {
										$("#loading").show();
										$.post(contextPath + "/checkout/includes/addCIEPayment.jsp", {
												isCIEAvailable: isCIEAvailable,
												selectedPG: selectedPG
										},
														function (data) {
																if (isCIEAvailable == 'true') {
																		$('#search_jq_opt').html(data);
																} else {
																		$("#search_jq_opt").hide();
																		$(".selecttarjeta_a").prop("checked", false);
																		if (onPageLoad == 'false') {
																				showErrorMsg(isCIENotAvailable);
																		}
																}
																$("#loading").hide().delay();
																//Start: Commented out for SiteRedesign bugzilla defect 7385 - Not required as handled in JSP level
																/*var selects = $("#list_products select");
																 for (var i = 0; i < selects.length; i++) {
																 if (selects[i].id.indexOf('promoCode_') == 0) {
																 var test = $(selects[i]).attr('id');
																 $("#" + test).val(window.localStorage.getItem(test));
																 }
																 }*/
																//End: Commented out for SiteRedesign bugzilla defect 7385 - Not required as handled in JSP level
																//window.localStorage.clear();
																if (isLoggedIn == 'true' && refreshBillingPage) {
																		window.location.href = contextPath + "/checkout/billing.jsp";
																}
														});
								} else if (selectedPG == 'paypal') {
										$("#loading").show();
										$.post(contextPath + "/checkout/includes/addPaypalPayment.jsp", {
												selectedPG: selectedPG
										},
														function (data) {
																$('#search_jq_opt').html(data).show();
																$("#loading").hide();
																//Start: Commented out for SiteRedesign bugzilla defect 7385 - Not required as handled in JSP level
																/*var selects = $("#list_products select");

																 for (var i = 0; i < selects.length; i++) {
																 if (selects[i].id.indexOf('promoCode_') == 0) {
																 var test = $(selects[i]).attr('id');
																 $("#" + test).val(window.localStorage.getItem(test));
																 }
																 }*/
																//End: Commented out for SiteRedesign bugzilla defect 7385 - Not required as handled in JSP level
																//window.localStorage.clear();
																if (isLoggedIn == 'true' && refreshBillingPage) {
																		window.location.href = contextPath + "/checkout/billing.jsp";
																}
														});
								} else {
										if (isLoggedIn == 'false') {
												$("#loading").show();
												$.post(contextPath + "/checkout/includes/addCards.jsp", {
														selectedPG: selectedPG
												},
																function (data) {
																		$('#search_jq_opt').html(data).show();
																		$("#loading").hide();
																		/*drawFlag();*/
																		//Start: Commented out for SiteRedesign bugzilla defect 7385 - Not required as handled in JSP level
																		/*var selects = $("#list_products select");
																		 for (var i = 0; i < selects.length; i++) {
																		 if (selects[i].id.indexOf('promoCode_') == 0) {
																		 var test = $(selects[i]).attr('id');
																		 $("#" + test).val(window.localStorage.getItem(test));
																		 }
																		 }*/
																		//End: Commented out for SiteRedesign bugzilla defect 7385 - Not required as handled in JSP level
																		$('#myBagSummaryID').load(contextPath + "/checkout/includes/myBagSummary.jsp");
																});
										} else {
												$("#loading").show();
												$.post(contextPath + "/checkout/includes/displayCards.jsp", {
														selectedPG: selectedPG
												},
																function (data) {
																		$('#search_jq_opt').html(data).show();
																		$("#loading").hide();
																		/*drawFlag();*/
																		//Start: Commented out for SiteRedesign bugzilla defect 7385 - Not required as handled in JSP level
																		/*var selects = $("#list_products select");
																		 for (var i = 0; i < selects.length; i++) {
																		 if (selects[i].id.indexOf('promoCode_') == 0) {
																		 var test = $(selects[i]).attr('id');
																		 if (window.localStorage.getItem(test) !== null) {
																		 $("#" + test).val(window.localStorage.getItem(test));
																		 }
																		 }
																		 }*/
																		//End: Commented out for SiteRedesign bugzilla defect 7385 - Not required as handled in JSP level
																		//window.localStorage.clear();
																		if (refreshBillingPage) {
																				window.location.href = contextPath + "/checkout/billing.jsp";
																		}
																});
										}
								}
						});
}

function showErrorMsg(message) {
		var errorHtml =
						"<div class='alerta error'>" +
						"<span class='icono_aviso'>" +
						"<img src='" + contextPathAbs + "/assets/web/images/icono_error.gif' border='0' alt=''/>" +
						"</span>" +
						message +
						"</div>"; /*Absolute path changes for icono_error.gif*/
		jQuery("#alertas").html(errorHtml);
		jQuery("#alertas").show();
		return false;
}

//Start -- Script added for load tabs on selection in credit system

$(document).ready(function () {
		var selectedCard = $('#card').val();

		if (selectedCard != null) {
				setTimeout(function () {
						document.getElementById(selectedCard).click()
				}, 30);

		}
});
//End -- Script added for load tabs on selection in credit system

//Start -- Script added for avoiding special characters
function alpha(e) {
		var k;
		document.all ? k = e.keyCode : k = e.which;
		return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}
//End -- Script added for avoiding special characters

$(document).ready(function () {
		$('.dilisa_promos').click(function () {
				$('.block_promo_by_card a').removeClass('active');
				$(this).addClass('active');
				$('#premiumCards ,#universityCard ,#fashionCard').hide();
				$('#dilsaCard').show();
		});

		$('.premium_promos').click(function () {
				$('.block_promo_by_card a').removeClass('active');
				$(this).addClass('active');
				$('#dilsaCard ,#universityCard ,#fashionCard').hide();
				$('#premiumCards').show();
		});
		$('.university_promos').click(function () {
				$('.block_promo_by_card a').removeClass('active');
				$(this).addClass('active');
				$('#dilsaCard ,#premiumCards ,#fashionCard').hide();
				$('#universityCard').show();
		});
		$('.fashion_promos').click(function () {
				$('.block_promo_by_card a').removeClass('active');
				$(this).addClass('active');
				$('#dilsaCard ,#premiumCards ,#universityCard').hide();
				$('#fashionCard').show();
		});
});

function submitBancomer() {
		var amountPaid1 = $('#importe').val();
		var amountToBePaid = $("#amountToBePaid").val();
		var amountPaid = amountPaid1.replace(/[$,]/gi, '');
		if (amountPaid < 15) {
				var message = $("#requiredMinAmount").val();
				showErrorMsg(message);
		} else {
				var creditCardId = $('#credit').val();
				window.location.href = "submitToBancomer.jsp?refNo=" + creditCardId + "&amountPaid=" + amountPaid;
		}
}

function SendBanamex() {
		var availableAmount1 = $('#importeBanamex').val();
		var availableAmount = availableAmount1.replace(/[$,]/gi, '');
		var minAmount = $("#minimumPayment").val();

		if (availableAmount < 15) {
				var message = $("#requiredMinAmount").val();
				showErrorMsg(message);
		} else {
				var creditCardId = $('#banmaxCredit').val();
				var url = "submitToBanamex.jsp?availableAmount=" + availableAmount + "&refNo=" + creditCardId;
				var dispara = window.open(url, "help", "width=720,height=500,scrollbars=yes,dependent=yes,status=yes");
		}
}


$(function () {
		var currentUrl = document.referrer;
		if (currentUrl.indexOf('24x7') >= 0) {
				$("#dateIni").datepicker({
						dateFormat: 'dd/mm/yy'
				});
				$("#dateFin").datepicker({
						dateFormat: 'dd/mm/yy'
				});
				$("#dateIniStatus").datepicker({
						dateFormat: 'dd/mm/yy'
				});
				$("#dateFinStatus").datepicker({
						dateFormat: 'dd/mm/yy'
				});
		}
});



function onlyNumbers(input) {
		return input.value.replace(/\D/gi, "");
}

$(document).ready(function () {
		var currentUrl = document.referrer;
		if (currentUrl.indexOf('24x7') >= 0) {
				if (null) {
						$("#searchRadioRef").click();

				} else if (null) {
						$("#searchRadioDate").click();
				} else if (null) {
						$("#searchRadioSelect").click();
						$("#statusSelected option[value=]").attr("selected", true);
				}


				$("input[name=processAll]").change(function () {
						$('input[type=checkbox]').each(function () {
								if ($("input[name=processAll]:checked").length == 1) {
										this.checked = true;
								} else {
										this.checked = false;
								}
						});
				});
		}

		/***optica fix***/
		$("<span class='clear-lens'></span>").insertAfter($(".power-tooltip"));
		$("<span class='clear-lens'></span>").insertAfter($(".cilindro-tooltip"));

});

function btnSearchForOrder() {
		var form = document.getElementsByName("searchForOrderDetails");
		$(form).removeAttr("action");
		$("#btnSearchForOrderDetails").click();
		event.returnValue = false;
}

function exportCvs(isExportjs) {
		$("#btnSubmitForExport").click();
		event.returnValue = false;

}
/* Defect id 11619 fix Start*/
/* ID: JS201612060001 */
$(function () {
		var is_iPad = navigator.userAgent.match(/iPad/i) != null;
		var tshold = 200;
		if (is_iPad) {
				tshold = 760;
		}
		if ($('img.lazy').exists()) {
				var lazy_img = $("img.lazy")
				$.each(lazy_img, function(e, t) {
					if($('#'+this.id).attr("data-original") != undefined && $('#'+this.id).attr("data-original") != null && $('#'+this.id).attr("data-original") == '+'){
						$('#'+this.id).attr("data-original", contextPathAbs+"/assets/images/fillers/filler_REC.gif");
					}
				});
			$("img.lazy").lazyload({
				effect: "fadeIn",
				threshold: tshold,
			});
		}
});
/* Defect id 11619 fix End */
/**************** THIS IS END OF THE SCRIPT THAT WILL BE IN THE script_main.js SO IT CAN ADJUST FLAGS on Listing page ***********/


$(function () {
		$('#cat3410054 ul.btncat3410054').find('li .contenedor_1 ul').css({
				'display': 'block',
				'height': '40px',
				'overflow': 'hidden',
				'margin': ' 0 0 10px 0 ',
				'padding': '0'
		});
		$('#cat3410054 ul.btncat3410054').find('li .contenedor_1 ul li').css({
				'padding': '0',
				'height': 'auto',
				'float': 'none'
		});
		$('#cat3410054 ul.btncat3410054').find('li').css({
				'float': 'none',
				'height': 'auto'
		});

		$('#cat3410054 ul.btncat3410054 .contenedor_1').css({
				'margin': '0px'
		});

		$('#cat3410054 ul.btncat3410054').find('#columna_1,#columna_2').wrapAll('<div class="damas_columna"></div>');
		$('#cat3410054 ul.btncat3410054').find('#columna_3,#columna_4').wrapAll('<div class="caballeros_columna"></div>');
		$('#cat3410054 ul.btncat3410054').find('#columna_5').wrapAll('<div class="ninos_columna"></div>');
		$('.damas_columna,.caballeros_columna,.ninos_columna').css({
				'width': '200px',
				'position': 'relative',
				'float': 'left',
				'padding': '0 0 0 15px '
		});

		$('.damas_columna').append('<h2 class="htes"><span class="bbd">Damas</span><h2>');
		$('.caballeros_columna').append('<h2 class="htes"><span class="bbd">Caballeros</span><h2>');
		$('.ninos_columna').append('<h2 class="htes"><span class="bbd">Infantiles</span><h2>');

		$('.columnas.columna_5.columna_banner').remove();
		$('#cat3410054 ul#master_menu_container.btncat3410054').css({
				'width': '800px'
		});

		$('.ninos_columna').css({
				'width': '402px'
		})

		$('#cat3410054 ul.btncat3410054 .see_all_sections').remove();

});

//para tinas
$(function () {
		var skutinas = ['1018254073', '1018255380', '1018255398', '1018256777', '1018256793', '1018256807', '1018257331', '1018257340', '1022530239'];
		var lsku = $('.sku_detalle').text();
		$(skutinas).each(function (a, b) {
				if (lsku.match(b)) {
						if ($('#st_content_1').exists()) {
								$('#st_content_1').find('.descripcion_larga .descripcion_heredada ol#detalle_producto_bullets').append('<li style="list-style-type: none;"><a class="link_politicas" target="_blank" href="/assets/pieces/politicas-devolucion.pdf">Políticas de devolución</a></li>');
						} else {}
				}
		});
});


//cabiar clases entre fabricas y liverpool
$(function () {
		var fabricasmatch = $(location).attr('href');
		if (fabricasmatch.match(/fabricasdefrancia\.com\.mx/)) {
				$('body').find('.back-liver').each(function (a, b) {
						$(this).removeClass('back-liver');
						$(this).addClass('back-fabricas ');
				});
				$('body').find('.liver').each(function (a, b) {
						$(this).removeClass('liver');
						$(this).addClass('fabricas ');
				});
		} else {}
});

//para big ticket
$(function () {
		var lsku = $('#pdpaddItemToCartForm input');
		$(lsku).each(function (a, b) {
				var t02 = $(this).attr('id');

				if (t02 == "Big Ticket") {
						if ($('#st_content_1').exists()) {
								$('#st_content_1').find('.descripcion_larga .descripcion_heredada ol#detalle_producto_bullets').append('<li style="font-weight:bold;list-style-type: none;padding: 5px 0  0 10px;font-size: 13px;">Una vez validada la compra, Liverpool se pondr&aacute; en contacto con usted para especificar el Tiempo de Entrega.</li>');
						} else {}

				}
		});

});

$(document).ready(function () {
		$("#coasdntent a").hover(function () {
				$(".showOnHover").fadeIn('fast');
		});
		//show just to flags with higger priority
		var flasPrio = {
				"preventa": 1,
				"piezas-limitadas": 2,
				"promocion-exclusiva": 3,
				"entrega-express": 4,
				"paquete-exclusivo": 5,
				"flag-entrega-domicilio": 6,
				"flag-paypal": 7
		}
		if ($(".flagscotent")) {
				$(this).children("div").each(function (a, b) {
						alert("a: " + a + "b: " + b);
				})
		}
		//Ajuste para megamenu
		$(".dropdown-menu").mouseover(function () {
				var megamen = $(".dropdown-menu").height() - 15;
				$(".departamentos").css("min-height", megamen);
				$("#main_wrapper").css('filter',"filter(5px)");
							$(".top-banner").css('filter',"filter(5px)");
		});

		$(".dropdown-menu").mouseleave(function () {
						$("#main_wrapper").css('filter',"none");
						$(".top-banner").css('filter',"none");
						$(".depart-dropdown-menu").css("margin-top","0px");
		});
		$("#menu_catalogos").mouseleave(function(){
			$("#main_wrapper").css('filter',"none");
			$(".top-banner").css('filter',"none");
			$(".depart-dropdown-menu").css("margin-top","0px");
		});

		//Remove anonymus user inicia sesin arrow, turn it on logged user
		if ($("#login").text() == "") {
				$("#user_login #login_btn .icon-liv-thin-down-05").remove();
		}
		$("#menu_catalogos .edocuent .icon-liv-right-06").remove();
});
$(function () {
		$('#coasdntent').hoverIntent({
				sensitivity: 5, // number = sensitivity threshold (must be 1 or higher)
				interval: 100, // number = milliseconds for onMouseOver polling interval
				over: makeTall, // function = onMouseOver callback (REQUIRED)
				timeout: 5000, // number = milliseconds delay before onMouseOut
				out: makeShort // function = onMouseOut callback (REQUIRED)
		});

		function makeTall() {
				var startop = 85;
				var vnt_length = $('#dynaDDL div').length * 5;
				if ($('#dynaDDL').length == '1') {
						startop = startop + vnt_length;
				}
				$("body").find(".rating-stars").css({
						display: "block",
						width: "160px",
						position: "absolute",
						top: startop,
						height: "186px",
						right: "0",
						padding: "10px",
						border: "1px solid #DBDBDB",
						"z-index": " 99999"
				});
				$("body").find("a.rat-empty.start_item,span.rating-number,p.rate_no ").css({
						display: "block",

				});
				$("body").find("rating-number").fadeIn('slow');
				var c = false;
				if (!c) {
						c = true;
						var b = 0;
						var a = null;

						function d() {
								$(".meter-value").each(function () {
										var e = $(this).attr("id").toString();
										var f = e.replace("ho", "");
										for (i = 0; i <= f; i++) {
												$(this).css("width", i + "%")
										}
								})
						}
						a = setInterval(d, 20)
				}
		};

		function makeShort() {

				$("body").find(".rating-stars,a.rat-empty.start_item, span.rating-number,p.rate_no").fadeOut('fast');

		};

});

$(function () {
		//background opacity / there are many differences in the structures of every section, that is why so much code is needed
		if ($(".container_nh").is(":visible")) {
				$(".container_nh").prepend("<div class='backopacity'></div>");
		}
		//marcas visibility hidden
		setTimeout(function () {
				$(".brands_all").css("display", "none");
		}, 100);
		$("#menu .active").not("#buscar, #bag, #user_login").hoverIntent({
				sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)
				interval: 40, // number = milliseconds for onMouseOver polling interval
				over: makeTall, // function = onMouseOver callback (REQUIRED)
				timeout: 40, // number = milliseconds delay before onMouseOut
				out: makeShort // function = onMouseOut callback (REQUIRED)
		});

		function makeTall() {
				$(".backopacity").fadeIn();
				if ($(this).hasClass("brands_a0")) {
						$(".brands_all").css("display", "block");
				}
		};

		function makeShort() {
				$(".backopacity").fadeOut();
				if ($(this).hasClass("brands_a0")) {
			$(".brands_all").css("display", "none");
		}
	};

})

$(function () {
		if (url.match(/cat480114/)) {
				$('.fondo_blanco').append("<div id='head_mac'><img src='/assets/images/logos/logo_mac.jpg' alt='MAC' title='MAC'></div>");
		}
		/** REMOVE MORE THAN 2 FLAGS ON PLP **/
		$('.product-list-seccion').length > 0 ? removeFlags($('.product-listing-seccion').find('.shop-list')) : false;

		function removeFlags(e) {
				$(e).children().each(function () {
						$a = $(this).find('.flagscotent').children();
						$a.each(function (index, val) {
								if (index > 1)
										$(this).remove();
						});
				});
		}

})




/*To search with pasted string from the total string with out '*' */
function text_diff(first, second) {
		var start = 0;
		while (start < first.length && first[start] == second[start]) {
				++start;
		}
		var end = 0;
		while (first.length - end > start && first[first.length - end - 1] == second[second.length - end - 1]) {
				++end;
		}
		end = second.length - end;
		return second.substr(start, end - start);
}
/*Restrict copy and paste of '*' in searchBox page*/
$('#buscador').live('paste', function () {
		var self = $(this);
		var orig = self.val();
		setTimeout(function () {
				var pasted = text_diff(orig, $(self).val());
				while (pasted.indexOf('*') != -1) {
						var res = pasted.replace('*', '');
						pasted = res;
				}
				while (pasted.indexOf('=') != -1) {
						var res = pasted.replace('=', '');
						pasted = res;
				}
				$('#buscador').val(orig + pasted);

		});
});
/*Restrict copy and paste of '*' in NoSearchResults page*/
$('#busc').live('paste', function () {
		var self = $(this);
		var orig = self.val();
		setTimeout(function () {
				var pasted = text_diff(orig, $(self).val());
				while (pasted.indexOf('*') != -1) {
						var res = pasted.replace('*', '');
						pasted = res;
				}
				while (pasted.indexOf('=') != -1) {
						var res = pasted.replace('=', '');
						pasted = res;
				}
				$('#busc').val(orig + pasted);

		});
});
$(document).ready(function () {
		//Allow only alphanumerics no special chars
		//ireis 259 defect start
		$('#buscador,#busc').bind('change keyup keypress', function (key) {
				if ($(this).val() == '') {
						$(".backopacity").fadeOut();
				}
				// $(this).val($('#buscador').val().replace('=', ''));
				//$(this).val($('#buscador').val().replace('*', ''));
				$(this).val($(this).val().replace(/[`�.<>\{\}\[\]\\\Ǭ��=?�;:�'",�?�������������~!�@#$%^&*()_|+]/gi, ''));
		});
		$('.search_box_form').submit(function (e) {
				if ($('#buscador').val().length > 1) {
						return true;
				} else {
						return false;
				}
				e.preventDefault();
		});
		//ireis 259 defect end
});
//script en prueba para consultar tallas en PDP
$(document).ready(function () {
		function botontallas(categorin) { //https://assets.liverpool.com.mx/guia-de-tallas/
				var elurl = 'https://assets.liverpool.com.mx/guia-de-tallas/' + categorin;
				$('.asdas').on('click', function () {
						$.fancybox({
								'padding': 12,
								'autoCenter': true,
								'autoScale': true,
								'autoSize': true,
								'autoDimensions': true,
								'type': 'iframe',
								'width': '80%',
								'href': elurl,
								'scrolling': 'no',
								'overlayShow': true,
								'overlayOpacity': .8,
								'enableEscapeButton': true
						});
				})
		}
		//Json contingencia
		$(document).ready(function () {

				function validaRangoFecha(numerito) {
						var skusfeos = [];
						var fileRandRound = Math.round((Math.random() * 9000) + 1000);
						var jsonRand = "https://assets.liverpool.com.mx/assets/js/contingenciachanel.json" + "?version=" + numerito;

						$.getJSON(jsonRand, function (data) {
								$.each(data, function (key, val) {
										skusfeos.push(val);
								});
								CompareFeitos(skusfeos);
						});
				}

				function CompareFeitos(skusfeos) {
						for (var i = 0; i < skusfeos.length; i++) {
								DeleteSkusMalitos(skusfeos[i]);
						}
				}

				function DeleteSkusMalitos(arraymalito) {
						var urlpdp = url.substring(url.lastIndexOf("/") + 1);
						if (urlpdp.match(arraymalito)) {
								$("body").fadeOut();
								window.location.href = 'https://www.liverpool.com.mx';
						} else {
								$(".product-list .producto-modulo a.product-name").each(function () {
										urlprod = $(this).attr("href");
										var urlresulti = urlprod.substring(urlprod.lastIndexOf("=") + 1);
										if (arraymalito == urlresulti) {
												$(this).parent("li").css("display", "none");
										}
								});
						}
				}
		});


		// var plo = window.location;
		// var plpl = plo+"?format=json";
		// $.getJSON( plpl, function( data ) {
		//var guiatallas = data.contents[0].mainContent[0].record.attributes["allAncestors.repositoryId"];
		var guiatallas = $(".ancestorsId");
		$(guiatallas).each(function (a, b) {
				b = $(this).val();
				/*MODA NI�AS AKMAI CHANGES- DO NOT MAKE HREF=# as it will modify the URL*/
				if (b == "cat1370606") {
						$('#tools_producto').append('<a href="javascript:void(0)" class="asdas">Ver guía de tallas</a>').promise().done(function () {
								botontallas("index.html");
						});
				}
				/*MODA NI�OS*/
				else if (b == "cat1370607") {
						$('#tools_producto').append('<a href="javascript:void(0)" class="asdas">Ver guía de tallas</a>').promise().done(function () {
								botontallas("ninos.html");
						});
				}
				/*DAMAS ROPA*/
				else if (b == "cat660082") {
						$('#tools_producto').append('<a href="javascript:void(0)" class="asdas">Ver guía de tallas</a>').promise().done(function () {
								botontallas("damas.html");
						});
				}
				/*DAMAS TALLAS ESPECIALES*/
				else if (b == "cat1280856") {
						$('#tools_producto').append('<a href="javascript:void(0)" class="asdas">Ver guía de tallas</a>').promise().done(function () {
								botontallas("damas.html");
						});
				}
				/*CABALLEROS ROPA*/
				else if (b == "cat610037") {
						$('#tools_producto').append('<a href="javascript:void(0)" class="asdas">Ver guía de tallas</a>').promise().done(function () {
								botontallas("caballeros.html");
						});
				}
				/*CABALLEROS JUVENILES*/
				else if (b == "cat1160937") {
						$('#tools_producto').append('<a href="javascript:void(0)" class="asdas">Ver guía de tallas</a>').promise().done(function () {
								botontallas("caballeros.html");
						});
				}
				/*BEBES POR EDADES*/
				else if (b == "cat4120004") {
						$('#tools_producto').append('<a href="javascript:void(0)" class="asdas">Ver guía de tallas</a>').promise().done(function () {
								botontallas("bebes.html");
						});
				}
				/*CALZADO*/
				else if (b == "cat3410054") {
						$('#tools_producto').append('<a href="javascript:void(0)" class="asdas">Ver guía de tallas</a>').promise().done(function () {
								botontallas("calzado.html");
						});
				}
		})

		//Funcion alt en vista grid y lista

		$('.btns_gris#grid').prop('title', 'Vista en mosaico');
		$('.btns_gris#list').prop('title', 'Vista en lista');

});




// FIX for CDL description in detail page
$(function () {
		$(".fecha-publicacion").length > 0 ? replaceHTMLToSpanish() : false;
});

function replaceHTMLToSpanish() {
		var fechaLongString2 = $(".fecha-publicacion").text().split(":");
		var languajeInHtml = $(".idioma").text();
		var fechaLongNumber = parseInt(fechaLongString2[1].trim(), 10);
		var date = new Date(fechaLongNumber);
		$(".fecha-publicacion").html('A&ntilde;o de publicaci&oacute;n: ' + date.getFullYear());
		changeLanguajeToSpanish(languajeInHtml);
}

function changeLanguajeToSpanish(languajeInHTML) {
		var strSplit = languajeInHTML.toLowerCase();
		var resSplit = strSplit.split(":");
		var commonText = 'Idioma: ';
		switch (resSplit[1].trim()) {
				case 'arabic':
						commonText = commonText + '&Aacute;rabe';
						$(".idioma").html(commonText);
						break;
				case 'basque':
						commonText = commonText + 'Vasco';
						$(".idioma").html(commonText);
						break;
				case 'catalan':
						commonText = commonText + 'Catal&aacute;n';
						$(".idioma").html(commonText);
						break;
				case 'english':
						commonText = commonText + 'Ingl&eacute;s';
						$(".idioma").html(commonText);
						break;
				case 'french':
						commonText = commonText + 'Franc&eacute;s';
						$(".idioma").html(commonText);
						break;
				case 'galician':
						commonText = commonText + 'Ga&eacute;lico';
						$(".idioma").html(commonText);
						break;
				case 'german':
						commonText = commonText + 'Alem&aacute;n';
						$(".idioma").html(commonText);
						break;
				case 'greek, modern (1453-)':
						commonText = commonText + 'Griego';
						$(".idioma").html(commonText);
						break;
				case 'italian':
						commonText = commonText + 'Italiano';
						$(".idioma").html(commonText);
						break;
				case 'Japanese':
						commonText = commonText + 'Japon&eacute;s';
						$(".idioma").html(commonText);
						break;
				case 'Latin':
						commonText = commonText + 'Lat&iacute;n';
						$(".idioma").html(commonText);
						break;
				case 'MX':
						commonText = commonText + '101';
						$(".idioma").html(commonText);
						break;
				case 'null':
						commonText = commonText + 'Otro';
						$(".idioma").html(commonText);
						break;
				case 'portuguese':
						commonText = commonText + 'Portugu&eacute;s';
						$(".idioma").html(commonText);
						break;
				case 'spanish':
						commonText = commonText + 'Espa&ntilde;ol';
						$(".idioma").html(commonText);
						break;
				case 'swedish':
						commonText = commonText + 'Sueco';
						$(".idioma").html(commonText);
						break;
				case 'valencian':
						commonText = commonText + 'Valenciano';
						$(".idioma").html(commonText);
						break;
		}
}

var modifyCDL = setTimeout(function () {

		$('.product-thumb-casing').each(function (a, b) {
				var ppll = $(this).children('img').attr('data-original');
				if (ppll.match(/casadellibro/g)) {
						$(this).css({
								'height': '140px',
								'width': '125px',
								'margin': '0 auto'
						});

				}

		})

		/***target ebooks**/
		$('img.foto-modulo').addClass(function () {
				if (this.src.replace(/^.*\//, '').indexOf('PORTADA-LIBRO') > -1) {
						$("img.foto-modulo").addClass("eBook-product");
				}

		});


		clearTimeout(modifyCDL);

}, 300);



//HideBrand-Function
$(document).ready(function () {
	//Below code commented to avoid multicolor image load from assets,
		/*$(".fac-color > a[style='background-color:#E67E22']").html("<img src='//assets.liverpool.com.mx/mobileAssets/images/multicolor_background.png' style='width:70%;height:70%;float:left;margin-top:-5px;'>");
		$(".color-offset > i[title='MULTICOLOR']").removeAttr("style");
		$(".color-offset > i[title='MULTICOLOR']").css("background-image", "url(//assets.liverpool.com.mx/mobileAssets/images/multicolor_background.png)");
		$(".color-offset > i[title='MULTICOLOR']").css("background-size", "21px 17px");

		$("#color > ul.color > li.attributeValue > a[data-color='Multicolor']").html("<img src='//assets.liverpool.com.mx/mobileAssets/images/multicolor_background.png' style='width:100%;height:100%;float:left;margin-top:0px;'>");
*/
		$("#brands_T").click(function () {
				var eliminarbrand = "Trends";

				setTimeout(function () {
						$("#brandsResults .masbus a").each(function () {
								if (eliminarbrand == $(this).text()) {
										$(this).remove();
										return false;
								}
						});
				}, 150);

		})


		// bug 10990
		$('#my_account_content .adress-order-details .myacc-location #myacc-Tel').text('Teléfono:');

		//bug 11057
		$('#content .own-main .owl-text.owl-text-new').text('Productos Similares');

		//bug 11418
		$('.data-pleca .rTableRow.valueslabels .diretooltip').parent('.rTableCell').css('width', '25%');

		/*Hiding Delivery Date on Toys
		 var detectCategory = $('#breadcrum li');
		 detectCategory.each( function() {
		 if ($.trim($(this).children('*').text()) == 'Juguetes' ) {
		 $('.info .product_delivery').css('display','none');
		 }
		 })*/

		//Resuelve el issue del over de la opcion de credito, desaparece las opciones que estan de mas.
		//It solves the over issue about credit option on mega menu.
		$('#master_menu .nav li').on('mouseover', function () {
				$(this).addClass('open');
		})

		var url = window.location.href;
		var urlpdp = url.substring(url.lastIndexOf("/") + 1);
		var arrayella = ["ella"];
		console.log(url)

		if (url.match("cat5020003") || url.match("él")) {
				console.log("El");
				$("#content > aside > div > h3:nth-child(10)").css("display", "none");
				$("#content > aside > div > ul:nth-child(11)").css("display", "none");
				$("#content > aside > div > h3:nth-child(12)").css("display", "none");
				$("#content > aside > div > ul:nth-child(13)").css("display", "none");

		} else {
				console.log("Nada");
		}
		if (url.match("/m/")) {

				//console.log("Es mobile")
				//validaRangoFechaMobile(1234567,esconderSkusMobile);


		} else {
				//console.log("Es desktop")
				esconderElementosElla(url, urlpdp, arrayella);


		}


});

function esconderElementosElla(url, urlpdp, arrayella) {
		if (url.match(arrayella)) {
				console.log("Ella");
				$("#content > aside > div > h3:nth-child(12)").css("display", "none");
				$("#content > aside > div > ul:nth-child(13)").css("display", "none");
				$("#content > aside > div > a:nth-child(12) > h3:contains('Damas')").css("display","none")


		} else {
				console.log("Nada");
		}
}



$(function () {
		if ($('#proveedores-servicios').length > 0) {
				$('#proveedores-servicios').on('click', function () {
						$('#proveedores-section').fadeToggle();
				})
		}
})
/**** Fix for vertical images on Ellas category landing page ***/
$(function () {
		if (/cat5280276/.test(url) || /ellas/.test(url)) {
				$('.cat-dynamic li a img').css({
						'height': 'auto',
						'width': '173px'
				});

				$('.cat-dynamic li a').css('min-height', '577px');
				$('.cat-dynamic li:nth-child(3n)').css({
						'margin-right': '1.3em'
				})
				$('.cat-dynamic li:nth-child(5n)').css({
						'margin-right': '0'
				})
				$('.cat-dynamic li:last-child').css('margin-right', '0px')
		}
})



function casadellibroscroll() {
		$('.product-thumb-casing img').each(function (a, b) {
				var ppll = $(this).attr('src');
				if (ppll.match(/casadellibro/g)) {
						$(this).css({
								'height': '100%',
								'width': '47%'
						});
						$('span.product-thumb-casing').css({
								'height': '130px',
								'width': '188px'
						})
				} else {}

		})

}

$(window).scroll(function () {
		casadellibroscroll();
		/*   fixHeader();*/
})
$(function () {
		if ($('#vinos-descripcion').length > 0) {
				var notasCata = ["Vista", "Nariz", "Boca"],
								notasCataExtract = [];
				$('#vinos-descripcion+ol li').each(function () {
						var obj = $(this);
						var text = $(obj).html();
						notasCata.forEach(function (element, index, array) {
								var pattern = new RegExp(element, 'i');
								if (pattern.test(text)) {
										notasCataExtract.push(text);
										$(obj).remove();
								}
						})
				})
				makeIcons();

				function makeIcons() {
						var content = "";
						try {
								if (notasCataExtract[0].length > 0)
										content = content + '<div class="notas-fila"><img src="/assets/images/bg/wine-sight.gif"><div class="nota">' + notasCataExtract[0] + '</div></div>';
								if (notasCataExtract[1].length > 0)
										content = content + '<div class="notas-fila"><img src="/assets/images/bg/wine-smell.gif"><div class="nota">' + notasCataExtract[1] + '</div></div>';
								if (notasCataExtract[2].length > 0)
										content = content + '<div class="notas-fila"><img src="/assets/images/bg/wine-taste.gif"><div class="nota">' + notasCataExtract[2] + '</div></div>';
						} catch (e) {
								console.log(e + " ---> Error en notasCataExtract <---");
						}

						$('#detalle_producto_bullets').before('<div class="notas-cata">' + content + '</div>');
				}
		}
})


function fixHeader() {
		var header = $('.container_nh')
		if (header.length > 0) {
				if ($('body').scrollTop() > 0) {
						$(header).css({
								'width': '100%',
								'z-index': 9999,
								'top': 0,
								'left': 0,
								'position': 'fixed',
								'background': '#ffffff'
						});
				} else {
						$(header).removeAttr('style');
				}
		}
}

// Hidding right arrow after 7 elements
timeout = setTimeout(fixRecs, 2000);

function fixRecs() {
		if ($('#catListinghideLabel').length > 0) {
				$('.scroll-button-right').on('click', function () {
						if ($('.scroll-group').position().left == -448) {
								$('.scroll-button-right').css('visibility', 'hidden');
						}
				})
		}
}

//fix temporal imagen entrega traslapada
if ($("#main-checkout").hasClass("step3")) {

		$("#master_footer").addClass('footer-step3')


}


if (url.match(/giftregistry/)) {
		$('.gift_registry_button input.search_button').click(function (e) {
				jQuery.ajax({
						url: site_path + "/com/liverpool/giftregistry/formhandler/GiftRegistryFormHandler.searchGiftRegistry",
						type: "POST",
						beforeSend: function (data) {
								$('.chmodan_me0').append("<span class='load-gr'><img src='/assets/images/loader.gif'></span>");
								$('.gift_registry_button input.search_button').attr("disabled", true);
								$('.gift_registry_button input.search_button').hide();
						},
						success: function (data) {
								$('.gift_registry_button input.search_button').attr("disabled", false);
						}
				});
				e.preventDefault();
		});
}




//parcheichon for exe function in QA and PROD, if the funcion exe only en QA put the script inside the IF, if the function it's only exe in PROD put the function in the ELSE :v

//Chanel Ajustes
setTimeout(function () {
		if ($(".left-nav").length >= 1) {
				var ifchan = $(".left-nav > h2").text();
				if (ifchan == "CHANEL") { ///////////////////////COMNET CONSTANZA SEGUN PARA CLP
						$(".left-nav > h2").css("display", "none");
						$(".left-nav").css("margin-top", "15px");
						$("a[href$='?showPLP']").css("display", "none");

				}
		}
		var chanelin = $(".left-nav h2").text();
		if (chanelin.toLowerCase().indexOf("chanel") >= 0) {
				$(".product-cell.producto-modulo > a > span").each(function () {
						if ($(this).text().toLowerCase().indexOf("chanel") >= 1) {
								$(".add-bag").hover(function () {
										$(this).css("background", "#000");
								});
								$(".product-cell.producto-modulo .product-name span i").css("text-transform", "none").css("font-size", "12px");
								/*cambio de color a negro 21-12-2016*/
								$(".price-state").removeClass("range-standard-price");
								/*cambio de color a negro 21-12-2016*/
						}
				});
				$(".currency-symbol").css({"color": "black"});
		}



}, 2000);
//greyss
$(document).ready(function () {
		if (url.match("trackOrders")) {
				$("#trackOrderForm > span:nth-child(5)").insertAfter("#trackOrderForm > p");
				$(".recent_orders input#btn_agregar.btn_actualizar").attr("style", "left: 290px; top: 39px; height: 26px; padding-top: 5px !important;")
		}

		if (url.match("searchOrderDetails") && !$("#user_login").hasClass('activo')) {
				$("#my_account_content > div > div.myacc-buscador > p").html("")
		}
//added 1/2/2017
		(function () {
				function getCookie(cname) {
						var name = cname + "=";
						var decodedCookie = decodeURIComponent(document.cookie);
						var ca = decodedCookie.split(';');
						for (var i = 0; i < ca.length; i++) {
								var c = ca[i];
								while (c.charAt(0) == ' ') {
										c = c.substring(1);
								}
								if (c.indexOf(name) == 0) {
										return c.substring(name.length, c.length);
								}
						}
						return "";
				}

				var url = window.location.href;
				var split_url = decodeURIComponent(url);
				var compare_url = ["cámaras", "acción", "cámaras-digitales", "cámaras-reflex", "videocámaras"];
				var isSeccion = false;
				split_url = split_url.split("tienda");
				if (split_url.length > 1) {
						split_url = split_url[1];
						split_url = split_url.split("/") || [];
						split_url.forEach(function (spliturl) {
								compare_url.forEach(function (compareurl) {
										if (spliturl === compareurl) {
												isSeccion = true;
										}
								});
						});
						if (isSeccion && getCookie('LoggedInSession') === 'TRUE') {
								$("#productos-seccion > img").attr("src", "http://assets.liverpool.com.mx/assets/web/images/targeted_promotions/es/bps_010217GoPro_log.jpg");
						}
				}
		})();
//added 1/2/2017

//added 4/3/2017 john https pif
		$("a.creditstatus").attr("href","https://assets.liverpool.com.mx/pif/?_ga=1.41888354.1906608677.1491259248");

});









$(document).ready(function () {

$("#user_top > ul li#ayuda >a").attr("href","https://assets.liverpool.com.mx/ayuda/#");
$("#registerCardForm > div.buttonsBlock > span > a").attr("href","https://assets.liverpool.com.mx/ayuda/#/sec/otros-temas/terminos-y-condiciones/aviso-de-privacidad-integral");
$("#registerCardForm > div.buttonsBlock > span > a").attr("onClick","");


//Redirect for Viajes Options
var viajesContent = $('#menu #submenu-cat5280345 .SubCategories:first-of-type');
viajesContent.find('li').remove();
viajesContent.append('<li><h3 class="popover-title">Viajes Liverpool</h3></li>'+
	'<li class=""><a href="https://viajestr.liverpool.com.mx/paquetes?utm_source=liverpool&utm_medium=linkhome&utm_campaign=HomePaquete" title="Paquetes" class="">Paquetes</a></li>'+
	'<li class=""><a href="https://viajestr.liverpool.com.mx/hoteles?utm_source=liverpool&utm_medium=linkhome&utm_campaign=HomeHoteles" title="Hoteles" class="">Hoteles</a></li>'+
	'<li class=""><a href="https://viajestr.liverpool.com.mx/vuelos?utm_source=liverpool&utm_medium=linkhome&utm_campaign=HomeVuelos" title="Vuelos" class="">Vuelos</a></li>'+
	'<li class=""><a href="https://viajestr.liverpool.com.mx/traslados?utm_source=liverpool&utm_medium=linkhome&utm_campaign=HomeTraslados" title="Traslados" class="">Traslados</a></li>'+
	'<li class=""><a href="https://viajestr.liverpool.com.mx/tours?utm_source=liverpool&utm_medium=linkhome&utm_campaign=HomeTours" title="Tours" class="">Tours</a></li>'+
	'<li class=""><a href="https://viajestr.liverpool.com.mx/autos?utm_source=liverpool&utm_medium=linkhome&utm_campaign=HomeAutos" title="Autos" class="">Autos</a></li>');

try {
		var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = 'https://assets.liverpool.com.mx/assets/images/iconos/favicon.ico';
		document.getElementsByTagName('head')[0].appendChild(link);}
catch(err) {
		document.getElementById("demo").innerHTML = err.message;
}

	// For PLP
	$( ".plp .product-cell" ).each(function( index ) {
			categoria=$(this).find(".gtmPlpBarand").val();
			if(categoria == "WEST ELM"){
					$(this).find(".product-name span").prepend("<i>West Elm </i>");
			}else if(categoria == "WILLIAMS SONOMA"){
					$(this).find(".product-name span").prepend('<i style="text-transform: none">Williams Sonoma </i>');
			}else if(categoria == "EXCLUSIVO WILLIAMS SONOMA"){
					$(this).find(".product-name span").prepend('<i style="text-transform: none">Exclusivo Williams Sonoma </i>');
			}else if(categoria == "POTTERY BARN KIDS"){
					$(this).find(".product-name span").prepend('<i style="text-transform: none">Pottery Barn Kids </i>');
			}else if(categoria == "POTTERY BARN"){
					$(this).find(".product-name span").prepend('<i style="text-transform: none">Pottery Barn </i>');
			}else if(categoria == "PBteen"){
					$(this).find(".product-name span").prepend('<i style="text-transform: none">PBTeen </i>');
			}

	});

	// For PDP
	 if ($('#containerEtalage').length) {
			categoriaW=$("#ga_brand").val();
			var isMultisite = false;
			var multisite;
			if(categoriaW == "WEST ELM") {
				multisite = "West Elm ";
				isMultisite = true;
			}else if( categoriaW == "WILLIAMS SONOMA" ) {
				multisite = "Williams Sonoma ";
				isMultisite = true;
			}else if( categoriaW == "EXCLUSIVO WILLIAMS SONOMA" ) {
				multisite = "Exclusivo Williams Sonoma ";
				isMultisite = true;
			}else if( categoriaW == "POTTERY BARN KIDS" ) {
				multisite = "Pottery Barn Kids ";
				isMultisite = true;
			}
			else if( categoriaW == "POTTERY BARN" ) {
				multisite = "Pottery Barn ";
				isMultisite = true;
			}
			else if( categoriaW == "PBteen" ) {
				multisite = "PBTeen";
				isMultisite = true;
			}


			if(isMultisite == true){
					$("#productAttributes #productName h1").html("<span style='text-transform: Capitalize'>"+multisite +"</span>" + $("#productAttributes #productName h1").html() );
					//$("#productAttributes #productName h1").addClass("we-lowerCase");
					$("#productInfo #productNameDesc").prepend(multisite);
					$("#wn-header .wn-top .wn-description").prepend(multisite);
					if($(".pzlcontainermain").length){
							$("#productInfo").parent().attr("style", "margin-top:80px");
					}else{
							$("#productInfo").parent().attr("style", "margin-top:25px");
					}
			}
	}

	// Collection PDP
	if($(".collectionPage").length != 0){
			urlCategoria= $("#newproductDetailsDIV img:first").attr("src");
			title=$("#newproductDetailsDIV #productName h1")
			$(".sectionContent p").attr("style", "color: #666!important;  font-size: 0.8em!important;  line-height: 16px  margin: 10px 0;")
			$(".sectionContent h4").attr("style", "font-size: 15px;  font-weight: bold;  margin-bottom: 10px;")
			$(".sectionContent ul").attr("style", "padding-bottom: 15px;")

			$(".sectionContent ul li").attr("style", "list-style: disc outside none;  padding: 2px 0px 2px 0px;  background-size: 5px;  font-size: 0.8em!important;  font-family: 'robotoregular';  color: rgb(102,102,102);  line-height: 20px;  margin-top: 5px;   margin: 5px 20px;")
			if(urlCategoria.match("westelm") &&  title.text().indexOf("west elm")){
					title.prepend("west elm ").addClass("we-lowerCase");
					if($(".pzlcontainermain").length){
							$("#productInfo").parent().attr("style", "margin-top:80px");
					}else{
							$("#productInfo").parent().attr("style", "margin-top:25px");
					}
			}
			/*try{
			$("body").prepend("<script src='https://assets.liverpool.com.mx/assets/css/css-groupid/pdp-we.css'></script>");
			}
			catch(err){}*/
			 setTimeout(function () {
					$(".content-group-items .grid-container").each(function () {
							urlCategoria= $(this).find("img:first").attr("src");
							title=$(this).find(".title-item-gid")
							if(urlCategoria.match("westelm") &&  title.text().indexOf("west elm")){
									title.prepend("west elm ");
							}
					});
			}, 2000);
	}

});


/* GR Changes 2018 : START */
$(document).ready(
   function() {

	   var giftRegistryRoot = $("#giftRegistryRoot").val();
	   var mesaDeRegalosClass = $("#mesaDeRegalosClass").val();
	   var enableGiftRegistry = $("#enableGiftRegistry").val();
	   if (($('#mesaDeRegalosClass').length == 1) && ($("#enableGiftRegistry").length == 1)) {
			var enableGiftRegistry = $("#enableGiftRegistry").val(); 
			if (enableGiftRegistry == 'true') {
                $(mesaDeRegalosClass).attr('href',$("#giftRegistryRoot").val())
			} else {
				 $(mesaDeRegalosClass).attr('href','https://wsi.williams-sonoma.com.mx/tienda/giftregistry/giftRegistry.jsp?eventNo=1')
			}
		}

	});
/* GR Changes 2018 : END */
