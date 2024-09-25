// Replace checkForName with a function that checks the URL
import { checkForName } from './nameChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api'

// const form = document.getElementById('urlForm');
// form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    let url = document.getElementById('name').value;
    try {
        
        const response = await fetch(`/api/submit-url?url=${encodeURIComponent(url)}`, {
            method: 'GET',
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Response from server:', result);
        document.getElementById('results').innerHTML = JSON.stringify(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };

