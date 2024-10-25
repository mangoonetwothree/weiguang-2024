const lunboImg = [{URL:"./slider01.jpg"},{URL:"./slider02.jpg"},{URL:"./slider03.jpg"},{URL:"./slider04.jpg"},{URL:"./slider05.jpg"},{URL:"./slider06.jpg"},{URL:"./slider07.jpg"},{URL:"./slider08.jpg"}]

const img = document.querySelector('.idbox4')

let index = 0

function lunbo() {
  index=(index+1)%lunboImg.length
  img.style.backgroundImage = `url(${lunboImg[index].URL})`
}

const intervalTime = 3000

let interval = setInterval(lunbo,intervalTime)
