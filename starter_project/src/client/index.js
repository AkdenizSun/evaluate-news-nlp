// js files
import { handleSubmit } from './js/formHandler'
import { checkForName } from './js/nameChecker'

// scss files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);