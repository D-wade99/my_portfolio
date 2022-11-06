const sections = document.querySelectorAll('.section');
const secbtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

// button click active class
function pageTransition() {
    for (let i = 0; i < secBtn.length; i++) {
            secBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.btn-active');
            currentBtn[0].className = currentBtn[0].className.replace('btn-active', ' ');
            this.className += 'btn-active';
        });
        
    }

    // section active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            secbtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active')

            // hide other sction
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

}
pageTransition();