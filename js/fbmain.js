if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += "no-touch";
}

$('a').on("touchstart", function (e) {
    var link = $(this);
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('a').not(this).removeClass('hover');
        e.preventDefault();
        return false;
    }
});

$(document).ready(function($) {
    $('.container--grid ul').mixItUp({
        animation: {
        duration: 350,
        effects: 'fade translateY(40px)',
        easing: 'ease'
        }
    });
    var filter_tab = $('.filter .placeholder a');
    $('.filter ').on('click', function(event){
        var selected_filter = $(event.target).data('type');
        if( filter_tab.data('type') !== selected_filter ) {
            $('.filter .selected').removeClass('selected');
            $(event.target).addClass('selected');
        }
    });
});


var lazyLoad = {
    //获取元素到页面顶部的距离
    getoffsetTop: function(elem) {
        var offTop = 0;
        while (elem != null) {
            offTop += elem.offsetTop; //获取元素到其上一级元素顶部的距离
            elem = elem.offsetParent; //元素的上一级元素
        }
        return offTop;
    },
    //判断是否加载图片
    isLoad: function(elem) {
        var cHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight, //可视窗口的高度
            sX = window.pageXOffset || document.body.scrollTop || document.documentElement.scrollTop, //浏览器可视窗口距离页面顶部的距离
            threshold = 0, //表示图片在什么时候进行加载，默认为 0 表示当图片进入可视区域立即加载；设为正数表示图片距离 threshold像素进入可视区域进行加载；设为负数表示图片进入可视区域threshold像素时进行加载。
            oTop = this.getoffsetTop(elem), //元素到页面顶部的距离
            viewHeight = oTop - sX - threshold; //元素到浏览器窗口顶部的距离
        if (cHeight >= viewHeight) //图片进入浏览器可视区域，加载图片
        {
            return true;
        } else { //图片没进入浏览器可视区域，不载图片
            return false;
        }
    },
    //加载图片。isFadein:true时，图片使用淡入动画效果加载
    loadImg: function(elems, isFadein) {
        for (var i = 0, len = elems.length; i < len; i++) {
            if (this.isLoad(elems[i])) {
                var classNames = elems[i].className;
                if (classNames.indexOf("loaded") < 0) {
                    //针对使用data-自定义的属性，要使用getAttribute()获取值
                    var dataUrl = elems[i].getAttribute("data-url"); //实际的url替换原来的url
                    elems[i].style.backgroundImage = "url(" + dataUrl + ")"; //加载图片
                    elems[i].className = classNames + " loaded"; //被加载出来的图片，添加class属性，用于判断下次是否要加载
                    if (isFadein) {
                        this.fadeIn(elems[i]);//淡入效果显示图片，有点闪烁？？
                    }
                }
            } else {
                return; //下一个图片没有进入加载区域，就不在循环
            }
        }
    },
    //使用淡入动画效果加载图片
    fadeIn: function(elem) {
        var n = 0,
            isnotIE = window.XMLHttpRequest ? true : false;
        if (isnotIE) {
            elem.style.opacity = 0;
        } else {
            elem.style.filter = "alpha(opacity=0)";
        }
        var t = setInterval(function() {
            if (n < 100) {
                n += 5;
                if (isnotIE) {
                    elem.style.opacity = n / 100;
                } else {
                    elem.style.filter = "alpha(opacity=" + n + ")";
                }
            } else {
                clearInterval(t);
            }
        }, 10);
    }
};

window.onscroll = function() { //滚动时根据需要加载图片，加载图片的动画效果为淡入，设置第二个参数为true
    lazyLoad.loadImg(document.getElementsByClassName("card-image"), true);
};
window.onload = function() { //页面加载后，可视区域的图片显示为实际图片
    lazyLoad.loadImg(document.getElementsByClassName("card-image"), true);
};

var getUrlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(decodeURI(window.location.href));
    return results && results[1] || 0;
};

// ---------- video page ----------
(function() {
    var videoUrl = getUrlParam('url');
    if (!videoUrl) {
        videoUrl = 'http://www.iqiyi.com/v_19rrn8h3xg.html';
    }
    $("#videoIframe").attr('src', 'https://api.47ks.com/webcloud/?v=' + videoUrl);

    var s = $('input'),
        f = $('form'),
        a = $('.after'),
        m = $('h4');
    s.focus(function(){
        if( f.hasClass('open') ) return;
        f.addClass('in');
        setTimeout(function(){
            f.addClass('open');
            f.removeClass('in');
        }, 1300);
    });
    a.on('click', function(e){
        e.preventDefault();
        if( !f.hasClass('open') ) return;
        s.val('');
        f.addClass('close');
        f.removeClass('open');
        setTimeout(function(){
            f.removeClass('close');
        }, 1300);
    });
    f.submit(function(e){
        e.preventDefault();
        m.html('正在搜索!').addClass('show');
        f.addClass('explode');
        setTimeout(function(){
            var videoUrl = s.val();
            window.location = '/videos?url=' + videoUrl;
        }, 2000);
    });
}());
