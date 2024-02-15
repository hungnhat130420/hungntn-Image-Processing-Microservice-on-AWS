import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';
import {HTTP_STATUS_CODES, HTTP_MESSAGES}  from './constants/constants.js';
import winston from 'winston';


  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

    /**************************************************************************** */

  //! END @TODO1
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  app.get( "/filteredimage", async (req, res) => {
  const { image_url } = req.query;

  if (!image_url) {
    return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({ message: HTTP_MESSAGES.IMAGE_URL_REQUIRED });
  }

  try {
    // call filterImageFromURL(image_url) to filter the image
    const filteredpath = await filterImageFromURL(image_url);
    logger.info(`Image filtered successfully: ${filteredpath}`);

    // send the resulting file in the response
    res.sendFile(filteredpath, async (err) => {
      if (!err) {
        // deletes any files on the server on finish of the response
        await deleteLocalFiles([filteredpath]);
        logger.info(`Image file deleted successfully: ${filteredpath}`);
      }
    });
    } catch (error) {
      logger.error(`Error processing image: ${error}`);
      res.status(HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY).send({ message: HTTP_MESSAGES.UNABLE_TO_PROCESS_IMAGE });
    }
  });

  // Start the Server
  app.listen( port, () => {
      logger.info(`server running http://localhost:${ port }`);
      logger.info( `press CTRL+C to stop server` );
  } );
