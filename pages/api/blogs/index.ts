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
      const blog_lists = blogs.map((blog) => {
        return {
          ...blog,
          category: blog_categories.find(
            (category) => category.id === blog.category_id
          ),
          user: users.find(
            (user) => user.id === blog.user_id
          ),
        };
      });
      try {
        return res.status(200).json(getSuccessResponse(blog_lists));
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
