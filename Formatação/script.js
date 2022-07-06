
function Botao(id,p){
		var bt = document.getElementById(id);
		var par = document.getElementById(p);
		
		if(bt.innerText == '\xa0↓\xa0') {
			bt.innerText = '\xa0→\xa0';
			par.style.display = 'none';
		}
		else{
			bt.innerText = '\xa0↓\xa0';
			par.style.display = 'block';
		}
}

