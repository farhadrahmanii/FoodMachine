var Modal = {
    $html: $("html"),
    $body: $(document.body),
    originalBodyPad: null,
    scrollbarWidth: 0,
    show: function () {
        this.checkScrollbar()
        this.setScrollbar()
        this.$html.addClass('modal-open')
    },
    hide: function () {
        this.$html.removeClass('modal-open')
        this.resetScrollbar();
    },
    checkScrollbar: function () {
        var fullWindowWidth = window.innerWidth
        if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect();
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
        this.scrollbarWidth = this.measureScrollbar();
    },
    setScrollbar: function () {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        this.originalBodyPad = document.body.style.paddingRight || ''
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    },
    measureScrollbar: function () {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = 'modal-scrollbar-measure';
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth;
    },
    resetScrollbar: function () {
        this.$body.css('padding-right', this.originalBodyPad);
    }
}

$(function () {
    // if ($(window).width() > 1200) {
        // wow初始化
        new WOW().init();
    // }
    phNavXl();
})

function phNavXl() {
    $(".ys_navph2_menu_btn").click(function () {
        $(this).stop().toggleClass("act");
        $("html").toggleClass("modal-open")
        $(".ys_navph2_list").stop().toggleClass("act");
    });
    // 二级
    $(".he_daohang li").click(function (e) {
        e.stopPropagation();
        var $childs = $(this).find("ul");
        if ($childs.length > 0) {
            $(this).stop().toggleClass("act").siblings().stop().removeClass("act");
            $(this).siblings().find("ul").eq(0).stop().slideUp();
            // $(this).siblings().find("ul").stop().slideUp();
            $childs.eq(0).stop().slideToggle();
        }
    });

    // 站群二级
    $('.he_yijili').click(function(){
        $(this).find('.he_erjiul').stop().slideToggle();
        $(this).stop().toggleClass('act');
        $(this).siblings().find('.he_erjiul').stop().slideUp();
        $(this).siblings().stop().removeClass('act');
    })
    // 站群三级
    $('.he_erjili1').click(function(e){
        e.stopPropagation();
        $(this).siblings('.he_anjiul').stop().slideToggle();
        $(this).parents('.he_erjili').stop().toggleClass('act');
        $(this).parents('.he_erjili').siblings().find('.he_anjiul').stop().slideUp();
        $(this).parents('.he_erjili').siblings().stop().removeClass('act');
    })
    // 站群四级
    $('.he_anjili1').click(function(e){
        e.stopPropagation();
        $(this).siblings('.he_sijiul').stop().slideToggle();
        $(this).parents('.he_anjili').stop().toggleClass('act');
        $(this).parents('.he_anjili').siblings().find('.he_sijiul').stop().slideUp();
        $(this).parents('.he_anjili').siblings().stop().removeClass('act');
    })
    // 语言选择
    $(".ys_navph2_zq .ys_navph2_lang_btn").click(function () {
        $(".ys_navph2_lang_modal1").addClass("act");
    });
    $(".ys_navph2_yy .ys_navph2_lang_btn").click(function () {
        $(".ys_navph2_lang_modal2").addClass("act");
    });
    // 返回主菜单
    $(".ys_navph2_lang_back").click(function () {
        $(".ys_navph2_lang_modal").removeClass("act");
    });
}

$(".ys_navph2_search_btn").click(function () {
    $(".ys_navph2_modal").stop().slideToggle();
})


// 锚点
function yxtop() {
    $(window).load(function () {
        var test = (window.location.href).split('tp/');
        if (!isNaN(test[1])) {
            $("html,body").animate({
                scrollTop: $('[yxdatop-pag="' + test[1] + '"]').offset().top - 90
            }, 700);
        }
    })
};

// top
$('.he_cenavli4').click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
});

// 头部搜索
$('.he_pcser i').click(function () {
    $(this).siblings('.mc_search_xl').slideToggle();
    $(this).toggleClass('act');
})

var isShow = false;
$(".he_searig").click(function (e) {
    e.stopPropagation();
    if (!isShow) {
        $(this).addClass("isshow");
        $(this).find(".mc_search_xl").stop().slideDown().addClass("show");
        isShow = true;
    } else {
        $(this).removeClass("isshow");
        $(this).find(".mc_search_xl").stop().slideUp().removeClass("show");
        isShow = false;
    }

})

$(".mc_search_xl").click(function (e) {
    e.stopPropagation();
})

$(".mc_search_xl").mouseleave(function () {
    $(this).parents(".he_searig").removeClass("isshow");
    $(this).stop().slideUp().removeClass("show");
    isShow = false;
})


// 导航跟随

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $(".he_pc_hd").stop().addClass('act');
    } else {
        $(".he_pc_hd").stop().removeClass('act');
    }
});

// pc下拉
$('.he_pcnli').hover(function () {
    $(this).find('.he_down').stop().fadeIn();
}, function () {
    $(this).find('.he_down').stop().fadeOut();
})

