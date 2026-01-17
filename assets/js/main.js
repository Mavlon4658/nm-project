const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header-btn');

headerBtn.onclick = () => {
    header.classList.toggle('active');
}

const accordions = document.querySelectorAll('.accordions');

if (accordions) {
    accordions.forEach((item) => {
        const acc = item.querySelectorAll('.accordion');
        acc.forEach((accItem, accItemID) => {
            const accBtn = accItem.querySelector('.accordion-btn');
            const accBody = accItem.querySelector('.accordion-body__wrap');

            if (accItem.classList.contains('active')) {
                accBody.style.maxHeight = accBody.scrollHeight + 'px';
            }
        
            accBtn.addEventListener('click', () => {
                accItem.classList.toggle('active');
                accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
                acc.forEach((el, elID) => {
                    if (elID != accItemID) {
                        el.querySelector('.accordion-body__wrap').style.maxHeight = null;
                        el.classList.remove('active')
                    }
                })
            });
        })
    });
}

const reivewSwp = new Swiper('.review-swp .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    loop: true,
    breakpoints: {
        850: {
            slidesPerView: 2,
            spaceBetween: 32,
        }
    },
    navigation: {
        nextEl: ".review-swp .swp-btn__next",
        prevEl: ".review-swp .swp-btn__prev",
    },
    pagination: {
        el: '.review .swp-pagination',
        clickable: true,
    }
})

const requestModal = document.querySelector('.request-modal');
const requestModalBg = document.querySelector('.request-modal__bg');
const requestModalCloseBtn = document.querySelector('.request-modal__close');
const requestModalOpenBtns = document.querySelectorAll('.request-modal__open');

if (requestModalOpenBtns) {
    requestModalOpenBtns.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            requestModal.classList.add('active');
            bodyHidden();
        }
        requestModalBg.onclick = () => {
            requestModal.classList.remove('active');
            bodyVisible();
        }
        requestModalCloseBtn.onclick = () => {
            requestModal.classList.remove('active');
            bodyVisible();
        }
    })
}