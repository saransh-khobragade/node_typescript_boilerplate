"use strict";

import { Response, Request, NextFunction } from "express";
import { SampleType } from "../types/sample_type";


/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {

    const staticTypeObj: SampleType = { "firstName":"ss","lastName":"ss" };

    res.status(200).send({"message":staticTypeObj});
};
