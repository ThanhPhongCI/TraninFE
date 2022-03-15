// const $$ = document.querySelectorAll.bind(document)
// const cars = $$('.app__car-info')

// cars.forEach((car, index) => {
//     car.onclick = function () {
//         $('.app__car-info.app__car-info--color').classList.remove('app__car-info--color')

//         this.classList.add('app__car-info--color')
//     }
// })
const modal = document.querySelector('.modal')
const add = document.querySelector('.js-add-car')
const dels = document.querySelectorAll('.js-del-car')
const formAdd = document.querySelector('.js-form-add')
const formDel = document.querySelector('.js-form-del')
const modalCloses = document.querySelectorAll('.js-modal-close')
const modalBody = document.querySelector('.js-modal-body')

function showAddCar() {
    modal.classList.add('open')
    formAdd.classList.remove('open')
    formDel.classList.add('open')
}

function showDelCar() {
    modal.classList.add('open')
    formAdd.classList.add('open')
    formDel.classList.remove('open')
}

function hideModal() {
    modal.classList.remove('open')
}

add.onclick = showAddCar

for (const del of dels) {
    del.onclick = showDelCar
}

for (const modalClose of modalCloses) {
    modalClose.addEventListener('click', hideModal)
}

modal.addEventListener('click', hideModal)

modalBody.addEventListener('click', function (event) {
event.stopPropagation(modalBody)
})

