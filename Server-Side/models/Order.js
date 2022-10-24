const { default: mongoose } = require("mongoose");



const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    title: 
    { type: String, required: true, minlength: 5, maxlength: 20, indexed: true },
    status: 
    { type: String, optional: true, default: "to-do" }

  },

  {
    versionKey: false,
    strict: false
  }
)



module.exports = mongoose.model('Order', OrderSchema);