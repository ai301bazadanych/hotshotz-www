// menu mobilne
const b=document.querySelector('.burger');
b.addEventListener('click',()=>{const o=document.body.classList.toggle('menu-open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu')});
document.querySelectorAll('.mob a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');b.setAttribute('aria-expanded',false)}));
// tło nagłówka po przewinięciu
const hdr=document.getElementById('top');
const onS=()=>hdr.classList.toggle('solid',scrollY>60);addEventListener('scroll',onS,{passive:true});onS();
// timecode w hero
const tc=document.getElementById('tc');let f=0;const p=n=>String(n).padStart(2,'0');
setInterval(()=>{f++;const s=Math.floor(f/25);tc.textContent=`00:${p(Math.floor(s/60)%60)}:${p(s%60)}:${p(f%25)}`},40);
// filtr realizacji
const works=[...document.querySelectorAll('#works .work')];
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{
  document.querySelectorAll('.chip').forEach(x=>x.classList.toggle('on',x===c));
  const f=c.dataset.f;let i=0;
  works.forEach(w=>{const show=f==='all'?works.indexOf(w)<3:w.dataset.c.split(' ').includes(f)&&i<3;if(show)i++;w.classList.toggle('hide',!show);w.classList.remove('big')});
  const first=works.find(w=>!w.classList.contains('hide'));if(first&&i===3)first.classList.add('big');
}));
// pojawianie się sekcji
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// formularz (tymczasowo bez wysyłki)
document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();document.getElementById('ok').style.display='block';e.target.reset()});
