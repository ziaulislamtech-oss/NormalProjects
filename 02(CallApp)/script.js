let plusIcon = document.querySelector('.plus')
let form = document.querySelector('.form-container')
// form.style.display = 'block'
plusIcon.addEventListener('click', (dets) => {
    dets.preventDefault()
    form.style.display = 'block'
    let closeBtn = document.querySelector('#buttons #close')
    closeBtn.addEventListener('click', () => {
        // Remove required attributes before hiding
        const requiredInputs = form.querySelectorAll('[required]');
        requiredInputs.forEach(input => {
            input.removeAttribute('required');
        });

        form.style.display = 'none';

    });
})
function getFormData() {
    let imageInput = document.querySelector('input[type="url"]')
    let fullName = document.querySelector('input[name="fullName"]')
    let homeTown = document.querySelector('input[name="homeTown"]')
    let purpose = document.querySelector('textarea[name="purpose"]')
    let submitBtn = document.querySelector('#buttons button[type="submit"]')
    submitBtn.addEventListener('click',createCard)
}

function createCard() {
    // Create main card container
    const card = document.createElement('div');
    card.className = 'card';
    
    // Create image element
    const img = document.createElement('img');
    img.src = data.imageUrl || 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    img.alt = data.fullName + "'s profile picture";
    
    // Create name heading
    const name = document.createElement('h3');
    name.textContent = data.fullName || 'No Name';
    
    // Create middle section
    const middle = document.createElement('div');
    middle.className = 'middle';
    
    // Create right section (labels)
    const right = document.createElement('div');
    right.className = 'right';
    
    const homeTownLabel = document.createElement('p');
    homeTownLabel.textContent = 'Home Town';
    
    const purposeLabel = document.createElement('p');
    purposeLabel.textContent = 'Purpose';
    
    // Create left section (values)
    const left = document.createElement('div');
    left.className = 'left';
    
    const homeTownValue = document.createElement('p');
    homeTownValue.textContent = data.homeTown || 'Not specified';
    
    const purposeValue = document.createElement('p');
    purposeValue.textContent = data.purpose || 'No purpose specified';
    
    // Create bottom section
    const bottom = document.createElement('div');
    bottom.className = 'bottom';
    
    // Create call button section
    const callDiv = document.createElement('div');
    callDiv.className = 'call';
    
    const callButton = document.createElement('button');
    
    // Create phone icon
    const phoneIcon = document.createElement('i');
    phoneIcon.className = 'ri-phone-fill';
    
    // Add icon and text to call button
    callButton.appendChild(phoneIcon);
    callButton.appendChild(document.createTextNode('call'));
    
    // Create message button section
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    
    const messageButton = document.createElement('button');
    messageButton.textContent = 'message';
    
    // Assemble the card structure
    // Assemble right section
    right.appendChild(homeTownLabel);
    right.appendChild(purposeLabel);
    
    // Assemble left section
    left.appendChild(homeTownValue);
    left.appendChild(purposeValue);
    
    // Assemble middle section
    middle.appendChild(right);
    middle.appendChild(left);
    
    // Assemble bottom section
    callDiv.appendChild(callButton);
    messageDiv.appendChild(messageButton);
    bottom.appendChild(callDiv);
    bottom.appendChild(messageDiv);
    
    // Assemble the entire card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(middle);
    card.appendChild(bottom);
    
    return card;
}

// Usage example:
// const cardData = {
//     imageUrl: 'https://example.com/image.jpg',
//     fullName: 'Zia Ul Islam',
//     homeTown: 'Karachi',
//     purpose: 'Discussion about client project'
// };

// const newCard = createCard(cardData);
// document.querySelector('.card-stack').appendChild(newCard);