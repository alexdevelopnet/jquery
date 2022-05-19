
var remoItem = function(event){

    event.preventDefault();
    var self = $(this);
    self.closest("tr").remove();

    var atual = parseInt($("#quantidadeItens").text());
    var novaQuantidade = atual-1;

    atualizaDados();
     
};

var atualizaDados = function(){
    var itens = $(".item-total");
    var total = 0;

    for (var i = 0;i < itens.length; i++) {
        var item = $(itens[i]);
        var valor = parseFloat(item.text());
        total = total + valor;

        var precoAtual = parseFloat($("valorTotal").text());
        
    }
     
    $("#valorTotal").text(total);
    $("#quantidadeItens").text(itens.length);
}
var aposInicializado = function () {
   atualizaDados();
    $(".remove-item").click(remoItem);
};

$(aposInicializado);

 
