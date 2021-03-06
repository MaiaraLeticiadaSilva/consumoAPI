document.querySelector("#input").onclick=function(e){
    let cep=document.getElementById("cep").value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
        function(res){
            return res.json();
        }
    ).then(function(res){
        console.log(res)
        let tbody = document.querySelector("#cep-t")
            let tr = document.createElement("tr")
            let tdcep = document.createElement("td")
            let txcep = document.createTextNode(res.cep)
            tdcep.append(txcep)
            tr.append(tdcep)
            let tduf = document.createElement("td")
            let txuf = document.createTextNode(res.uf)
            tduf.append(txuf)
            tr.append(tduf)
            let tdCidade = document.createElement("td")
            let txCidade = document.createTextNode(res.localidade)
            tdCidade.append(txCidade)
            tr.append(tdCidade)
            let tdBairro = document.createElement("td")
            let txBairro = document.createTextNode(res.bairro)
            tdBairro.append(txBairro)
            tr.append(tdBairro)
            let tdEndereço = document.createElement("td")
            let txEndereço = document.createTextNode(res.logradouro)
            tdEndereço.append(txEndereço)
            tr.append(tdEndereço)
            let tdComp = document.createElement("td")
            let txComp = document.createTextNode(res.complemento)
            tdComp.append(txComp)
            tr.append(tdComp)
            let tdCod = document.createElement("td")
            let txCod = document.createTextNode(res.ibge)
            tdCod.append(txCod)
            tr.append(tdCod)
            tbody.append(tr)
    })
    e.preventDefault();
}