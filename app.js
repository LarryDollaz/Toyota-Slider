const containers = document.querySelectorAll("#main div")
const intro = document.getElementById("intro")


setTimeout(() => {
    intro.firstElementChild.style.opacity = '1'
}, 500)

setTimeout(() => {
    intro.firstElementChild.style.opacity = '0'
}, 1500)

setTimeout(() => {
    intro.style.height = '0px'
}, 2000)

function minimize() {
    Array.from(containers).forEach(container => {
        container.style.width = '5%'
        container.firstElementChild.style.opacity = '0'
    })
}

Array.from(containers).forEach(container => {
    container.addEventListener("mouseover", () => {
        minimize()
        container.style.width= '90%'
        container.firstElementChild.style.opacity = '1'
    })
})

Array.from(containers).forEach(container => {
    container.addEventListener("mouseleave", () => {
        Array.from(containers).forEach(container => {
            container.style.width = '33.3%'
            container.firstElementChild.style.opacity = '1'
        })
    })
})

