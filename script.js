// DATA
const featuresDta = [
    {
        title: 'Bookmark in one click',
        text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        url: './images/illustration-hero.svg'
    },
    {
        title: 'Intelligent search',
        text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        url: './images/illustration-features-tab-2.svg'

    },
    {
        title: 'Share your bookmarks',
        text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        url: './images/illustration-features-tab-3.svg'
    }

];
const QNA = [
    {
        question: 'What is Bookmark?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
    },
    {
        question: 'How can I request a new browser?',
        answer: 'ivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
    },
    {
        question: 'Is there a mobile app?',
        answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
    },
    {
        question: 'What about other Chromium browsers?',
        answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
    }
];


(function () {
'use strict'

// DOM ELEMENTS
// Features - Section;
const features = document.querySelectorAll('.ftr');
const title = document.querySelector('.f-title');
const text = document.querySelector('.f-text');
const img = document.querySelector('.f-img');
// FAQ - Section;
const faqList = document.querySelector('.faq');
// Verification - Section;
const container = document.querySelector('.error-wr')
const email = document.querySelector('.email');
const submit = document.querySelector('.submit');
// Modal - Section
const modal = document.querySelector('.modal')
const hamburger =  document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close');
const modalLink = document.querySelector('.modal-link');

// ============================================
function openFeature() {
    const activate = (num) => {
        features.forEach(el => el.classList.remove('active'))
        this.classList.add('active')
        title.textContent = featuresDta[num].title;
        text.textContent = featuresDta[num].text;
        img.src = featuresDta[num].url;
    }

    if(this.classList[1] === 'bookmarking') activate(0)
    if(this.classList[1] === 'searching') activate(1)
    if(this.classList[1] === 'shearing') activate(2)
}

function openQuestion() {
    const test = document.querySelectorAll('.faq li');
    if(this.className === 'open') {
        this.classList.toggle('open');
    }
    else {
        test.forEach(el => el.classList.remove('open'))
        this.classList.add('open')
    }
}

function renderQAF() {
    QNA.forEach(el => {
        // Creating elements
        const listItem = document.createElement('li');
        const questionBox = document.createElement('div');
        questionBox.classList.add('ques');
        const question = document.createElement('p');
        question.textContent = el.question;
        const arrow = document.createElement('img');
        arrow.src = './images/icon-arrow.svg';
        const answer = document.createElement('p');
        answer.classList.add('answ');
        answer.textContent = el.answer;
        // Adding funcionallity
        listItem.addEventListener('click', openQuestion);
        // Appending to DOM;
        faqList.append(listItem);
        listItem.append(questionBox);
        questionBox.append(question);
        questionBox.append(arrow);
        listItem.append(answer);
    })
}

function checkEmail() {
    const re = /\S+@\S+\.\S+/;
    re.test(email.value) 
    ? container.classList.remove('throw')
    : container.classList.add('throw');

    email.placeholder = 'email@example/com';
}

function openModal() {
    modal.classList.add('pop')
}
function closeModal() {
    modal.classList.remove('pop')
}


renderQAF()
// Events
features.forEach(el => {
    el.addEventListener('click', openFeature)
})

submit.addEventListener('click', checkEmail);

hamburger.addEventListener('click', openModal)

closeMenu.addEventListener('click', closeModal)

modalLink.addEventListener('click' ,closeModal)

})()


