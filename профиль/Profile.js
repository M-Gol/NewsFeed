loadNews()
async function loadNews(){
        const response = await fetch('News.json')
    
        if (!response.ok){
            console.log('Ошибка при загрузке json')
        }
        
        const News = await response.json()
        News.forEach(item => { if (item.type === "Decor") {
            document.body.style.backgroundColor = item.BGcolor
            let boxes = document.getElementsByClassName('Box')
            for (let i = 0; i < boxes.length; i++) {
                const element = boxes[i];
                element.style.backgroundColor = item.BoxesColor
                
            }
        }
        
    });
}