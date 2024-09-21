// js files
import { handleSubmit } from './js/formHandler'
import { checkForName } from './js/nameChecker'

// scss files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


async function sendUrlToServer(e) {
    e.stopImmediatePropagation();
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

const form = document.getElementById('submitButton');
form.addEventListener('click', sendUrlToServer);