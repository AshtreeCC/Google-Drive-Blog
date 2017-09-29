// filter out rows where "Publish" is not TRUE
// and format to JSON
function getActiveRows() {
  sheet = SpreadsheetApp.getActiveSpreadsheet();
  rows  = sheet.getDataRange().getValues();
  
  dataRef = [];
  
  for(var i = 1; i < rows.length; i++) {
    if (rows[i][0] && (htmlContent = getPublishedContent(rows[i][2]))) {
      dataRef.push({
        title   : rows[i][1],
        url     : rows[i][2],
        date    : new Date(rows[i][3]),
        content : htmlContent
      });
    }
  }
  
  return dataRef;
}

/* 
  data_example = { 
    0: {
        title   : "typescript", 
        url     : "https://localhost:4200/blog/typescript",
        date    : new Date(),
        content : "Lorum ipsum"
    }
  }
*/
