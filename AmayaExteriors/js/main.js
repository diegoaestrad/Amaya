jQuery(document).ready(function(){
    "use stric";
    $('#slider-carousel').caroufredsel({
        responsive:true,
        width: '100%',
        circular:true,
        scroll:{
            items:1,
            duration: 1000,
            pauseOnHover: true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            anchorBuilder:false
        }
    });
});