const  mongoose  = require("mongoose");
const healthyFoodSchema = new mongoose.Schema({
foodName:
{
    type:String,
    require:true,
    unique:true,
    indexed:true,
},
quantity:
{
    type:String,
    require:true,
},
ingredients:
{
    type:String, 
},
imgFood:
{
     type:String,
}

},
{
    versionKey: false,
    strict: false
  }
)
healthyFood = mongoose.model("Healthy-System", healthyFoodSchema);
module.exports = healthyFood;