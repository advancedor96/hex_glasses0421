$('.q1').click(() => {
  if($('.ans1').is(":hidden")){
    $('.ans1').slideDown("fast")
    $('.q1_arrow').attr('src', "../assets/ic_keyboard_arrow_down_24px.svg")
  }else{
    $('.ans1').slideUp("fast")
    $('.q1_arrow').attr('src', "../assets/ic_keyboard_arrow_up_24px.svg")
  }

});
