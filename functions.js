function Reminder()
{ 
let date_ob = new Date();
 let hours = date_ob.getHours();
 var mm=15;
 let date_ob2 = new Date();
 let minutes = date_ob2.getMinutes();
 if (hours==6 || hours==8 || hours==10 || hours==12 || hours==14 || hours==17 || hours==19 || hours==22)
   {
    if (mm==minutes) 
     {
      var JSAlert = require("js-alert");
      JSAlert.alert("Its time to drink a glass of water.");
     }
   }
}
Reminder();