"use strict";

import { Response, Request, NextFunction } from "express";
import { Sample_type } from "../types/sample_type"


/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {

    const static_type_obj:Sample_type = { "firstName":"ss","lastName":"ss" }

    res.status(200).send({"message":static_type_obj})
};
