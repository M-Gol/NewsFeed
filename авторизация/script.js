const butt = document.getElementById('btn')

const errorText = document.getElementById('err')

butt.addEventListener('click', function() {
    const Login = document.getElementById('inp')
    const Password = document.getElementById('inp2')
    if (Login.value === 'Matthew' && Password.value === '123') {
        errorText.textContent = 'Все верно'
        const link = document.createElement('a')
        link.textContent = 'Войти'
        link.href = "\\лента\\MMain.html"
        butt.textContent = ''
        butt.appendChild(link)
    }
    else {
        errorText.textContent = 'Неверный логин или пароль'
    }
})
