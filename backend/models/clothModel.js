const express = require("express")
const mongoose = require("mongoose")

const clothSchema = mongoose.Schema(
    {
        img: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        size: {
          type: String,
          required: true,
        },
    }
)


const Cloth = mongoose.model('cloth',clothSchema)
module.exports =  Cloth