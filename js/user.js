const createTopicButtons = document.querySelectorAll('.add-topic__btn');
const createTopicFormContainer = document.querySelector('.create-topic-form');
const createTopicClose = document.querySelector('.create-topic-close');

const userSettingsToggle = document.querySelector('.user-view__menu--item--1');
const userTopicsToggle = document.querySelector('.user-view__menu--item--2');
const userReportsToggle = document.querySelector('.user-view__menu--item--3');

const userSettings = document.querySelector('.user-view__info--settings');
const userTopics = document.querySelector('.user-view__info--topics');
const userReports = document.querySelector('.user-view__info--reports');

createTopicButtons.forEach(b => {
    b.addEventListener('click', function() {
        createTopicFormContainer.style.transform = 'translateX(-50%) scaleX(1)';
        createTopicFormContainer.style.opacity = '1';
    });
});

createTopicClose.addEventListener('click', function(){
    createTopicFormContainer.style.transform = 'translateX(-50%) scaleX(0)';
    createTopicFormContainer.style.opacity = '0';
});

const tabulate = (tab, tabs) => {
    tabs.forEach(t => {
        t.classList.add('hide')
    });
    tab.classList.remove('hide');
};
const setActiveTabs = (item, items) => {
    items.forEach(t => {
        t.classList.remove('user-view__menu--item--active')
    });
    item.classList.add('user-view__menu--item--active');
};

userSettingsToggle.addEventListener('click', e => {
   tabulate(userSettings, [userSettings, userTopics, userReports]);
   setActiveTabs(userSettingsToggle, [userSettingsToggle, userTopicsToggle, userReportsToggle])
});
userTopicsToggle.addEventListener('click', e => {
   tabulate(userTopics, [userSettings, userTopics, userReports]);
   setActiveTabs(userTopicsToggle, [userSettingsToggle, userTopicsToggle, userReportsToggle]);
});
userReportsToggle.addEventListener('click', e => {
   tabulate(userReports, [userSettings, userTopics, userReports]);
   setActiveTabs(userReportsToggle, [userSettingsToggle, userTopicsToggle, userReportsToggle]);
});