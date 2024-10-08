import  app from "./app.js"
import {main} from "./db/databaseConnection.js"

const  port = 8000;


main()  
.then((data) => {
         console.log("DATABASE Connection successfully..");
         app.listen(port, () =>{
          console.log(`Server is Running At PORT : ${port}`)
        })
}
   )
.catch(err => console.log(err));


