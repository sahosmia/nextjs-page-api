
// ========= Success Response =================
export const getSuccessResponse = (data: {}[]|[]) => {
    const total = data.length;
    if (total > 0) {
        return (
            {
                message: "Response Success",
                status: 200,
                total,
                data
            }
        );
    } else {
        return (
            {
                message: "No Data Here",
                status: 500,
                total,
                data
            });
    }
    
};

// ================== Create Response ===================
export const successResponse = (data: any) => {
    return (
        {
            message: "Success",
            status: 200,
            data
        }
    );
};







// ================== Error Response ===================
export const errorResponse = (error?: any, message="Error") => {
    return (
        {
            message,
            status: 500,
            error
        }
    );
};




// ================== Validation Response ===================
export const validationResponse = (errors: any) => {
    return (
        {
            message: "Validation Error",
            status: 500,
            errors 
        }
    );
};


// ================== Http Response ===================
export const httpResponse = () => {
    return (
        {
            message:"HTTP Method is wrong."
        }
    );
};







//noDataResponse
