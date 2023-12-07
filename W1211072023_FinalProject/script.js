
$(document).ready(function() {
    let myDotsIds = [".dotRight", ".dotUp", ".dotLeft", ".dotMiddle", ".dotLow", ".dotBottom"];
    let speechBubble = $("#SpeechBubble");
    let myReadings = [
        "In the scroll of your palm, I read the fading echoes of the Internet, drowned in the sea of a global network’s contradictions.",
        "The pixelated heart line whispers of love lost in the labyrinth of digital media interfaces, broken connections.",
        "A forked fate line reveals the splintering paths of societal division, leading us further into a fractured future.",
        "The mounts of Venus and Mars, once entwined, now stand apart, reflecting the widening gender gaps and fractured relationships.",
        "On the mount of Luna, the lunar sorrow reflects the eroding sense of community, lost in the shadows of isolation.",
        "The fragmented Intellectual Ownership line symbolizes shattered principles of ownership, leaving your intellectual creations in disarray.",
        "The chained Surveillance lines bind you in a web of invasive technologies, restricting your freedom to navigate the digital landscape without constant monitoring.",
        "The fading Advertising lines signify a world where your pursuit of human attention is overshadowed by the relentless drive for profit, leaving authenticity in perpetual eclipse.",
        "Your diverging fate line unveils the crossroads of your ideologies and their critique, guiding you into a future where your thoughts are fractured by the commodification of your beliefs.",
        "On the peak of Digital Arts, your creative inspiration dwindles, lost in the shadows of a world commodifying your artistic expression.",
        "The square on the Labor Issues peak reflects the rigid structures of employment stifling your individual aspirations, leaving you oppressed.",
        "The Advertising lines, severed and intertwined, paint a picture of your strained relationship with the contradictions of online promotion.",
        "The chained Surveillance lines bind you in a web of invasive technologies, restricting your collective freedom to navigate the societal landscape without constant monitoring.",
        
    ];

    for (let i = 0; i < myDotsIds.length; i++) {
        let currentDot = $(myDotsIds[i]);

        currentDot.hover(
            function() {
                let idx = Math.floor(Math.random(1) * myReadings.length);
                let theHolyText = myReadings[idx];

                speechBubble.text(theHolyText);
                speechBubble.css({
                    "animation-name": "expand-bounce",
                    "animation-duration": "0.6s",
                    "top": currentDot.position().top - speechBubble.outerHeight() - 20,
                    "left": currentDot.position().left,
                    "text-align": "left",
                    "font-family": "Work Sans, sans-serif",
                    "letter-spacing": "0.2vw",
                    "font-weight": "50"
                });
            },
            function() {
                speechBubble.css({
                    "animation-name": "shrink",
                    "animation-duration": "0.1s",
                });
            }
        );
    }
    var myAudio = new Audio('../assets/sound/172876__sclolex__spookymagic.mp3');

    myAudio.loop = true;
    myAudio.play();
});

