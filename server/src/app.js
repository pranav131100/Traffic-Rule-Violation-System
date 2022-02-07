const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database : "traffic_database",
    multipleStatements:true
});

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.post("/api/driver/insert",(req,res)=>{

    const Lno = req.body.Lno;
    const name = req.body.name;
    const date = req.body.date;
    const gender = req.body.gender;
    const add1 = req.body.add1;
    const add2 = req.body.add2;
    const phone1 = req.body.phone1;
    const phone2 = req.body.phone2;


    const sqlInsert1 = "INSERT INTO driver(License_No,name,DOB,gender)VALUES(?,?,?,?);"
    const sqlInsert2 = "INSERT INTO address(License_No,address)VALUES(?,?);"
    const sqlInsert3 = "INSERT INTO address(License_No,address)VALUES(?,?);"
    const sqlInsert4 = "INSERT INTO mobile_no(License_No,Phone)VALUES(?,?);"
    const sqlInsert5 = "INSERT INTO mobile_no(License_No,Phone)VALUES(?,?);"

    db.query(sqlInsert1,[Lno,name,date,gender],(err,result)=>{
    
    });

    db.query(sqlInsert2,[Lno,add1],(err,result)=>{
        
    });

    db.query(sqlInsert3,[Lno,add2],(err,result)=>{

    });

    db.query(sqlInsert4,[Lno,phone1],(err,result)=>{
        
    });

    db.query(sqlInsert5,[Lno,phone2],(err,result)=>{
    
    });

})

app.post("/api/vehicle/insert",(req,res)=>{
    
    const Lno = req.body.Lno;
    const VehicleNo = req.body.VehicleNo;
    const Model = req.body.Model;
    const chasisNo = req.body.chasisNo;

    const sqlInsert = "INSERT INTO vehicle(License_No,Model,Vehicle_No,chasis_No)VALUES(?,?,?,?);"
    db.query(sqlInsert,[Lno,Model,VehicleNo,chasisNo],(err,result)=>{

    });
})

app.post("/api/offence/insert",(req,res)=>{

    let someDate = new Date();
    let date = someDate.toISOString().substr(0, 10);
    let h = someDate.getHours();
    let m = someDate.getMinutes();
    let s = someDate.getSeconds();
    let time = h + ":" + m + ":" + s;

    const section = req.body.section;
    const location = req.body.location;
    const date1 = date;
    const time1 = time;

    const sqlInsert = "INSERT INTO offence(section,Location,date,Time)VALUES(?,?,?,?)";
    
    db.query(sqlInsert,[section,location,date1,time1],(err,result)=>{
        console.log(result);
    });
})

app.get("/api/rules",(req,res)=>{
    const sqlSelect = "SELECT * FROM rule";

    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    })
});

app.post("/api/violation/insert",(req,res)=>{
    const Lno = req.body.Lno;
    const ruleId = req.body.ruleId;
    const offenceId = req.body.offenceId;
    const status = req.body.status;

    const sqlInsert = "INSERT INTO violates(License_No,RULE_Id,Offence_Id,status)VALUES(?,?,?,?)";

    db.query(sqlInsert,[Lno,ruleId,offenceId,status],(err,result)=>{
        console.log(err);
    })
})


app.get("/api/view/:Lno/:select",(req,res)=>{ 
    
    const Lno = req.params.Lno;
    const select = req.params.select;

    const sqlSelect = `SELECT * from ${select} where License_No = ${Lno}`; 
   
    db.query(sqlSelect,(err,result)=>{
       res.send(result);
    })
    

})

app.get("/api/update/get/driver/:Lno",(req,res)=>{

    const Lno = req.params.Lno;

    const sqlInsert = `SELECT * from driver where License_No = ${Lno}`

    db.query(sqlInsert,(err,result)=>{
        res.send(result);
    })
    
})

app.get("/api/update/get/offence/:OId",(req,res)=>{

    const OId = req.params.OId;

    const sqlSelect = `SELECT * from offence where Offence_Id = ${OId}`

    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    })

})

