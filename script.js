$(function(){
  
  $(".openbtn").click(function () {

    //バーガーボタン
    $(this).toggleClass('active');

    //モーダル
    if($('#header').hasClass('open')){
      $('#header').removeClass('open');
    }else{
      $('#header').addClass('open');
    }

  });

  



});