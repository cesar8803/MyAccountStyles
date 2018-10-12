//This JS file can be modify to create the final version
//most of the code in this file, is for simulation purposes

$(document).ready(function() {
  // add tooltip to deliver timeline
  if ($('.status-labels:eq(0)').length > 0) {
    $('.status-labels:eq(0) > ul > li').each(function() {
      var li_text = $(this).clone().children().remove().end().text();
      // add new text with span and append the arrow
      li_text = li_text.trim();
      if (!li_text == "") {
        $(this).append('<span class="statusContainer" style="cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">' + li_text + '</span>').append('<i class="icon-liv-go-14" style="position:absolute; padding:0; margin:3px 0 0 3px; -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -ms-transform: rotate(90deg); -o-transform: rotate(90deg); transform: rotate(90deg); color: #878787;"></i>');
        $(this).contents().filter(function() {
          return this.nodeType !== 1;
        }).remove();
      }
    });
    // find i with span text
    var pc = $('.statusContainer:contains("Pedido confirmado")').next('i');
    var ptp = $('.statusContainer:contains("Preparando tu pedido")').next('i');
    var pec = $('.statusContainer:contains("Pedido en camino")').next('i');
    var pe = $('.statusContainer:contains("Pedido entregado")').next('i');
    var rc = $('.statusContainer:contains("Regalo Confirmado")').next('i');
    var re = $('.statusContainer:contains("Regalo Entregado")').next('i');
    var pamar = $('.statusContainer:contains("Pasa al modulo a recoger")').next('i');
    // set tooltp to i tag
    pc.tooltip({
      content: '\u0021Tu pedido ya est\u00E1 en proceso\u0021 Estamos validando tu compra y el inventario.',
      position: 'bottom right'
    });
    ptp.tooltip({
      content: 'Estamos recolectando tu pedido para la entrega.',
      position: 'bottom right'
    });
    pec.tooltip({
      content: 'Tu pedido ya sali\u00F3 y est\u00E1 en proceso de entrega.',
      position: 'bottom right'
    });
    pe.tooltip({
      content: 'Liverpool agradece tu preferencia.',
      position: 'bottom right'
    });
    rc.tooltip({
      content: 'Tu regalo ha sido confirmado\u0021 te mostraremos el avance de su env\u00EDo.',
      position: 'bottom right'
    });
    re.tooltip({
      content: 'Se realiz\u00F3 con \u00E9xito la entrega de tu regalo, Liverpool agradece tu preferencia.',
      position: 'bottom right'
    });
    pamar.tooltip({
      content: 'Tu pedido esta listo, ya puedes pasar por el en nuestro m\u00F3dulo de Click & Collect.',
      position: 'bottom right'
    });
    // trigger tooltop from i to span
    $('.status-labels:eq(0) > ul > li > span').on('hover', function(e) {
      $(this).parent().find('i').trigger(e.type);
    });
    // hover undeline text
    $(".status-labels:eq(0) > ul > li > span").hover(function() {
      $(this).css("text-decoration", "underline");
    }, function() {
      $(this).css("text-decoration", "none");
    });
  }
  valuebar = $('#stageId').val();
  valuebarcount = 0;
  function animacion(statusbar, objlist) {
    setTimeout(function() {
      $("#myacc-prod-1 .progress-bar").animate({
          width: statusbar,
          opacity: "1"
        }, 2000,
        function() {
          $("#myacc-prod-1 .status-labels li").each(function() {
            if ($(this).hasClass("lineactivestatus")) {
              $(this).removeClass();
            }
            $(objlist).addClass("lineactivestatus");
          })
        });
    }, 100);
  }
  
  switch (valuebar) {
    case 'Stage1':
      statusbar = '12%';
      valuebar = 1;
      animacion(statusbar, $("#myacc-prod-1 .status-labels li:nth-child(1)"));
      break;
    case 'Stage2':
      valuebar = 2;
      statusbar = '28%';
      animacion(statusbar, $("#myacc-prod-1 .status-labels li:nth-child(2)"));
      break;
    case 'Stage3':
    valuebar = 3;
      statusbar = '46%';
      animacion(statusbar, $("#myacc-prod-1 .status-labels li:nth-child(3)"));
      break;
    case 'Stage4':
      valuebar = 4;
      statusbar = '56.5%';
      animacion(statusbar, $("#myacc-prod-1 .status-labels li:nth-child(4)"));
      break;
  }
  $("#bar-wrapper .status-bullets ul li").each(function(key){
    if(valuebar > key)
        $(this).find(".icon-liv-radio-button-02").css("background","#27b24b");
  });

  //simulation for other 2 example products
  setTimeout(function() {
    $("#myacc-prod-2 .progress-bar").animate({
        width: '25.6%',
        opacity: "1"
      }, 2000,
      function() {
        $("#myacc-prod-2 .status-labels li:nth-child(2)").addClass("lineactivestatus");
      });
  }, 110);

  setTimeout(function() {
        $("#myacc-prod-3 .progress-bar").animate({
        width: '76%',
        opacity: "1"
      }, 2000,
      function() {
        $("#myacc-prod-3 .status-labels li:nth-child(4)").addClass("lineactivestatus");
      });
  }, 190);


  //sin disponibilidad
  $(".myacc-fullorders .product-image").mouseenter(function() {
    $(this).children(".sin-disponibilidad").fadeIn("fast");
  })
  $(".myacc-fullorders .product-image").mouseleave(function() {
    $(this).children(".sin-disponibilidad").fadeOut("fast");
  })

  //BuG 11315. Quitar '-' de texto disponibilidad
  $('.sin-disponibilidad p').text($('.sin-disponibilidad p').text().replace("-", ""));

  //BUG 11379, Sin dispobilidad - Twice Text
  $('.sin-disponibilidad p').text("Sin disponibilidad");


  $('.search-pagination .myacc-ayuda-pedidos a').attr("href", "https://assets.liverpool.com.mx/ayuda/#/sec/pedidos-y-devoluciones/seguimiento-a-pedidos")
}); //end document ready
