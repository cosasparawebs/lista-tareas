(function(){
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

        var agregarTarea = function(){
            var tarea = tareaInput.value,
                nuevaTarea = document.createElement("li"),
                enlace = document.createElement("a"),
                contenido = document.createTextNode(tarea);

                if(tarea == ""){
                    tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
                    tareaInput.className = "error";
                    return false;
                }

                //agrega contenido al enlace
                enlace.appendChild(contenido);
                //se establece atributo href
                enlace.setAttribute("href", "#");
                //agrega enlace a la nueva tarea (li)
                nuevaTarea.appendChild(enlace);
                //agrega la nueva tarea a la lista
                lista.appendChild(nuevaTarea);

                tareaInput.value = "";

                for (var i = 0; i <= lista.children.length -1; i++){
                    lista.children[i].addEventListener("click", function(){
                        this.parentNode.removeChild(this);
                    });
                };


        };

        var comprobarInput = function(){
            tareaInput.className = "";
            tareaInput.setAttribute("placeholder", "Agrega tu tarea");

        };

        var eliminarTarea = function(){
          this.parentNode.removeChild(this);
        };

        // agraga tarea
        btnNuevaTarea.addEventListener("click", agregarTarea);

        // comprueba el input
        tareaInput.addEventListener("click", comprobarInput);


        // borra elemento de la lista
        for (var i = 0; i <= lista.children.length -1; i++){
            lista.children[i].addEventListener("click", eliminarTarea);
        };


}());