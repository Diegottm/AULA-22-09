var botaoAdicionar = document.getElementById('adicionar');
var inputTarefa = document.getElementById('tarefa');

inputTarefa.onkeypress = function(evento){
    if(evento.key == 'Enter'){
        adicionar();
    }
}

    botaoAdicionar.addEventListener('click', adicionar);

    function adicionar(){
        var tarefa = inputTarefa.value;

    if(tarefa !== ''){
        var li = document.createElement('li');
        li.innerText = tarefa;

        var newButton = document.createElement("button");
            newButton.innerHTML = 'Deletar';

            li.append(newButton);

            newButton.onclick = function(){
                li.remove(li);
            }

//        li.style.color = 'red';
//
//        li.onclick = function(){
//          li.style.color = 'green';
//        }
//        
//        li.ondblclick = function(){
//            li.style.color = 'red';
//        }

        li.classList.add('para-fazer');
        li.onclick = function(){
            li.classList.remove('para-fazer');
            li.classList.add('concluidas');
        }
        li.ondblclick = function(){
            li.classList.remove('concluidas');
            li.classList.add('para-fazer');
        }

        var ol = document.getElementById('tarefas');
        ol.appendChild(li);
        
        inputTarefa.value = '';
    }
}