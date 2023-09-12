import mongoose from "mongoose";
import Joi from "joi";

const CompanySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        photoUrl: { type: String, required: true },
        description: { type: String, required: false },
        address: { type: String, required: true },
        rating: { type: Number, required: false },
        phone: { type: Number, required: true },
        userId: { type: String, required: true },
        webpageUrl: { type: String, required: false },
        deleted: { type: Boolean, required: true }, 
    },
    { timestamps: true }
);

const Company = mongoose.models.Company || mongoose.model("Company", CompanySchema);


const validateCompany = ( data ) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        photoUrl: Joi.string().required().label("Photo URL"),
        description: Joi.string().optional().label("Description"),
        address: Joi.string().required().label("Address"),
        rating: Joi.number().optional().label("Rating"),
        phone: Joi.number().required().label("Phone"),
        userId: Joi.string().required().label("User ID"),
        webpageUrl: Joi.string().optional().label("Webpage URL"),
    });
    return schema.validate(data);
};


export { Company, validateCompany };