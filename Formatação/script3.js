

function Botao(id,p){
		var bt = document.getElementById(id);
		var par = document.getElementById(p);
		
		if(bt.innerText == '\Ver Mais Videos ↓') {
			bt.innerText = '\Ver Mais Videos →';
			par.style.display = 'none';
		}
		else{
			bt.innerText = 'Ver Mais Videos ↓';
			par.style.display = 'block';
		}
}
		
