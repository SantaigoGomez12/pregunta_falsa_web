let si = document.getElementById('si');
si.addEventListener("click", function(e){

    swal({
        title: "🎉🎉 Gracias, sabía que aceptarías",
        icon: "success"
    })

} );

let no = document.getElementById('no');
no.addEventListener("mousemove", function(e){
    let x = Math.round( Math.random() * 60 );
    let y = Math.round( Math.random() * 60 );
    no.style.left = x+"%";
    no.style.top = y+"%";
})