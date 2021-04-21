// $(function(){
//   $(".box1").css({
//     "background-color": "#0000FF",
//     "hight": "100px"
//   });
// })

// app.cssの display: none; が必須
// $(function(){
//   $(".box1").slideDown();
// });

// $(function(){
//   $(".box1").slideUp();
// });

// $(function(){
//   $(".box1").show();
//   $(".box1").css({"background-color": "#0000FF"});
// });

// $(function(){
//   $(".box1").hide();
// });

// 確認問題
// $(function(){
//   $(".box1").slideDown(function(){
//   $(".box1").css({
//     "background-color": "#0000FF",
//     "hight": "100px",
//     "width": "200px"
//   }).slideUp();
//   });
// });

// $(function(){
//   $(".box1").mouseover(function(){
//     $(".box1").css({"background-color": "#0000FF"});
//   });
//   $(".box1").mouseout(function(){
//     $(".box1").css({"background-color": "#FF0000"});
//   });
// });

// $(function(){
//   $(".box1").mouseover(function(){
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function(){
//     $(".box1").removeClass("box1-ext");
//   });
// });

$(function(){
  $(".box1").on("click", function(){
    $(".box1").addClass("box1-ext");
  })
  $(".box1").mouseout(function(){
    $(".box1").removeClass("box1-ext");
  });
});




