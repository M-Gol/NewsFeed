loadNews()
async function loadNews(){
        const response = await fetch('News.json')
    
        if (!response.ok){
            console.log('Ошибка при загрузке json')
        }
        
        const News = await response.json()
        
        const NewsFeed = document.getElementById('NewsFeed')

        News.forEach(item => {
            if (item.type === "New") {
                const NewNew = document.createElement('div')
                NewNew.className = 'Box NewNew'
            
                const title = document.createElement('h3')
                title.textContent = item.title
                title.className = 'txt'
                NewNew.appendChild(title)
            
                const photo = document.createElement('img')
                photo.src = item.phot
                photo.className = 'phot'
                NewNew.appendChild(photo)
            
                const info = document.createElement('p')
                info.textContent = item.inf
                info.className = 'info'
                NewNew.appendChild(info)
            
                const btn = document.createElement('button')
                btn.textContent = '🖤'
                btn.className = 'btn'
                NewNew.appendChild(btn)
            
                NewsFeed.appendChild(NewNew)
            
                btn.addEventListener('click', function() {
                    if (btn.textContent === '🖤') {
                        btn.textContent = '🧡'
                    } else {
                        btn.textContent = '🖤'
                    }
                })
            } if (item.type === "Decor") {
                document.body.style.backgroundColor = item.BGcolor
                let boxes = document.getElementsByClassName('Box')
                for (let i = 0; i < boxes.length; i++) {
                    const element = boxes[i];
                    element.style.backgroundColor = item.BoxesColor
                    
                }
            }
            
        });

}



