import dbConnect from "../mongo.js";
import dotenv from "dotenv";
import { validateCompany, Company } from "../models/Company.js";

dotenv.config();

// ============ TO DO IDIOTA =============
// ===== Add Destroy company service =====
// ===== Add Destroy company service =====
// ===== Add Destroy company service =====
// ===== Add Destroy company service =====

export const createCompany = async ( body ) => {
    await dbConnect();
  
    try {
        const { error } = validateCompany(body);
        if (error) {
                throw new Error({ message: error.message });
        }
        const company = await Company.findOne({ name: body.name });

        if (company) {
            throw new Error({ message: "Please try another name!" });
        }

        await new Company({ ...body }).save();

        return { message: "Company Created Successfully" };
    } catch (error) {
        throw new Error({ message: error.message });
    }
};

export const getCompaniesByUserId = async ( userId ) => {
    await dbConnect();
  
    try {
      
        const companies = await Company.findAll({ userId: userId });

        if (!companies) {
            throw new Error({ message: "This user doesn't have any company" });
        }

        return companies;
    } catch (error) {
        throw new Error({ message: error.message });
    }
};

export const getCompanyById = async ( companyId ) => {
    await dbConnect();
  
    try {
      
      const company = await Company.findOne({ _id: companyId });

      if (!company) {
        throw new Error({ message: "Company not found" });
      }

        return company;
    } catch (error) {
        throw new Error({ message: error.message });
    }
};

export const modifyCompany = async ( body ) => {
    await dbConnect();
  
    try {
        const company = await Company.findOne({ _id: body._id });
      
        if (!company) {
            throw new Error({ message: "Company not found" });
        }

        let modifiedCompany = {
            ...company,
            ...body
        };

        return modifiedCompany;
    } catch (error) {
        throw new Error({ message: error.message });
    }
};

export const deleteCompany = async ( companyId ) => {
    await dbConnect();
  
    try {
        const company = await Company.findOne({ _id: companyId });
      
        if (!company) {
            throw new Error({ message: "Company not found" });
        }

        let deletedCompany = {
            ...company,
            deleted: true,
        };

        return deletedCompany;
    } catch (error) {
        throw new Error({ message: error.message });
    }
};

