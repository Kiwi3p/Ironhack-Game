
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
//const imgSrc = document.getElementById('image-switch')

let state = {}

function startGame() {
    //console.log(imgSrc);
    state = {}
    showTextNode(1);
    //youWin();

}

function showTextNode(textNodeIndex) {
    
    const textNode = textNodes.find(textNode => textNode.id ===
        textNodeIndex)
        textElement.innerText = textNode.text

    //const textImg = textNodes.find(textNode => textNode.img === textNodeIndex)    
        //imgSrc.innerHTML = textImg.img
        
        while (optionButtonsElement.firstChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }

        textNode.options.forEach(option => {
            if (showOption(option)) {
                const button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('btn')
                button.addEventListener('click', () => selectOption(option))
                optionButtonsElement.appendChild(button)
            }
        })


}


function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}


function selectOption(option) {
    const nextTextNodeId = option.nextText  
    if (nextTextNodeId <= 0) {
        return startGame()
    } else if (nextTextNodeId === 9) {
        console.log('this should be finished');
        callThirdLevel();
    } else if (nextTextNodeId === 10) {
        console.log('this should send you to the doctors');
        callFourthLevel();
    }

    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

/*
function showImageSrc(textNodes) {
    //for in loop
    for (key in textNodes) {
    const nextTextNodeId = textNodes[key].id;
    console.log(nextTextNodeId);
    //const imgId = key.img;
    //let link = document.getElementsByClassName('img');
    console.log(imgSrc);
    console.log(key);
    if (nextTextNodeId === 1 ) {
        imgSrc.innerHTML = '<img src="images/treasure.png"/>';
    } else if (nextTextNodeId === 2 ) {
        imgSrc.innerHTML = '<img src="images/object1.png"/>';
    }
    showTextNode(nextTextNodeId)
    }
}
*/

//function finds texNodes you want by the level....
//second function takes in individual textnodes...

//if (nextText === 1) {
//    let link = document.getElementsByClassName('img');
//    link.setAttribute('src', '../images/object1.png');
//}


const textNodes = [
    {
        id: 1,
        text: "You've escaped your boss! Finally, you can take a break knowing you won't have to work this Saturday. What do you do?",
        img: '<img src="images/boss-up.png"/>',
        options: [
            {
                text: 'Make coffee',
                //setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: 'Talk to Todd',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: "You skip past Todd as he tries to tell you about his children. This does not interest you as you as you're all business, and the business of the day is coffee. You approach the machine, but the mean bean machine has dried up from seam to seam. What do you do?",
        img: '../images/boss-up.png',
        options: [
            {
                text: 'Fill the coffee machine',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { coffee: true},
                nextText: 4
            },
            {
                text: 'Slap the machine',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true },
                nextText: 5
            },
            {
                text: 'Talk to Todd',
                nextText: 3
            },
        ]
    },
    {
        id: 3,
        text: "Todd resembles something of a cross between Elvis in his later years, and Johnny Depp. You've always thought about telling him this, but you were never sure if he'd take it as a compliment or as an insult. He yammers on and on again about his wretched children. 'Christopher is going to state for track','Tourance got into Harvard'... GIVE ME A BREAK!!! For gods sake the guy just goes on and on and on, yet he doesn't notice the massive stain on his button down shirt. How are we going to get out of this conversation?",
        options: [
            {
                text: 'Tell him his children are awful',
                nextText: 6
            },
            {
                text: 'Tell him about the stain on his shirt',
                nextText: 7
            },
            {
                text: 'Simply just walk away to the coffee machine',
                nextText: 2
            },
            {
                text: "Install a virus on the office's main server",
                nextText: 8
            }
        ]
    },
    {
        id: 4,
        text: "Yes! Success! The lucious brown juice flows like the fountain of youth. You try to take a sip, but before you can do anything, everyone in the room picks you up and cheers. You are a hero to them, you are their god. Just when you put your guard downn to enjoy the celebration, Todd tells you that the boss wants to see you. What do you do?",
        options: [
        {
                text: 'Go to your boss',
                setState: { win: true},
                nextText: 9,
        },
        {
            text: 'Go to the doctors',
            nextText: window.open("./doctor/doctor1.html"),
        }
        ]
    },
    {
        id: 5,
        text: "You slap the machine hoping to god that coffee will come out. At first nothing happens. Then, a spark and a sharp stinging sensation vibrates through your body. You have suffered a significant injury and must go to the hospital.",
        options: [
        {
                text: 'Go to the doctors',
                nextText: -1,
        }
        ]
    },
    {
        id: 6,
        text: "Todd is angered by your insistance that his 'little angels' are in fact little devils. He retreats, and after weeks of therapy he resigns to the fact that perhaps his children are not as interesting as he believes them to be. Todd's therapist has also given him strict orders to never speak to you again so now you only friend is the coffee machine, which doesn't seem to be working. What do you do?",
        options: [
            {
                text: 'Fill the coffee machine',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { coffee: true},
                nextText: 4
            },
            {
                text: 'Slap the machine',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true },
                nextText: 5
            }
        ]
    },
    {
        id: 7,
        text: "Now you've done it. Todd, the man who's always been there for you at the office hates you now. Not just that, but he can't believe you'd embarass him like this. After all these years of working together you mock him for a stain on his shirt? He simply says 'sorry' before proceeding to pick you up, and toss you through the window. The last thing you see before falling to your death is an empty coffee machine.",
        options: [
            {
                text: 'Restart',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { coffee: true},
                nextText: -1
                
            },
        ]
    },
    {
        id: 8,
        text: "Enough is enough, am I right? It's time to take this place down. <br>You install a virus on the computer that skims $0.01 every 10 minutes from the company bank account. While you're worried someone will catch on, you realize that you're both the IT guy and the company accountant. You flee the country with your new found income and retire. Congrats!",
        options: [
            {
                text: 'Claim your prize',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { win: true},
                nextText: -1
            },
            {
                text: 'Restart',
                //requiredState: (currentState) => currentState.blueGoo,
                //setState: { coffee: true},
                nextText: -1
            }
        ]
    },
    {
        id: 9,
        text: "Why are you seeing this?",
        options: [
            {
                text: '???',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { win: true},
                nextText: -1
            },
            {
                text: 'r u a wizard',
                //requiredState: (currentState) => currentState.blueGoo,
                //setState: { coffee: true},
                nextText: -1
            }
        ]
    },

    {
        id: 10,
        text: "Doctors Prompt",
        options: [
            {
                text: 'Why are you seeing this?',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { win: true},
                nextText: -1
            },
            {
                text: 'r u a wizard',
                //requiredState: (currentState) => currentState.blueGoo,
                //setState: { coffee: true},
                nextText: -1
            }
        ]
    },

    {
        id: 11,
        text: "Winner Prompt",
        options: [
            {
                text: 'Why are you seeing this?',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { win: true},
                nextText: -1
            },
            {
                text: 'r u a wizard',
                //requiredState: (currentState) => currentState.blueGoo,
                //setState: { coffee: true},
                nextText: -1
            }
        ]
    }
    
]

startGame();