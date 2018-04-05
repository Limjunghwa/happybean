$(document).ready(function()
{
  var flag=true;

  function arrowClick(interval)
  {

      var $image= $(this);
      var $active=$('div.active');
      var $prev;
      var $next;
      var $first_child=$('div.slide> div:nth-of-type(1)');
      var $last_child=$('div.slide > div:nth-of-type(2)');

      if($image.hasClass('arrowLeft')){
        $prev=$active.prev();
        if($prev.length==0 || $prev.hasClass('arrow')){
          $prev=$last_child;
        }
        $active.removeClass('active');
        $prev.addClass('active');
      }else if($image.hasClass('arrowRight'))
      {
        $next=$active.next();
        if($next.length==0){
          $next=$first_child;
        }
        $active.removeClass('active');
        $next.addClass('active');

      }

  }
  function autoplay()
  {
    $slide=$('.slide');
          setInterval(
              function() {
                  $slide.find('.arrowRight').click();
              },
              5000);
  }


  $('div.slide > img.arrow').click(arrowClick);

        autoplay();

    $service =$('div.service');
    $service.click(
      function(){

        if(flag){
          $('.footer2').css('display','block');
          flag=false;
        }else{
          $('.footer2').css("display","none");
          flag=true;
        }
      }

    );
    $('.arrow_icon').click(
      function(){

        $(window).scrollTop(0);

      }
    );
});
