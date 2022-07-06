

function Botao(id,p){
		var bt = document.getElementById(id);
		var par = document.getElementById(p);
		
		if(bt.innerText == '\Leia Mais Noticias ↓') {
			bt.innerText = '\Leia Mais Noticias →';
			par.style.display = 'none';
		}
		else{
			bt.innerText = 'Leia Mais Noticias ↓';
			par.style.display = 'block';
		}
}
		
