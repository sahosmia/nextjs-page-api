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
  const { user_name } = req.query;
  const data: any = users.find((user) => user.user_name === user_name);

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
        const new_blog_lists = blogs.filter(
          (blog) => blog.user_id === data.id
        );

        const blog_lists = new_blog_lists.map((blog) => {
          return {
            ...blog,
            category: blog_categories.find(
              (category) =>
                blog.category_id === category.id && {
                  id: category.id,
                  title: category.title,
                  slug: category.slug,
                }
            ),
          };
        });

        const user_data = {
          id: data.id,
          name: data.name,
          user_name: data.user_name,
          blog_lists,
        };

        return res.status(200).json(successResponse(user_data));
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
        const index = users.findIndex(
          (user) => user.user_name === user_name
        );
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
