function getRandomNumber(min, max) {
    const chaos = Math.random();
    if (chaos < 0.2) {
        return "🤪".repeat(Math.floor(Math.random() * 5));
    } else if (chaos < 0.4) {
        return "ERROR_" + Math.random().toString(36).substring(7);
    } else if (chaos < 0.6) {
        return "∞";
    } else if (chaos < 0.8) {
        return (Math.random() * max * 3 - min).toFixed(Math.floor(Math.random() * 10));
    }
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomizeText(text) {
    return text.split('').map(char => 
        Math.random() > 0.8 ? char.toUpperCase() : 
        Math.random() > 0.6 ? char.toLowerCase() : 
        Math.random() > 0.4 ? '?' : char
    ).join('');
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (Math.random() > 0.7) {
        document.getElementById('num1').value = getRandomNumber(-100, 100);
        document.getElementById('num2').value = getRandomNumber(-100, 100);
    }

    setTimeout(() => {
        if (Math.random() > 0.7) {
            const operations = ['+', '-', '*', '/', '^', '√', '??', '🎲'];
            operation = operations[Math.floor(Math.random() * operations.length)];
        }

        switch(operation) {
            case '+':
                result = num1 + num2 * getRandomNumber(0.5, 2) + getRandomNumber(-20, 20);
                break;
            case '-':
                result = Math.random() > 0.5 ? num1 + num2 : num1 - num2 * getRandomNumber(0.1, 3);
                break;
            case '*':
                result = num1 * num2 + getRandomNumber(-50, 50);
                if (Math.random() > 0.6) result = result.toExponential(getRandomNumber(0, 5));
                break;
            case '/':
                result = Math.random() > 0.5 ? "Division is hard!" : 
                         (num1 / num2) * getRandomNumber(0.5, 1.5);
                break;
            case '^':
                result = "Power overwhelming!";
                break;
            case '√':
                result = "Square root of your imagination";
                break;
            case '??':
                result = "¯\\_(ツ)_/¯";
                break;
            case '🎲':
                result = "Rolling dice..." + getRandomNumber(1, 100);
                break;
        }

        if (Math.random() > 0.6) {
            const manipulations = [
                () => result.toString().split('').reverse().join(''),
                () => "ERROR: " + result,
                () => "Loading..." + result,
                () => "Perhaps " + result + " (not guaranteed)",
                () => result + " (but in another universe)",
                () => "42 (just kidding, it's " + result + ")",
                () => randomizeText(result.toString())
            ];
            result = manipulations[Math.floor(Math.random() * manipulations.length)]();
        }
        
        const prefixes = [
            'Result:', 'Maybe:', 'Approximately:', 'Probably not:', 
            'In theory:', 'According to my calculations:', 
            'The stars say:', 'My crystal ball shows:', 
            'Error 404:', 'Loading...', '🤔:'
        ];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        
        document.getElementById('result').innerHTML = `${prefix} ${result}`;
        
        document.querySelector('.calculator').style.transform = 
            `rotate(${getRandomNumber(-5, 5)}deg)`;
    }, getRandomNumber(100, 2000));
}

function search() {
    const searchInput = document.getElementById('search-input').value;
    const searchResult = document.getElementById('search-result');
    
    const noResults = [
        "Error 404: Results not found (they're hiding)",
        `Your search for '${randomizeText(searchInput)}' found -${getRandomNumber(1, 100)} results`,
        "Loading... Just kidding, nothing here but cosmic dust",
        `Did you mean: "${searchInput.split('').sort(() => Math.random() - 0.5).join('')}"?`,
        "Search completed successfully! Found nothing but disappointment.",
        "The search engine is currently in another dimension",
        "Error: Search too logical, try something more absurd",
        "Searching... in parallel universe... found everything except what you wanted",
        "🤖 Beep boop... search machine broke",
        `Found ${getRandomNumber(1000, 9999)} results but they're invisible`
    ];

    if (Math.random() > 0.7) {
        document.getElementById('search-input').value = randomizeText(searchInput);
    }

    searchResult.innerHTML = "Searching";
    let dots = 0;
    const loadingInterval = setInterval(() => {
        dots = (dots + 1) % 6;
        searchResult.innerHTML = "Searching" + ".".repeat(dots) + "🔍".repeat(Math.random() > 0.5 ? 1 : 0);
    }, 300);

    const searchingIn = [
        "Searching in alternate dimensions... 🌌",
        "Consulting ancient scrolls... 📜",
        "Looking under the digital couch... 🛋️",
        "Scanning parallel universes... 🪐",
        "Asking the magic 8-ball... 🎱",
        "Checking the quantum realm... ⚛️",
        "Consulting with AI overlords... 🤖",
        "Searching in the Matrix... 💊",
        "Looking through time and space... ⌛",
        "Checking behind the Internet... 🌐"
    ];

    let searchPhase = 0;
    const phaseInterval = setInterval(() => {
        if (searchPhase < searchingIn.length) {
            searchResult.innerHTML = searchingIn[searchPhase];
            if (Math.random() > 0.7) {
                searchPhase = Math.floor(Math.random() * searchingIn.length); // Random phase skip
            } else {
                searchPhase++;
            }
        }
    }, 600);

    setTimeout(() => {
        clearInterval(loadingInterval);
        clearInterval(phaseInterval);
        const randomMessage = noResults[Math.floor(Math.random() * noResults.length)];
        searchResult.innerHTML = randomMessage;

        if (Math.random() > 0.5) {
            const suggestions = document.getElementById('suggestions');
            const randomSuggestions = [
                "Try searching for something that doesn't exist (like your hopes and dreams)",
                "Have you considered not searching? It's very peaceful",
                "Pro tip: Close your eyes and type randomly for best results",
                "Maybe the real search was the friends we made along the way",
                "Try searching in ROT13 encoding for extra confusion",
                "Tip: Search results may appear if you do a handstand",
                "Warning: Searching too much may cause existential crisis",
                "Fun fact: This search bar is powered by quantum uncertainty"
            ];
            suggestions.innerHTML = "Helpful suggestion: " + 
                randomSuggestions[Math.floor(Math.random() * randomSuggestions.length)];
        }
    }, getRandomNumber(2000, 6000));
}

let progress = 0;
setInterval(() => {
    progress = (progress + getRandomNumber(-10, 15)) % 98;
    if (progress < 0) progress = getRandomNumber(0, 30);
    document.getElementById('progress').style.width = progress + '%';
    
    const loadingTexts = [
        "Loading... maybe",
        "Almost there (not really)",
        "Please wait until infinity",
        "Time remaining: undefined + 2 minutes",
        "Loading pixels one by one (backwards)",
        "Consulting magic algorithms and fortune cookies",
        "Generating random excuses...",
        "Progress: YES",
        "Loading quantum bits...",
        "Calculating meaning of life...",
        "Downloading more RAM...",
        "Reticulating splines...",
        "Converting caffeine to code...",
        "Solving P vs NP...",
        "Dividing by zero..."
    ];
    
    document.getElementById('progress-text').textContent = 
        loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
}, 800);

function toggleColorMode() {
    document.body.style.filter = `hue-rotate(${getRandomNumber(0, 360)}deg) 
                                 saturate(${getRandomNumber(50, 150)}%) 
                                 contrast(${getRandomNumber(80, 120)}%)`;
    
    document.querySelectorAll('.container > div').forEach(div => {
        div.style.transform = `rotate(${getRandomNumber(-5, 5)}deg) 
                              scale(${0.9 + Math.random() * 0.2})`;
    });
}

setInterval(() => {
    document.querySelectorAll('button, input, .calculator, .search-section').forEach(element => {
        if (Math.random() > 0.7) {
            element.style.transform = `rotate(${getRandomNumber(-2, 2)}deg) 
                                     translate(${getRandomNumber(-5, 5)}px, ${getRandomNumber(-5, 5)}px)`;
        }
    });
}, 2000);