import errorHandler from "errorhandler";
import logger from "./util/logger";
import app from "./app";

/**
 * Error Handler. Provides full stack - remove for production
 */
const errorNotification = (err: any,str: any) => {
    logger.debug("Error:"+err.message); 
};
app.use(errorHandler({ log: errorNotification }));


/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");

    logger.debug(`App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
});

export default server;
