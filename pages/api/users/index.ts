import { blog_categories, blogs, users } from "@/data/blog-data";
import {
  successResponse,
  errorResponse,
  getSuccessResponse,
  httpResponse,
  validationResponse,
} from "@/lib/response-helper";
import { userStoreValidation } from "@/lib/validation/user-val";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    // ===================  Get Http Method  ===================
    case "GET":
      const user_lists = users.map((user) => {
        return {
          ...user,
          blogs: blogs.filter((blog) => blog.user_id === user.id),
        };
      });
      try {
        return res.status(200).json(getSuccessResponse(user_lists));
      } catch (error) {
        return res.status(500).json(errorResponse(error));
      }
      break;

    // ==================  Post Http Method  =====================
    case "POST":
      try {
        const { name } = req.body;
        // validation
        const errors = userStoreValidation(name);
        // Error == 0 (Create New Data)
        if (Object.keys(errors).length == 0) {
          const data = {
            id: Date.now(),
            name: name.toString(),
            user_name: name.toString(),
          };
          users.push(data);
          return res.status(200).json(successResponse(data));
        }
        return res.status(200).json(validationResponse(errors));
      } catch (error) {
        return res.status(500).json(errorResponse(error));
      }
      break;
    default:
      return res.status(500).json(httpResponse());
      break;
  }
}
