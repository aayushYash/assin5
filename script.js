const string1 = document.querySelector('#string1');
const string2 = document.querySelector('#string2');
const string3 = document.querySelector('#string3');
const answer = document.querySelector('#answer');
const reset = document.querySelector('#reset');
const btn = document.querySelector('#btn');
const ansLegend = document.querySelector('#ansLegend')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let finalString = `${string1.value}  ${string2.value} ${string3.value}`;
    answer.textContent= finalString;
    ansLegend.style.letterSpacing = '3px';
    ansLegend.style.color = '#fff';
    ansLegend.style.transform = 'translate(0,-5px)';
})

reset.addEventListener('click', () => {
    ansLegend.style.letterSpacing = '0px';
    ansLegend.style.color = '#777';
    ansLegend.style.transform = 'translate(0,0)';
    answer.textContent='';
})
