import { useState } from 'react'
import './loginPage.css'
const LoginPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [checkbox, setCheckbox] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setLogin('')
        setPassword('')   
        console.log(checkbox)
    }

    return (
        
    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Регистрация</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>или используйте свой E-mail для регистрации</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Зарегистрироваться</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Авторизация</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>или используйте свой аккаунт</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Забыли пароль?</a>
                <button className='ButtonLogin'>Вход</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Добро пожаловать!</h1>
                    <p>Чтобы оставаться на связи с нами, пожалуйста, войдите в систему с вашей личной информацией</p>
                    <button class="ghost" id="signIn">Авторизация</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Привет, Друг!</h1>
                    <p>Введите свои личные данные и начните путешествие вместе с нами</p>
                    <button class="ghost" id="signUp">Регистрация</button>
                </div>
            </div>
        </div>
    </div>
        )
        }
        
export default LoginPage