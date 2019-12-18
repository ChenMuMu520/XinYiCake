$(function () {
    /*****贺卡下拉列表*******/
    $('.card-show').click(function () {
        if ($('.card-list').css('display') == 'block') {
            $(this).children('.card-list').css('display', 'none');
            $('.card-show').css('height', '')
        } else {
            $(this).children('.card-list').css('display', 'block');
            $('.card-show').css('height', 'auto');
        }
    });
    $('.item-congratulate').on("click", '.card-item', function () {
        $(this).parent().siblings('.card-default').text($(this).text());
        $(this).parent().css('display', 'none');
        $(this).parent().parent().css('height', '');
    });
// $('body').click(function () {
//     $('.card-list').css('display','none');
//     $('.card-show').css('height','20px');
// });
    /*****贺卡下拉列表*******/
    /*******数量加减*********/
    $('.subtract').click(function () {
        var i = $(this).next().val();
        i--;
        if (i == 0) {
            alert('确定删除吗？')
        } else {
            $(this).next().val(i);
        }
    });
    $('.add').click(function () {
        var i = $(this).prev().val();
        i++;
        $(this).prev().val(i);
    });
    /*******数量加减*********/
});