$(function (){
/****留言*****/
$('#words').focus(function () {
    $(this).attr('placeholder','');
});
$('#words').focusout(function () {
    $(this).attr('placeholder','有什么想对我们说的吗？请在这里写下。。。');
});
/****留言*****/
});