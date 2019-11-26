//Validar datos
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
$(document).ready(function(){
    $("#formulario").validate({
        errorClass:"is-invalid",
        rules:{
            rut:{
                required:true
            },
            nombre:{
                required:true
            },
            correo:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlenght: 6
            },
            fnac:{
                required:true
            }
        },
        messages:{
            rut:{
                required:"El rut es obligatorio"
            },
            nombre:{
                required:"El nombre es obligatorio"
            },
            correo:{
                required:"El correo es obligatorio",
                email:"Debe ingresar una dirección de correo válida"
            },
            password:{
                required:"La contraseña es obligatoria",
                minlenght:"La contraseña debe tener al menos 6 caracteres"
            },
            fnac:{
                required:"La fecha de nacimiento es obligatoria"
            }
        }
    })
})

$("#formulario").submit(function(){
    if($("#formulario").valid()){
        return true
    }else{
        Swal.fire({
            icon:'error',
            title:'Oops...',
            text:'Parece que faltan datos por rellenar',
            footer:'Rellene los datos faltantes e intente nuevamente.'
        })
    }
    return false
})

//validar datos 2
$(document).ready(function(){
    $("#login").validate({
        errorClass:"is-invalid",
        rules:{
            nombre:{
                required:true
            },
            password:{
                required:true,
                minlenght:6
            }
        },
        messages:{
            nombre:{
                required:"Este usuario no exite"
            },
            password:{
                required:"La contraseña es incorrecta"
            }
        }
    })
})

$("#login").submit(function(){
    if($("#login").valid()){
        return true
    }else{
        Swal.fire({
            icon:'error',
            title:'Oops...',
            text:'Parece que los datos están errados',
            footer:'Vuelva a colocar sus datos'
        })
    }
    return false
})
//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//Profile pic
ryuprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('https://tiermaker.com/images/templates/32371551563533.png')";
    var audio = document.getElementById("ryuprof-audio");
    audio.play();
}
kenprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('https://fghs.com.br/img/streetfighter/fotos/ken.png')";
    var audio = document.getElementById("kenprof-audio");
    audio.play();
}
chunprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('https://game.capcom.com/cfn/sfv/as/common/character/bustup/s/cnl.png?h=38a68f4661906b92d1cd3b07802240fe')";
    var audio = document.getElementById("chunprof-audio");
    audio.play();
}
cammyprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('https://game.capcom.com/cfn/sfv/as/common/character/bustup/s/cmy.png?h=8f227452613c592113bc572746d79a8b')";
    var audio = document.getElementById("cammyprof-audio");
    audio.play();
}

terryprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('http://mblogthumb2.phinf.naver.net/20151118_141/copymach_1447830717065pNCKo_JPEG/images.jpg?type=w2')";
    var audio = document.getElementById("terryprof-audio");
    audio.play();
}
ioriprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('data:image/jpeg;base64,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')";
    var audio = document.getElementById("ioriprof-audio");
    audio.play();
}
maryprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b196fc2b-a300-4657-8874-405412e7d147/dcrdkh4-1a3c1fbd-7516-47db-98fc-e98d0307483d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxOTZmYzJiLWEzMDAtNDY1Ny04ODc0LTQwNTQxMmU3ZDE0N1wvZGNyZGtoNC0xYTNjMWZiZC03NTE2LTQ3ZGItOThmYy1lOThkMDMwNzQ4M2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.drcGPMLAprCCKU-Qn-SyPPYPu5mJL6rvcgPyt24QvSM')";
    var audio = document.getElementById("maryprof-audio");
    audio.play();
}
leonaprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('https://vignette.wikia.nocookie.net/p__/images/a/ab/Heroine-leona.png/revision/latest/scale-to-width-down/209?cb=20190304031513&path-prefix=protagonist')";
    var audio = document.getElementById("leonaprof-audio");
    audio.play();
}

badguyprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Sol_Badguy.png/220px-Sol_Badguy.png')";
    var audio = document.getElementById("badguyprof-audio");
    audio.play();
}
kiskeprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Ky_Kiske_GGXrd.png/220px-Ky_Kiske_GGXrd.png')";
    var audio = document.getElementById("kiskeprof-audio");
    audio.play();
}
baikenprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('http://www.dustloop.com/wiki/images/thumb/c/cf/GGXRD_Baiken_Azami.png/175px-GGXRD_Baiken_Azami.png')";
    var audio = document.getElementById("baikenprof-audio");
    audio.play();
}
milliaprof.onclick = function(e){
    profile_pic.style.backgroundImage = "url('https://d1k5w7mbrh6vq5.cloudfront.net/images/cache/b9/c8/b9/b9c8b99dae7b1967c5b28febd821564c.png')";
    var audio = document.getElementById("milliaprof-audio");
    audio.play();
}

//Cupon-pic
cupon1.onclick = function(e){
    var audio = document.getElementById("cup1-audio");
    audio.play();
}
cupon2.onclick = function(e){
    var audio = document.getElementById("cup2-audio");
    audio.play();
}
cupon3.onclick = function(e){
    var audio = document.getElementById("cup3-audio");
    audio.play();
}