// 底部切换
// $('.he_fojtbul').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // fade: true,
//     autoplay: true,
//     draggable:true,
//     pauseOnHover:false,
// });

$('.he_fojtbul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
});

$('.he_fojtbul').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var index = nextSlide;
    // console.log(index)
    $(".he_fojalp").eq(index).addClass("act").siblings().removeClass("act");
});

$(".he_fojalp").click(function () {
    var index = $(this).index();
    $(this).addClass("act").siblings().removeClass("act");
    $(".he_fojtbul").slick("slickGoTo", index);
})

$('.he_xwho1').hover(function () {
        $(this).find('.he_xwhofd').stop().fadeIn();
    },
    function () {
        $(this).find('.he_xwhofd').stop().fadeOut();
    }
)


// 头部建发群网
$('.he_jianfa').click(function (e) {
    e.stopPropagation();
    $('.he_zqxl').addClass('on');
    setTimeout(function () {
        $("body,html").css({
            "overflow":"hidden"
        })
    }, 400)
})

$('.he_zqxlgb').click(function (e) {
    e.stopPropagation();
    $('.he_zqxl').removeClass('on');
    $("body,html").css({
        "overflow":"auto"
    })
})

$('body').click(function () {
    $('.he_jianftp').removeClass('on');
    $('.he_jianfbt').slideUp();
})
// 下拉滚动条
$(function () {
    var scrollInertiaNum;
    if (/firefox/.test(navigator.userAgent.toLowerCase())) {
        scrollInertiaNum = 200;
    } else {
        scrollInertiaNum = 200;
    }
    $(".he_jianfbgd").mCustomScrollbar({
        theme: 'dark',
        scrollInertia: scrollInertiaNum,
        horizontalScroll: false,
        axis: "y",
    });
});



