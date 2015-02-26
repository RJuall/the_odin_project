

$(document).ready(function () {
 
 
 
 function createTable(id, num) {
   var quo = num;
  
   if (num <= 0) {
    return;
   } else if (num.isNaN) {
    return;
   } else if (num >= 100) {
    return;
   }
  
   for (i = 0; i < num; i++) {
    id.append("<tr></tr>");
   }
  
   for (i = 0; i < num; i++) {
    for (y = 0; y < num; y++) {
     id.find('tr').eq(i).append("<td></td>");
    }
   }
  
 }
 
 createTable($('#tab'), 20);
  
});