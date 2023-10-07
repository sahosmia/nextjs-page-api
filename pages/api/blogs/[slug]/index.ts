import type { NextApiRequest, NextApiResponse } from "next";
import {
  successResponse,
  errorResponse,
  httpResponse,
  validationResponse,
} from "@/lib/response-helper";

import { userUpdateValidation } from "@/lib/validation/user-val";
import { blog_categories, blogs, users } from "@/data/blog-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const data: any = blogs.find((blog) => blog.slug === slug);

  function checkData() {
    if (!data) {
      return res
        .status(500)
        .json(errorResponse("Data not found. Id is invalid"));
    }
  }

  switch (req.method) {
    // ===================  Get Http Method  ===================
    case "GET":
      try {
        checkData();
        const category = blog_categories.find(
          (category) => category.id === data.category_id
        );
        const user = users.find((user) => user.id === data.user_id);

        const blog_data = {
          id: data.id,
          title: data.title,
          content: data.content,
          slug: data.slug,
          image: data.image,
          category,
          user,
        };

        return res.status(200).json(successResponse(blog_data));
      } catch (error) {
        return res.status(500).json(errorResponse(error));
      }

    // ==================  Put Http Method  =====================
    case "PUT":
      try {
        checkData();

        const { name } = req.body;
        const errors = userUpdateValidation(name);

        if (Object.keys(errors).length == 0) {
          data.name = name.toString();
          data.user_name = name.toString();
          return res.status(200).json(successResponse(data));
        }

        return res.status(200).json(validationResponse(errors));
      } catch (error) {
        return res.status(500).json(errorResponse(error));
      }

    // ===================  Delete Http Method  ===================
    case "DELETE":
      try {
        checkData();
        const index = users.findIndex((user) => user.user_name === user_name);
        users.splice(index, 1);
        return res.status(200).json(successResponse(data));
      } catch (error) {
        return res.status(500).json(errorResponse(error));
      }
      break;

    default:
      return res.status(500).json(httpResponse());
      break;
  }

  //end
}
