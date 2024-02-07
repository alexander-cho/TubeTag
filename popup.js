document.addEventListener('DOMContentLoaded', function() {
    // references to DOM elements
    const totalCount = document.getElementById('total');
    const tagInput = document.getElementById('tagInput');
    const incrementButton = document.getElementById('incrementButton');
    const linkList = document.getElementById('linkList'); // Added reference to a <ul> element

    // initialize link count and link array
    let linkCount = 0;
    const links = [];

    // update total count in the popup
    const updateCount = () => {
        totalCount.textContent = linkCount;
    };
    
    // Update the list of links
    const updateLinkList = () => {
        // Clear the existing list
        linkList.innerHTML = '';

        // Populate the list with the links
        for (const link of links) {
            const listItem = document.createElement('li');
            listItem.textContent = link;
            linkList.appendChild(listItem);
        }
    };
    
    // Increment count, add link, and update the display when the button is clicked
    incrementButton.addEventListener('click', function() {
        // Get the entered link from the input field
        const enteredLink = tagInput.value.trim();

        if (enteredLink) {
            // Increment the link count
            linkCount++;

            // Add the link to the array
            links.push(enteredLink);

            // Update the count display
            updateCount();

            // Update the list of links
            updateLinkList();

            // Clear the input field
            tagInput.value = '';

            // Log the link count and entered link to the console (you can modify this part)
            console.log(`Incremented count to ${linkCount}, entered link: ${enteredLink}`);
        } else {
            // Alert the user if the link is not valid (you can modify this part)
            alert('Please enter a valid YouTube link.');
        }
    });

    // Initial count and link list update
    updateCount();
    updateLinkList();
});

