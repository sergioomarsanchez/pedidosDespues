import { 
    createCompany, 
    getCompanyById, 
    getCompaniesByUserId, 
    modifyCompany,
    deleteCompany,
    getAllCompany
} from "../service/company.service.js";


export const getCompaniesByUserIdCtrl = async (req, res, next) => {
    try {
        
        const { userId } = req.query;

        const result = await getCompaniesByUserId(userId);

        return res.status(200).send( result || "No users found" );

    } catch (error) {
      next(error);
    }
};

export const getCompanyByIdCtrl = async (req, res, next) => {
    try {
        const { _id: company } = req.header;

        const result = await getCompanyById(company);

        return res.status(200).send(result || "No users found");
    } catch (error) {
      next(error);
    }
};

export const createCompanyCtrl = async (req, res, next) => {
    try {
        const company = req.body;

        const result = await createCompany(company);

        return res.status(200).send(result || "No users found");
    } catch (error) {
        next(error); 
    }
};

export const modifyCompanyCtrl = async (req, res, next) => {
    try {
        const company = req.body;

        const result = await modifyCompany(company);
        return res.status(200).send(result || "No users found");
    } catch (error) {
      next(error);
    }
};

export const deleteCompanyCtrl = async (req, res, next) => {
    try {
        const { _id: company } = req.header;

        const result = await deleteCompany(company);
        
        return res.status(200).send(result || "No users found");
    } catch (error) {
      next(error);
    }
};

export const getAllCompanyCtrl = async (req, res, next) => {
    try {
        const result = await getAllCompany();
        
        return res.status(200).send(result || "No users found");
    } catch (error) {
      next(error);
    }
};