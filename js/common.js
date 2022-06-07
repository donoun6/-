$(function(){
  $("header").load("header.html .h-inner")
  $("footer").load("footer.html .f-inner")

let num = $(".tex_1 ul li:nth-child(2) .count").text();
let numArray = num.split(',');
let htmlNum = '';

for (var i = 0; i < numArray.length; i++) {
  // console.log(numArray[i])
  htmlNum += numArray[i];
}

$(window).scroll(function(){
  let scTop = $(this).scrollTop();
  let boxNum = $(".tex_1 .count");
      console.log($(this).scrollTop());
  if ( scTop > 450 ){
    boxNum.each(function(i){
      let txtNum;
      if( i == 1 ){
        textNum = htmlNum
      }else{
        // console.log(this);
        textNum =$(this).text()
      }
      $(this).prop("counter",0).animate({counter: textNum},{duration: 3000, easing: "swing",step: function(now){
        let num = numberWithCommas((Math.ceil(now)))
        $(this).text(num);
        // console.log(Math.ceil(now));
      }});
    });
    $("strong").removeClass("count");
  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$("#header").mouseenter(function(){
  $("#header").addClass("fixed")
  $("#gnb").addClass("fixed2")
  $(".s-inner").addClass("fixed2")
  $(".change-logo").attr("src","https://www.panstar.co.kr/uploads/media/logo_ov.png")
  })

$("#header").mouseleave(function(){
    $("#header").removeClass("fixed")
    $("#gnb").removeClass("fixed2")
    $(".s-inner").removeClass("fixed2")
    $(".change-logo").attr("src","https://www.panstar.co.kr/uploads/media/logo.png")
})

  $(window).scroll(function(){
    let scTop = $(this).scrollTop();
    let navBar = $("header");
      let boxNum = $(".tex_1 .count");
    // console.log($(this).scrollTop());
    // console.log($("header").text());

    if ( scTop > 50 ) {
      navBar.addClass("fixed")
      $("#gnb").addClass("fixed2")
      $(".s-inner").addClass("fixed2")
      $(".change-logo").attr("src","https://www.panstar.co.kr/uploads/media/logo_ov.png")
    }else {
      navBar.removeClass("fixed")
      $("#gnb").removeClass("fixed2")
      $(".s-inner").removeClass("fixed2")
      $(".change-logo").attr("src","https://www.panstar.co.kr/uploads/media/logo.png")
    }
  });

  function x(){
    if( $("#mainbanner").attr("id") == ("mainbanner") ){
      $("#mainbanner").addClass("on")
    };
  };
  x();

  $(".news").mouseenter(function(){
    $(".black").css("opacity","0.2")
  });
  $(".news").mouseleave(function(){
    $(".black").css("opacity","0.6")
  });


});
