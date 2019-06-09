export interface Appointment {
    username:String;
    date : Date;
    time:String;
    package:String;
    approved:boolean;
    status:String
 }
 
 /*this is not neccessary to get or send data. But sometimes we may need an interface
 
 for an ex: we can't apply foreach loop for what we directly render from db.
            So there first we have to put those to objects. To do that we use an interface
            ex:- getappintments() in admindash*/ 