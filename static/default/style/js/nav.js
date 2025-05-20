/* 导航条 */
$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var nav = $('.head');

        if (scrollTop == 0) {
            // 滚动到顶部时将导航背景颜色更改为透明
            nav.css('background-color', 'transparent');
        } else {
            // 滚动位置不在顶部时恢复导航背景色
            nav.css('background-color', '#acafb2');
        }
    });
});



/* 语言选择 */
$(function() {
    $('.submenu>a').click(
        function(e) {
            e.preventDefault(); //阻止点击a的默认动作
            var li = $(this).parents('li');
            var li_s = $('#sidebar .submenu'); //所有.submenu的li目录
            var ul_s = $('#sidebar .submenu >ul'); //所有.submenu 的下级ul目录
            var ul = $(this).siblings('ul'); //遍历a元素的兄弟元素（限制为ul）
            if (li.hasClass('open')) { //假如点击的那个链接有open类，那么下拉菜单向上滑动，移除open类
                ul.slideUp();
                li.removeClass('open');
            } else { //假如点击的那个链接没有open类，首先对所有的下拉菜单都让其收起来。然后点击的那个下拉，所有的li目录移除open类，点击的那个添加open类
                ul_s.slideUp();
                ul.slideDown();
                li_s.removeClass('open')
                li.addClass('open')
            }
        }
    )
})