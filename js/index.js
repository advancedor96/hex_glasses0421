$('#desktop').click(() => {
  // window.location.pathname= '/pages/desktop'
  let win = window.open('/pages/desktop', '_blank');
  win.focus();
});
$('#tablet').click(() => {
  let win = window.open('/pages/tablet', '_blank');
  win.focus();
});
$('#mobile').click(() => {
  let win = window.open('/pages/mobile', '_blank');
  win.focus();
});