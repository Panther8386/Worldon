const menu=document.querySelector('#menu'), sidebar=document.querySelector('#sidebar');
menu.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
sidebar.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
const input=document.querySelector('#search'), result=document.querySelector('#results'), chapters=[...document.querySelectorAll('.chapter')];
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();
const texts=chapters.map(c=>normalize(c.textContent));
function search(){const q=normalize(input.value.trim());let n=0;chapters.forEach((c,i)=>{const match=!q||texts[i].includes(q);c.hidden=!match;if(match)n++;});result.textContent=q?`${n} phần phù hợp`:'';document.querySelector('#empty').hidden=n!==0;}
input.addEventListener('input',search);document.querySelector('#clear').addEventListener('click',()=>{input.value='';search();input.focus();});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){sidebar.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}});},{rootMargin:'-100px 0px -65% 0px'});chapters.forEach(c=>observer.observe(c));}