app.get("/api/update/get/vehicle/:Lno/:VehicleNo",(req,res)=>{

    const Lno = req.params.Lno;
    const VehicleNo = req.params.VehicleNo;

    const sqlSelect = `SELECT * from  vehicle where License_No = ${Lno} AND Vehicle_No = ${VehicleNo}`

    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    })

})

app.get("/api/update/get/violates/:Lno/:ruleId/:offenceId",(req,res)=>{
    const Lno = req.params.Lno;
    const ruleId = req.params.ruleId;
    const offenceId = req.params.offenceId;

    const sqlSelect = `SELECT * from violates where License_No = ${Lno} and RULE_Id = ${ruleId} and Offence_Id = ${offenceId}`

    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    })

})

app.put("/api/driver/update",(req,res)=>{
    const Lno = req.body.Lno;
    const name = req.body.name;
    const dob  = req.body.dob;
    const gender = req.body.gender;

    const sqlUpdate = `UPDATE driver SET Name = ?, DOB = ?, Gender = ? WHERE License_No = ?`;

    db.query(sqlUpdate,[name,dob,gender,Lno],(err,result)=>{
        res.send(result);
    })
})

app.put("/api/offence/update",(req,res)=>{
    const OId = req.body.OId;
    const section = req.body.section;
    const location = req.body.location;

    const sqlUpdate = `UPDATE offence SET section = ?,Location = ? where Offence_Id = ?`;

    db.query(sqlUpdate,[section,location,OId],(err,result)=>{
        res.send(result);
    })
})

app.put("/api/vehicle/update",(req,res)=>{
    const Lno = req.body.Lno;
    const VehicleNo = req.body.VehicleNo;
    const Model = req.body.Model;
    const chasisNo = req.body.chasisNo;

    sqlUpdate = `UPDATE vehicle SET Model = ?,chasis_No = ? where License_No = ? and Vehicle_No = ?`

    db.query(sqlUpdate,[Model,chasisNo,Lno,VehicleNo],(err,result)=>{
        res.send(result);
    })

})

app.put("/api/violation/update",(req,res)=>{
    const Lno = req.body.Lno;
    const ruleId = req.body.ruleId;
    const offenceId = req.body.offenceId;
    const status = req.body.status;

    sqlUpdate = "UPDATE violates SET status = ? where License_No = ? and RULE_Id = ? and Offence_Id = ?";

    db.query(sqlUpdate,[status,Lno,ruleId,offenceId],(err,result)=>{
        res.send(result);
    })
})

app.post("/api/police/verification",(req,res)=>{
    const Reg = req.body.Reg;
    const Password = req.body.Password;

    db.query(
        "SELECT * from police where Reg_no = ? and Pass = ?",[Reg,Password],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                if(result){
                    res.send(result);
                }else{
                    res.send("Invalid Registeration Number OR Password");
                }
            }
        }
    )

})

app.post("/api/civilian/verification",(req,res)=>{
    const Lno = req.body.Lno;
    const dob = req.body.dob;

    db.query(
        "SELECT * from driver where License_No = ? and DOB = ?",[Lno,dob],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                if(result){
                    
                    res.send(result);
                }else{
            
                    res.send("Invalid login credentials");
                }
            }
        }
    )

})

app.post("/login",(req,res)=>{
    console.log("Login page from server side");
})

app.delete("/api/delete/:lno",async(req,res)=>{
    try{

        const Lno = req.params.lno;

        db.query("DELETE from driver where License_No = ?",[Lno],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                console.log(result)
            }
        })
    }catch(err){
        res.status(400).send(err);
    }
})

app.delete("/api/address/delete/:lno/:address",async(req,res)=>{
    try{

        const Lno = req.params.lno;
        const address = req.params.address;

        db.query("DELETE from address where License_No = ? and address = ?",[Lno,address],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                console.log(result)
            }
        })
    }catch(err){
        res.status(400).send(err);
    }
})

app.listen(3001, ()=>{
    console.log("Running at port 3001");
});