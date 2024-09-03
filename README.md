function corregirJson(jsonData) {
    return jsonData.map(item => {
        return {
            "CCT": item["CCT"] || item[Object.keys(item)[0]],
            "NOMBRE DEL CENTRO DE TRABAJO": item["NOMBRE DEL CENTRO DE TRABAJO"] || item[Object.keys(item)[1]],
            "NIVEL EDUCATIVO": item["NIVEL EDUCATIVO"] || item[Object.keys(item)[2]],
            "MUNICIPIO": item["MUNICIPIO"] || item[Object.keys(item)[3]]
        };
    });
}


