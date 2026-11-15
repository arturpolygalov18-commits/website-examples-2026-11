
const nav=document.getElementById('navigation'),menu=document.querySelector('.menu-button');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const projects=JSON.parse(document.getElementById('project-data').textContent);let current=0;
const picture=document.getElementById('project-image'),tag=document.getElementById('image-tag'),title=document.getElementById('project-title'),description=document.getElementById('project-description'),counter=document.getElementById('counter');
function select(n){current=(n+projects.length)%projects.length;const p=projects[current];picture.src='assets/'+p.image;picture.alt=p.name+' · '+p.short;tag.textContent=p.name;title.innerHTML=p.title;description.textContent=p.text;counter.textContent=String(current+1).padStart(2,'0')+' / '+String(projects.length).padStart(2,'0');document.querySelectorAll('[data-project]').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===current)))}
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>select(Number(b.dataset.project))));document.querySelector('[data-prev]').addEventListener('click',()=>select(current-1));document.querySelector('[data-next]').addEventListener('click',()=>select(current+1));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