// 股票信息
(function () {
    $.ajax({
        url: 'https://qt.gtimg.cn/q=sh600153',
        type: 'GET',
        success: function (res) {
            var elements = res.split("~");
            var endTime = elements[30];
            var endTime = endTime.substring(0, 4) + "-" + endTime.substring(4, 6) + "-" + endTime.substring(6, 8) + " " + endTime.substring(8, 10) + ":" + endTime.substring(10, 12) + ":" + endTime.substring(12, 14);
            var shou = elements[4]; //昨天的收盘价格
            var curr = elements[3]; //当前的价格
            var em = shou - curr;
            $(".he_fomli1 .he_fotdy").text(curr);
            $(".he_fomli1 .he_fojtbp3 p span").text(endTime);
            if (em > 0) {
                $(".he_fomli1 .he_fgdy span").html("▼RMB");
            } else {
                $(".he_fomli1 .he_fgdy span").html("▲RMB");
            }
        }
    });
})();
(function () {
    $.ajax({
        url: 'https://qt.gtimg.cn/q=hk01908',
        type: 'GET',
        success: function (res) {
            var elements = res.split("~");
            var endTime = elements[30];
            endTime1 = endTime.replace(/\//g, "-");
            // var endTime = endTime.substring(0, 4) + "-" + endTime.substring(4, 6) + "-" + endTime.substring(6, 8) + " " + endTime.substring(8, 10) + ":" + endTime.substring(10, 12) + ":" + endTime.substring(12, 14);
            var shou = elements[4]; //昨天的收盘价格
            var curr = elements[3]; //当前的价格
            var em = shou - curr;
            $(".he_fomli2 .he_fotdy").text(curr);
            $(".he_fomli2 .he_fojtbp3 p span").text(endTime1);
            if (em > 0) {
                $(".he_fomli2 .he_fgdy span").html("▼HKD");
            } else {
                $(".he_fomli2 .he_fgdy span").html("▲HKD");
            }
        }
    });
})();

(function () {
    $.ajax({
        url: 'https://qt.gtimg.cn/q=hk02156',
        type: 'GET',
        success: function (res) {
            var elements = res.split("~");
            var endTime = elements[30];
            endTime1 = endTime.replace(/\//g, "-");
            // var endTime = endTime.substring(0, 4) + "-" + endTime.substring(4, 6) + "-" + endTime.substring(6, 8) + " " + endTime.substring(8, 10) + ":" + endTime.substring(10, 12) + ":" + endTime.substring(12, 14);
            var shou = elements[4]; //昨天的收盘价格
            var curr = elements[3]; //当前的价格
            var em = shou - curr;
            $(".he_fomli3 .he_fotdy").text(curr);
            $(".he_fomli3 .he_fojtbp3 p span").text(endTime1);
            if (em > 0) {
                $(".he_fomli3 .he_fgdy span").html("▼HKD");
            } else {
                $(".he_fomli3 .he_fgdy span").html("▲HKD");
            }
        }
    });
})();

(function () {
    $.ajax({
        url: 'https://qt.gtimg.cn/q=sh603909',
        type: 'GET',
        success: function (res) {
            var elements = res.split("~");
            var endTime = elements[30];
            endTime1 = endTime.replace(/\//g, "-");
            var endTime1 = endTime.substring(0, 4) + "-" + endTime.substring(4, 6) + "-" + endTime.substring(6, 8) + " " + endTime.substring(8, 10) + ":" + endTime.substring(10, 12) + ":" + endTime.substring(12, 14);
            var shou = elements[4]; //昨天的收盘价格
            var curr = elements[3]; //当前的价格
            var em = shou - curr;
            $(".he_fomli4 .he_fotdy").text(curr);
            $(".he_fomli4 .he_fojtbp3 p span").text(endTime1);
            if (em > 0) {
                $(".he_fomli4 .he_fgdy span").html("▼RMB");
            } else {
                $(".he_fomli4 .he_fgdy span").html("▲RMB");
            }
        }
    });
})();

(function () {
    $.ajax({
        url: 'https://qt.gtimg.cn/q=hk00731',
        type: 'GET',
        success: function (res) {
            var elements = res.split("~");
            var endTime = elements[30];
            endTime1 = endTime.replace(/\//g, "-");
            // var endTime1 = endTime.substring(0, 4) + "-" + endTime.substring(4, 6) + "-" + endTime.substring(6, 8) + " " + endTime.substring(8, 10) + ":" + endTime.substring(10, 12) + ":" + endTime.substring(12, 14);
            var shou = elements[4]; //昨天的收盘价格
            var curr = elements[3]; //当前的价格
            var em = shou - curr;
            $(".he_fomli5 .he_fotdy").text(curr);
            $(".he_fomli5 .he_fojtbp3 p span").text(endTime1);
            if (em > 0) {
                $(".he_fomli5 .he_fgdy span").html("▼HKD");
            } else {
                $(".he_fomli5 .he_fgdy span").html("▲HKD");
            }
        }
    });
})();




$(function () {
// 第二批修改
$('.he_pcnav').hover(function () {
        $('.he_pc_hd').stop().addClass('color');
    },
    function () {
        $('.he_pc_hd').stop().removeClass('color');
    }
)

$('.he_pcser').click(function (e) {
    e.stopPropagation();
    $('.he_pc_hd').stop().addClass('color');
}
)
$('.he_pc_hd').mouseleave(function(){
    $('.he_pc_hd').stop().removeClass('color');
})

})

$(function(){
    // 鼠标跟随
    follow();

    // var isScroll = true;
    // $(window).scroll(function(e){
    //     if(isScroll){
    //         isScroll = false;
    //         console.log(e,e.pageX,e.pageY);
    //         setTimeout(function(){
    //             isScroll = true;
    //         },1000)
    //     }
    // })
})

// 鼠标跟随
function follow() {
    if ($(window).width() > 1200) {
        // $('body').mousemove(function (e) {
        //     $(".he_shubiao").css({
        //         "left": e.pageX,
        //         "top": e.pageY
        //     });
        // });
        $('body').mousemove(function (e) {
                var X = e.clientX;
                var Y = e.clientY;
                var Z = $('.he_shubin').width() / 2;
                var V = $('.he_shubin').height() / 2;
                setTimeout(function () {
                    $(".he_shubiao").css({
                        "left": X,
                        "top": Y
                    });
        }, 200)
    });
        $('.he_c1bxnli,a,.he_fojalp,.he_pcser,.he_jianfle,[role="button"],.he_b3p2gjgf,.he_c2p1hli,.mcslick-next,.mcslick-prev,.slick-arrow,.he_b1p2tsh,#search_news,.he_e3p2bx,.mc_modal_close,.he_tanplay,.he_g1p2zli,.he_h1p2ri,.he_guab,input').hover(function () {
                setTimeout(function () {
                    $('.he_shubiao').stop().addClass('on');
                }, 200)
            },
            function () {
                setTimeout(function () {
                    $('.he_shubiao').stop().removeClass('on');
                }, 200)
            }
        )
    }

}
if ($(window).width() > 1200) {
$('.he_zqajl').hover(function(){
    $(this).find('img').stop().fadeIn();
},
function(){
    $(this).find('img').stop().fadeOut();
}
)
}

// 2025.3.24Linda新增修改-start
footSlick()
function footSlick(){
    $(".foot_slick .he_fomul").slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
                breakpoint: 951,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    if($(window).width() < 1200 && $(window).width() > 950){
        if($(".foot_slick .he_fomli").length < 6){
            $(".foot_slick").addClass("empty")
        }
    }
    if($(window).width() < 951 && $(window).width() > 480){
        if($(".foot_slick .he_fomli").length < 4){
            $(".foot_slick").addClass("empty")
        }
    }
    if($(window).width() < 481){
        if($(".foot_slick .he_fomli").length < 2){
            $(".foot_slick").addClass("empty")
        }
    }
}
// 2025.3.24Linda新增修改-end