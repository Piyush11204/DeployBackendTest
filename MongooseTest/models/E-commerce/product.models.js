const mongoose = require("mongoose");

const productSchema= new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        description: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
        category: {
          type: String,
          required: true,
        },
        stock: {
          type: Number,
          required: true,
          min: 0,
        },
        brand: {
          type: String,
          required: true,
        },
        images: [
          {
            url: {
              type: String,
              required: true,
            },
            altText: {
              type: String,
              required: true,
            },
          },
        ],
        ratings: {
          type: Number,
          default: 0,
          min: 0,
          max: 5,
        },
        reviews: [
          {
            user: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
              required: true,
            },
            comment: {
              type: String,
              required: true,
            },
            rating: {
              type: Number,
              required: true,
              min: 0,
              max: 5,
            },
            createdAt: {
              type: Date,
              default: Date.now,
            },
          },
        ],
        isFeatured: {
          type: Boolean,
          default: false,
        },
        tags: [String],
      },
      { timestamps: true }
    );


export const Products = mongoose.model("Products",productSchema)