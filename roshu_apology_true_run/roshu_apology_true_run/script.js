const hug = document.getElementById('hug');
const note = document.getElementById('note');
hug.addEventListener('click', () => {
  note.textContent = 'Slap me 100 times , I will not utter a word ';
  hug.textContent = 'Sorryy....x1000 times ';
  for (let i=0;i<10;i++) {
    const heart=document.createElement('span');
    heart.textContent=['💗','💕','❤️','✨'][i%4];
    heart.style.cssText=`position:fixed;left:${15+Math.random()*70}%;top:${35+Math.random()*45}%;font-size:${18+Math.random()*18}px;pointer-events:none;z-index:9;transition:all 1.8s ease;`;
    document.body.appendChild(heart);
    requestAnimationFrame(()=>{heart.style.transform=`translateY(-${90+Math.random()*150}px) rotate(${Math.random()*70-35}deg)`;heart.style.opacity='0'});
    setTimeout(()=>heart.remove(),1900);
  }
});
