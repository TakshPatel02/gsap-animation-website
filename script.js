var tl = gsap.timeline();

function page1Animation() {
    tl.from("nav h1 , nav h4 , nav button", {
        y: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    });
    tl.from(".center-part-1 h1", {
        x: -100,
        opacity: 0,
        duration: 0.8,
    });
    tl.from(".center-part-1 p", {
        x: -100,
        opacity: 0,
        duration: 0.5,
    });
    tl.from(".center-part-1 button", {
        opacity: 0,
        duration: 0.35,
    });
    tl.from(
        ".center-part-2 img",
        {
            opacity: 0,
            duration: 0.6,
        },
        "-=0.85"
    );
}


function timeline2() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 40%",
            scrub: 2,
            end: "top -30%",
        },
    });
    tl2.from(".section1bottom img", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        delay: 0.5,
    });
    tl2.from(".service", {
        y: 30,
        opacity: 0,
        duration: 0.7,
    });
    tl2.from(
        "#left1",
        {
            x: -300,
            opacity: 0,
            duration: 1,
        },
        "first-line"
    );
    tl2.from(
        "#right1",
        {
            x: 300,
            opacity: 0,
            duration: 1,
        },
        "first-line"
    );
    tl2.from(
        "#left2",
        {
            x: -300,
            opacity: 0,
            duration: 1,
        },
        "second-line"
    );
    tl2.from(
        "#right2",
        {
            x: 300,
            opacity: 0,
            duration: 1,
        },
        "second-line"
    );

}

function timeline3() {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".bottom",
            scroller: "body",
            start: "top 60%",
            end: "top 10%",
            scrub: 2,
        },
    });
    tl3.from(
        ".bottom-part-1",
        {
            opacity: 0,
            y: 40,
            duration: 0.7,
        },
        "animation"
    );
    tl3.from(
        ".bottom-part-2 img",
        {
            opacity: 0,
            x: 200,
            duration: 0.7,
        },
        "animation"
    );
    tl3.from(".case_study", {
        y: 30,
        opacity: 0,
        duration: 0.75,
    })
    tl3.from(".study2 .part", {
        y: -50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2
    })
}


page1Animation()
timeline2()
timeline3()
