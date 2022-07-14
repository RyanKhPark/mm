$(function(){
    $(".privacyBtn").click(function(){
       $("#privacy").fadeIn(350);
   });

   // 팝업닫기
   $("#privacy .closeBtn").click(function(){
       $("#privacy").fadeOut(350);
   });
})
