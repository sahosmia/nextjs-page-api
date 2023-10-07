import type { NextApiRequest, NextApiResponse } from "next";
import {
  successResponse,
  errorResponse,
  httpResponse,
  validationResponse,
} from "@/lib/response-helper";

import { categoryUpdateValidation } from "@/lib/validation/category-val";
import { blog_categories, blogs } from "@/data/blog-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const data: any = blog_categories.find((category) => category.slug === slug);

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
          (blog) => blog.category_id === data.id
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

        const category_data = {
          id: data.id,
          title: data.title,
          slug: data.slug,
          blog_lists,
        };

        return res.status(200).json(successResponse(category_data));
      } catch (error) {
        return res.status(500).json(errorResponse(error));
      }

    // ==================  Put Http Method  =====================
    case "PUT":
      try {
        checkData();

        const { title } = req.body;
        const errors = categoryUpdateValidation(title);

        if (Object.keys(errors).length == 0) {
          data.title = title.toString();
          data.slug = title.toString();
          return res.status(200).json(successResponse(data));
        }

        return res.status(200).json(validationResponse(errors));
      } catch (error) {
        return res.status(500).json(errorResponse(error));
      }
      break;

    // ===================  Delete Http Method  ===================
    case "DELETE":
      try {
        checkData();
        const index = blog_categories.findIndex(
          (category) => category.slug === slug
        );
        blog_categories.splice(index, 1);
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
