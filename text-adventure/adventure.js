
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const imgSrc = document.getElementById('image-switch')

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
        textElement.innerText = textNode.text;
        imgSrc.innerHTML = textNode.img;

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
    } else if (nextTextNodeId === 11) {
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
        img: '<img src="images/enemy-main.png"/>',
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
        img: '<img src="images/coffee gif.gif"/>',
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
        text: "Todd yammers on and on about his wretched children. 'Christopher is going to state for track','Tourance got into Harvard'... GIVE ME A BREAK!!! How are we going to get out of this conversation?",
        img: '<img src="images/sleep.gif"/>',
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
        text: "Yes! Success! The lucious brown juice flows like the fountain of youth. Everyone in the room picks you up and cheers. You are a hero to them, you are their god. Todd tells you that the boss wants to see you. What do you do?",
        img: '<img src="images/coffee gif.gif"/>',
        options: [
        {
                text: 'Go to your boss',
                setState: { win: true},
                nextText: 9,
        },
        {
            text: 'Talk to Todd',
            nextText: 12,
        }
        ]
    },
    {
        id: 5,
        text: "You slap the coffee machine. At first nothing happens. Then, a spark and a sharp stinging sensation vibrates through your body. You have suffered a significant injury that your insurance does not cover. What do you do?.",
        img: '<img src="images/shock.gif"/>',
        options: [
        {
                text: 'Die',
                nextText: 13,
        },
        {
            text: 'Get medical treatment',
            nextText: 14,
        }
        ]
    },
    {
        id: 6,
        text: "Todd is angered by your insistance that his 'little angels' are in fact 'little devils'. He retreats, and after weeks of therapy he resigns to the fact that perhaps his children are not as interesting as he believes them to be. Todd's therapist has also given him strict orders to never speak to you again so now your only friend is the coffee machine, which doesn't seem to be working. What do you do?",
        img: '<img src="images/todd-kill.gif"/>',
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
        text: "Now you've done it. Todd, the man who's always been there for you at the office hates you now. He proceeds to pick you up, and toss you through the window. The last thing you see before falling to your death is an empty coffee machine.",
        img: '<img src="images/todd-kill.gif"/>',
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
        text: "Enough is enough, am I right? It's time to take this place down. You install a virus on the computer that skims $0.01 every 10 minutes from the company bank account. You flee the country with your new found income and retire. Congrats!",
        img: '<img src="images/virus.gif"/>',
        options: [
            {
                text: 'Claim your prize',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { win: true},
                nextText: 11
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
        text: "Your boss has called you into his office. He's extremely pleased with your coffee making skills and promotes you to CEO of coffee beans... Your dream has been achieved. You get a 2% raise but must now work weekends CONGRATS",
        img: '<img src="images/enemy-main.png"/>',
        options: [
            {
                text: 'CLAIM YOUR PRIZE',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { win: true},
                nextText: 11
            }
        ]
    },

    {
        id: 10,
        text: "Doctors Prompt",
        img: '<img src="images/main-char-up.png"/>',
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
        img: '<img src="images/main-char-down.png"/>',
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
        id: 12,
        text: "Todd does not want to talk to you. He's mad you fixed the coffee machine and took the attention off of him. Your boss is waiting.",
        img: '<img src="images/todd-kill.gif"/>',
        options: [
            {
                text: 'Go to your boss',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { win: true},
                nextText: 9
            },
            {
                text: 'Slap the machine',
                //requiredState: (currentState) => currentState.blueGoo,
                //setState: { coffee: true},
                nextText: 5
            }
        ]
    },
    {
        id: 13,
        text: "You have chosen to die. Perhaps you should have treated the coffee machine better",
        img: '<img src="images/skull.gif"/>',
        options: [
            {
                text: 'Restart',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { win: true},
                nextText: -1
            }
        ]
    },
    {
        id: 14,
        text: "You get medical treatment and feel much better... Unfortunately you are in immense medical debt and must declare bankruptcy. You spend the rest of your life working weekends to build your credit score back up again.",
        img: '<img src="images/hearts.gif"/>',
        options: [
            {
                text: 'Restart',
                //requiredState: (currentState) => currentState.blueGoo,
                setState: { win: true},
                nextText: -1
            }
        ]
    },
    
]

startGame();