// connect to the Firebase database
function connectToFirebase() {
  FirebaseUrl    = PropertiesService.getScriptProperties().getProperty("project_url");
  FirebaseSecret = PropertiesService.getScriptProperties().getProperty("project_secret");
  
  return FirebaseApp.getDatabaseByUrl(FirebaseUrl, FirebaseSecret);
  
}

// PUT the newly formed JSON content to the Firebase database
function putToFirebase() {
  
  data = getActiveRows();
  
  database = connectToFirebase();
  database.setData("/blogs", data);

}
