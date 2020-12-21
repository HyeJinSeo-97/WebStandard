$(function(){
    //배너 slick 슬라이드
    var btn = $('.tit .btn'),
        nav = $('#cont_nav');

    btn.click(function(e){
        e.preventDefault();
        nav.slideToggle(300);
        $(this).toggleClass('on');
    });

    $('.ban').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true
    });

    //탭 메뉴
    var tab_notice = $('.tab_notice'),
        tab_menu = tab_notice.find('ul');

    tab_notice.on('click',function(ev){
        ev.preventDefault();

        //공지사항 색상 변경
        $(this).addClass('on').siblings().removeClass('on');

        //공지사항별 ul 보여주기
        tab_notice.find('ul').removeClass('menu');
        $(this).find('ul').addClass('menu');
    })

    //갤러리 slick 슬라이드
    $('.play').click(function(){
        $('.gallery_img').slick('slickPlay');
    });
    $('.pause').click(function(){
        $('.gallery_img').slick('slickPause');
    });
    $('.prev').click(function(){
        $('.gallery_img').slick('slickPrev');
    });
    $('.next').click(function(){
        $('.gallery_img').slick('slickNext');
    });

    $('.gallery_img').slick({
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        arrows:false,
      });
    
    //레이어 팝업
    $('.layer').click(function(ev){
        ev.preventDefault();
        $('#layer').slideDown(300);
    });
    $('.close').click(function(ev){
        ev.preventDefault();
        $('#layer').slideUp(300);
        //$('#layer').css('display','none');
    });

    //윈도우 팝업
    $('.window').on('click',function(ev){
        ev.preventDefault();
        window.open('popup.html','popup01','width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0');
    });

    //라이트 박스
    $(".lightgallery").lightGallery({
        mode:'lg-zoom-in',
        thumbnail:true,
        autoplay:true
    }); 
});

/*
    -.toggle();
    -.toggleClass(); class명이 있으면 지워주고 없으면 넣어줌(addClass + removeClass)
    -.slideDown(시간); 요소를 top:0 -> top:100% 애니메이션으로 보여줌
    -.fadeToggle(시간); fade효과로 누를때마다 사라지고 나타남
    -.slideToggle(시간); slide효과로 누를때마다 사라지고 나타남
        **시간 : 1000 = 1초

    <slick> 사용법
    1.https://kenwheeler.github.io/slick/
    2.get it now -> download Now
    3.slick.css와 slick.min.js를 각각 css폴더, js폴더에 넣는다
    4.html 문서에 slick.css와 slick.min.js를 연동한다
    5.slick에서 제공하는 형식에 맞게 html를 변경한다
    6.slick github에 들어가서 Settings을 참고하여 추가 코딩한다.

    <윈도우 팝업>
    -window.open('파일명','팝업이름','옵션설정');
      **옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen 등
*/
