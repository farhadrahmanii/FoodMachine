 // banner
 var banner1 = new Swiper('.banner .swiper-container', {
     autoplay: {
         delay: 5500,
         disableOnInteraction: false,
     },
     loop: true,
     navigation: {
         nextEl: '.banner .swiper-button-next',
         prevEl: '.banner .swiper-button-prev',
     },
     pagination: {
         el: '.banner .swiper-pagination',
         clickable: true,
     },
 });

 // 下拉加载全部
 document.getElementById('toggleButton').addEventListener('click', function() {
     var content = document.getElementById('content');
     if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
         // 展开
         content.style.maxHeight = content.scrollHeight + 'px'; // 设置最终高度，触发transition
     } else {
         // 收起
         content.style.maxHeight = content.scrollHeight + 'px'; // 设置当前高度，以便动画可以执行
         setTimeout(function() {
             content.style.maxHeight = '0'; // 触发动画至0高度
         }, 10); // 延迟确保动画可以执行
     }
 });


 // index05
 var banner1 = new Swiper('.index05 .swiper-container', {
     autoplay: {
         delay: 5500,
         disableOnInteraction: false,
     },
     loop: true,
     navigation: {
         nextEl: '.index05 .swiper-button-next',
         prevEl: '.index05 .swiper-button-prev',
     },
     //  pagination: {
     //      el: '.banner .swiper-pagination',
     //      clickable: true,
     //  },
 });