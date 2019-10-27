$.getJSON('data.json',function(data){
    var content0 = [];
    $(data.regionals).each(function(index,value){
        content0.push("<tr>")
            content0.push("<td>"+value.description+"</td>");
            content0.push("<td>"+value.average+"</td>");
        content0.push("</tr>")
    })
    
    $( content0.join("")).appendTo("#states");
    content1 = [];
    content1.push("<tr>")
            content1.push("<td>Média Nacional</td>");
            content1.push("<td>"+data.national+"</td>");
    content1.push("</tr>")
    $( content1.join("")).appendTo("#national");
    

})