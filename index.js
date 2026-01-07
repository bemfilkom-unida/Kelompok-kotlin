const reveal = document.querySelectorAll(".konteks");
const popup = document.querySelectorAll(".pop");


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.3
}
);
reveal.forEach(el => {
    observer.observe(el);
});

const observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.3
}
);
popup.forEach(el => {
    observers.observe(el);
});

const inners = document.querySelectorAll('.video-inner');
inners.forEach((inner, cardIndex)=>{
    const videos = inner.querySelectorAll('video');
    let index = 0;
    
    function showVideo(i){
        inner.style.transform = `translateX(-${i * 100}%)`;
    
        videos.forEach(v => {
            v.pause();
            v.currentTime = 0;
        });
    }
    const cardContainer = inner.parentElement;
    cardContainer.querySelector('.next').onclick = () => {
        index = (index + 1) % videos.length;
        showVideo(index);
    };
});


document.querySelectorAll('.prev').onclck = () => {
    index = (index - 1 + videos.length) % videos.length;
    showVideo(index);
};

const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener("click", ()=> {
        items.forEach(i => {
            if (i !== item){
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.maxHeight = null;
            }
        });
        item.classList.toggle('active');
        if(item.classList.contains('active')){
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }

    });
});
