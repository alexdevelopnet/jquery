
var aposInicializado = function () {
    var itens = $(".item-total");
    var total = 0;

    for (var i = 0;i < itens.length; i++) {
        var item = $(itens[i]);
        var valor = parseFloat(item.text());
        total = total + valor;
    }
     
    $("#valorTotal").text(total);
    $("#quantidadeItens").text(itens.length);
};

$(aposInicializado);

 
