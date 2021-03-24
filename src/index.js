console.log(2);
import './css.js'
import png from './images/Image.png'
console.log(3);
let aa = '123'
console.log(aa);
const body = document.querySelectorAll('body')[0]
body.innerHTML = `<img src="${png}" alt="">
    `
const button = document.createElement('button')
button.innerText = '点我懒加载'
button.onclick = () => {
    const p = import('./lazy')
    p.then(
        (moudle) => { moudle.default() },
        ()=>{console.log('懒加载错误')}
    )
}
body.appendChild(button)