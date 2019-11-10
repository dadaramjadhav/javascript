var a = {
    name: "dm", 
    address:"pune",
    fullname: function (){
        console.log("full name: "+ this.name + this.address)
    }
};

console.log(a.fullname)