// grab the html content from published links (@TODO: validate origin)
function getPublishedContent(url) {
  
  // default document
  document = {
    id:  0,
    url: "https://docs.google.com/feeds/download/documents/export/Export?id={0}&exportFormat=html",
  
    options: {
      method             : "get",
      headers            : { "Authorization": "Bearer " + ScriptApp.getOAuthToken() },
      muteHttpExceptions : true
    }
  }

  // try to get the document id and continue only if found
  try {
    document.id = DocumentApp.openByUrl(url).getId();
  } catch (e) { 
    return false;
  }
  
  if (document.id) {
    // needed to get Drive Scope requested
    DriveApp.getStorageUsed();
    
    document.url = document.url.replace('{0}', document.id);
    
    // get the html as if the document were published
    html = UrlFetchApp.fetch(document.url, document.options).getContentText();
    
    // use REGEX to get the contents of the <body> tag within the HTML string that has been returned
    body = html.match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)[1];
    
    // remove inline styles & IDs with REGEX.
    body = body.replace(/\s(class|id|style)="([^"]*)"/ig, "");
    
    // remove additional spans
    body = body.replace(/\<[\/]?span\>/ig, "");
    
    // replace [IMAGE: <url>] with actual image tags\[IMAGE:(.*?)\]
    body = body.replace(/\[IMAGE:(.*?)\]/ig, "<img src='$1' />");
    
    return body;
    
  }
      
  
}
