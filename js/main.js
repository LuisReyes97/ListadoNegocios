//obtener los elementos de la clase .back

let links = document.querySelectorAll(".back");

//recorrelos

links.forEach(function(link){

    //agregar un evento click a cada uno de ellos -- caseSesitive

    link.addEventListener("click",function(ev){
        
        ev.preventDefault();
        let content = document.querySelector(".content");
        
        //quitarle las clases de animacion que ya tiene

        content.classList.remove("rubberBand");
        content.classList.remove("animated");

        //agregar clases

        content.classList.add("fadeOutUp");
        content.classList.add("animated");
        setTimeout(function(){
            location.href= "/negocios";
        },600);
        

        return false;

    });
});

