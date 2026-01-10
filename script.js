
let pwd="040698";
let classes=JSON.parse(localStorage.getItem('classes')||'["3A","3B","4A","4B"]');
let students=JSON.parse(localStorage.getItem('students')||'{"3A":[],"3B":[],"4A":[],"4B":[]}');
let scores=JSON.parse(localStorage.getItem('scores')||'[]');
let att=JSON.parse(localStorage.getItem('att')||'{}');
let day=parseInt(localStorage.getItem('day')||'1');

function save(){localStorage.setItem('classes',JSON.stringify(classes));
localStorage.setItem('students',JSON.stringify(students));
localStorage.setItem('scores',JSON.stringify(scores));
localStorage.setItem('att',JSON.stringify(att));
localStorage.setItem('day',day);}

function show(id){document.querySelectorAll('.screen').forEach(s=>s.style.display='none');
document.getElementById(id).style.display='block';
if(id=='absen'){document.getElementById('hnum').innerText=day;}}

function init(){let cls=document.getElementById('cls');cls.innerHTML="";
classes.forEach(c=>cls.innerHTML+=`<option>${c}</option>`);
let nc=document.getElementById('newCls');nc.innerHTML="";classes.forEach(c=>nc.innerHTML+=`<option>${c}</option>`);
let ca=document.getElementById('clsAbs');ca.innerHTML="";classes.forEach(c=>ca.innerHTML+=`<option>${c}</option>`);
show('home');}

function startQuiz(){alert("Placeholder quiz. Full logic akan diisi.");}

function openAdmin(){let p=prompt('Sandi admin:');if(p==pwd){show('admin');loadTblStudents();}else alert('Salah');}

function addS(){let n=document.getElementById('newName').value.trim();let c=document.getElementById('newCls').value;
if(!n)return; students[c].push(n); if(!att[c])att[c]={}; att[c][n]=Array(30).fill(''); save(); loadTblStudents();}

function delS(c,n){students[c]=students[c].filter(x=>x!=n); if(att[c])delete att[c][n]; save(); loadTblStudents();}

function loadTblStudents(){let tb=document.querySelector('#tblStudent tbody');tb.innerHTML="";
for(let c in students){students[c].forEach(n=>tb.innerHTML+=`<tr><td>${n}</td><td>${c}</td><td><button onclick="delS('${c}','${n}')">Hapus</button></td></tr>`);}}

function loadAbsen(){alert("Placeholder absensi");}

function nextDay(){if(day<30)day++;save();}

function resetAll(){localStorage.clear();location.reload();}
