var userService = require('./userService');


var getDataControllerfn = async(req,res) =>{

    var empolyee =await userService.getDataFromDBService();
    res.send({"status":true,"data":empolyee});
}

var createUserControllerfn = async (req, res) =>{
    var status = await userService.createUserDBService(req.body);
    if (status){
        res.send({"status":true,"message":"user created successfully"});
    } else{
        res.send({"status":false,"message":"error creating user"});
    }
}

var updateUserController = async(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);

    var result= await userService.updateUserDBService(req.params.id,req.body);
    if (result){
        res.send({"status":true,"message":"user updateddd"});
    } else {
        res.send({"status":false,"message":"failedddd"})
    }
}

var deleteUserController = async (req,res)=>{
    console.log(req.params.id);
    var result = await userService.removeUserDBService(req.params.id);

    if(result){
        res.send({"status":true,"message":"User deleted"});
    } else{
        res.send({"status":false,"messsage":"error occured"})
    }
}


module.exports ={ getDataControllerfn,createUserControllerfn,updateUserController,deleteUserController};

