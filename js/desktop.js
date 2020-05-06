$('.toggle-nav').click(()=>{
  $('#menuUl').toggleClass('active');
})

let img = $(".showcase_classic > .item:eq(1)>img:eq(1)");
img.mouseenter(()=>{
  img.attr("src", "../assets/15.png")
})

img.mouseleave(()=>{
  img.attr("src", "../assets/pic.png")
})

let originColor = ''
$(".contact> .container > .btn").hover(function(){
  originColor = $(this)[0].style.backgroundColor
  // console.log('$(this).style.backgroundColor',$(this)[0].style.backgroundColor)
  
  $(this).attr("style", "background-color: #6b100d;")
}, function(){
  $(this).attr("style", `background-color: ${originColor};`)

})