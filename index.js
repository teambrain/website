//import {MDCRipple} from '@material/ripple';
import {MDCTabBar} from '@material/tab-bar';
import {MDCSlider} from '@material/slider';

let goalsElements = document.querySelectorAll('.goals-tab__member');
let researchElements = document.querySelectorAll('.research-tab__member');
let membersElements = document.querySelectorAll('.members-tab__member');

let elementsByTab = [goalsElements, researchElements, membersElements];

let fall2019 = [
    'Fall 2019',
    [
        'Develop a specific research question',
        'Organize Team',
        'Begin collecting and reviewing literature',
        'Complete initial draft of research proposal',
    ]
];

let spring2020 = [
    'Spring 2020',
    [
        'Finalize a team thesis proposal and present it to a committee',
        'Identify and describe data collection method',
        'Submit IRB application',
        'Continue to read and summarize literature',
    ]
];

let fall2020 = [
    'Fall 2020',
    [
        'Implement original research',
        'Make our thesis outline',
        'Identify experts to help guide the project',
        'Present progress at the Fall Colloquia',
    ]
];

let spring2021 = [
    'Spring 2021',
    [
        'Complete data collection and analysis',
        'Write a draft of chapters 1-3 of our thesis',
        'Send draft to experts for comments and recommendations',
        'Present progress with a poster on Undergraduate Research Day',
    ]
];

let fall2021 = [
    'Fall 2021',
    [
        'Complete data analysis',
        'Redraft thesis based on completed research and suggestions',
        'Prepare presentation for rehearsal',
        'Submit names of experts to be discussants'
    ]
];

let spring2022 = [
    'Spring 2022',
    [
        'Present thesis at Presentation Rehearsal',
        'Complete team thesis',
        'Present and defend thesis at Team Thesis Conference',
        'Submit final thesis including changes suggested by expert discussants',
    ]
];

let timeline = [fall2019, spring2020, fall2020, spring2021, fall2021, spring2022];

const tabBar = document.querySelector('.mdc-tab-bar');
if (tabBar != null) {
    tabBar.addEventListener('MDCTabBar:activated', (data) => {
        window.scrollTo(0,0);
        let tabIndex = data["detail"]["index"];

        if (tabIndex === 0) {
            switchTabs(goalsElements);

        }
        else if (tabIndex === 1) {
            switchTabs(researchElements);
            slider.layout();
        }
        else {
            switchTabs(membersElements);
        }
    });

    const mdcTabBar = new MDCTabBar(tabBar);
    switchTabs(goalsElements);
}

var slider = new MDCSlider(document.querySelector('.mdc-slider'));
slider.listen('MDCSlider:change', (event) => {
    let timelineData = timeline[slider.value];
    let bodyText = '';
    timelineData[1].forEach(description => {
       bodyText += description + '<br>';
    });

    document.querySelector('.team-timeline__detail-header').innerHTML = timelineData[0];
    document.querySelector('.team-timeline__detail-body').innerHTML = bodyText;
});

function switchTabs(correctList) {
    elementsByTab.forEach(list => {
       let display = 'none';
        if (list === correctList) {
            display = 'flex';
       }

        list.forEach(element => {
           element.style.display = display;
        });
    });
}