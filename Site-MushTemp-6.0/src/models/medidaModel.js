var database = require("../database/config");


function buscarEstatistica() {

    var instrucaoSql = `SELECT 
    DATE_FORMAT(DATE_ADD(dataEhora, INTERVAL -0 HOUR), '%d/%m/%Y %H:%i:%s') AS data,
    temperatura, 
    umidade 
FROM Monitoramento
order by idMonitoramento`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
  
    buscarEstatistica
}



