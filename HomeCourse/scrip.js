// 💡 Looking for a pure CSS Version? ~> https://codepen.io/bramus/pen/xxRZZdK 

// Polyfill for browsers with no Scroll-Timeline support
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const $parentDiv = document.getElementById('course-container-scroll');//#id course-container-scroll
const $chillDiv = document.getElementsByClassName('content-course'); // .class content-course 

// $chillDiv.forEach(($div) => {
//     $div.style.perspective = '40em';
//     $div.style.position = 'relative';

    
// });

for (const $div of $chillDiv) {

    $div.style.perspective = '40em';
    $div.style.position = 'relative';

    const scrollTimeline = new ScrollTimeline({

        scrollSource: $parentDiv,
        TimeRange: 1,
        orientation: 'inline',
        fill: 'both',
        scrollOffsets: [
			{ target: $div, edge: 'end', threshold: 0 },
			{ target: $div, edge: 'start', threshold: 0 },
		],
    });

    new Animation(
		new KeyframeEffect(
			$div,
			{
				zIndex: ["1", "100", "1000", "100", "1"],
                backgroundColor: "transparent",
			},
			{ duration: 1, fill: "both" }
		),
		
		scrollTimeline
	).play();

    new Animation(
		new KeyframeEffect(
			$div.querySelector('img'),// $div.getElementById("content-course").children;
			{
				transform: [
					'rotateY(-45deg) translateX(-100%)',
					'rotateY(-45deg) translateX(0)',
					'rotateY(0deg) translateZ(4em) scale(1.2)',
					'rotateY(45deg) translateX(0)',
					'rotateY(45deg) translateX(100%)',
				],
			},
			{ duration: 1, fill: "both" }
		),
		scrollTimeline
	).play();

    new Animation(
		new KeyframeEffect(
			$div.querySelector('h3'),// $div.getElementById("content-course").children;
			{
				transform: [
					'rotateY(-45deg) translateX(-100%)',
					'rotateY(-45deg) translateX(0)',
					'rotateY(0deg) translateZ(1em)',
					'rotateY(45deg) translateX(0)',
					'rotateY(45deg) translateX(100%)',
				],
			},
			{ duration: 1, fill: "both" }
		),
		scrollTimeline
	).play();

    new Animation(
		new KeyframeEffect(
			$div.querySelector('h4'),// $div.getElementById("content-course").children;
			{
				transform: [
					'rotateY(-45deg) translateX(-100%)',
					'rotateY(-45deg) translateX(0)',
					'rotateY(0deg) translateZ(1em)',
					'rotateY(45deg) translateX(0)',
					'rotateY(45deg) translateX(100%)',
				],
			},
			{ duration: 1, fill: "both" }
		),
		scrollTimeline
	).play();

    new Animation(
		new KeyframeEffect(
			$div.querySelector('div'),// $div.getElementById("content-course").children;
			{
				transform: [
					'rotateY(-45deg) translateX(-100%)',
					'rotateY(-45deg) translateX(0)',
					'rotateY(0deg) translateZ(1em)',
					'rotateY(45deg) translateX(0)',
					'rotateY(45deg) translateX(100%)',
				],
			},
			{ duration: 1, fill: "both" }
		),
		scrollTimeline
	).play();
 
}