"use strict";

import { Response, Request, NextFunction } from "express";
import { SampleType } from "../types/sample_type";
import logger from "../util/logger";


/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {

    const staticTypeObj: SampleType = { "firstName":"ss","lastName":"ss" };

    logger.debug("[getApi]");

    res.status(200).send({"message":staticTypeObj});
};
