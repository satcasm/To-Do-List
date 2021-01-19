$("ul").on("click","li",function(){
    $(this).toggleClass("strike");
});

$('ul').on("click","span",function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$('input[type="text"]').keypress(function(e){
    if(e.which === 13){
        var text= $(this).val();
        $(this).val("");
        $('ul').append("<li><span class='s'><i class='fas fa-trash'></i></span> " + text + "</li>");
    }
});

$('#icons').click(function(){
    $('input[type="text"]').fadeToggle(200);
});