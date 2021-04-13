document.querySelector('#dt').addEventListener('change' ,()=>{
    localStorage.setItem('data',document.querySelector('#dt').value);
});

document.querySelector('#dt').value = localStorage.getItem('data');
//lembrar arquivos no browser
//Dum - Document Object Model
//---------------------------------------------------------------------
