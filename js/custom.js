$(document).ready(function(){
    $(".push").mouseenter(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on')
        .siblings('.tab_con').removeClass('on');
    })
})

$(function () {
    var lastScroll = 0;
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > 1000) {
            $(".sec3").addClass("on");
        }
        else {
            $("sec3").removeClass("on");
        }
        lastScroll = scroll;
    });
});

$(function () {
    // $('.a1').click(function (e) {
    //     e.preventDefault();
    // });

    // ID mail 즉 select가 변경되었을 경우 작동
    $('#mail').change(function () {
        // ID mail 즉 select의 val값 변수에 담기
        let val = $("#mail option:selected").val();
        console.log(val)
        // 만약 val값이 1일 경우 이벤트 발생
        if (val == 'Lambgoat') {
            $('#box1').addClass('on')
            $('#box2').removeClass('on')
            // 만약 val값이 2일 경우 이벤트 발생
        } else {
            $('#box2').addClass('on')
            $('#box1').removeClass('on')
        };
    });

    const btn1 = document.querySelector('.btn1')
    const inputs1 = document.querySelector('.f1')
    btn1.addEventListener('click', () => {
        Email.send({
            // Host: "smtp.google.com",
            // Username: "deajeonner91@gmail.com",
            // Password: "2emddlEK22!",
            SecureToken: "d8a2a1a2-b2a4-4c59-9047-354483fed1c5",
            To: "deajeonner91@gmail.com",
            From: inputs1.elements["email"].value,
            Subject: "농업회사법인현준(주) 축산부문 컨택트 메일",
            Body: inputs1.elements["message"].value + "<br>" + inputs1.elements["name"].value + "<br>" + inputs1.elements["phone"].value
        }).then(msg => alert("The email successfully sent"))
    });

    const btn2 = document.querySelector('.btn2')
    const inputs2 = document.querySelector('.f2')
    btn2.addEventListener('click', () => {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "shinjinung0411@gmail.com",
            Password: "aldksgo12!@&",
            SecureToken: "b2a299cc-4bd5-43b9-b8bb-7ab5ab6c204b",
            To: "shinjinung0411@gmail.com",
            From: inputs2.elements["email"].value,
            Subject: "농업회사법인현준(주) 원예부문 컨택트 메일",
            Body: inputs2.elements["message"].value + "<br>" + inputs2.elements["name"].value + "<br>" + inputs2.elements["phone"].value
        }).then(msg => alert("The email successfully sent"))
    });

    $(document).ready(function () {
        // Show or hide the sticky footer button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
            }
        });

        // Animate the scroll to top
        $('.go-top').click(function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0
            }, 300);
        })
    });

    var spot1 = $(".sec2").offset().top;
    var spot2 = $(".sec3").offset().top;
    var spot3 = $(".sec4").offset().top;
    var spot5 = $(".sec5").offset().top;
    var spot6 = $(".sec6").offset().top;
    var spot7 = $(".sec7").offset().top;
    $("#sec2").click(function () {
        $("html, body").animate({
            scrollTop: spot1
        }, 700);
    });
    $("#sec3").click(function () {
        $("html, body").animate({
            scrollTop: spot2
        }, 700);
    });
    $("#sec4").click(function () {
        $("html, body").animate({
            scrollTop: spot3
        }, 700);
    });
    $("#sec5").click(function () {
        $("html, body").animate({
            scrollTop: spot4
        }, 700);
    });
    $("#sec6").click(function () {
        $("html, body").animate({
            scrollTop: spot5
        }, 700);
    });
    $("#sec7").click(function () {
        $("html, body").animate({
            scrollTop: spot6
        }, 700);
    });
    $("#sec8").click(function () {
        $("html, body").animate({
            scrollTop: spot7
        }, 700);
    });

    $(".container").click(function () {
        $('nav').slideToggle();
    });
});
