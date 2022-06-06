let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class images {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'images';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new images(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_images_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: images');

    //appendnew_flow_images_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: images');

    if (!this.swaggerDocument['paths']['/get-all-images']) {
      this.swaggerDocument['paths']['/get-all-images'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/get-all-images']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/get-all-images`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_lSwKpKWR3aW8xXAn(bh);
          //appendnew_next_sd_LLQsElTJSRklkel5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_LLQsElTJSRklkel5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_images_HttpIn
  }
  //   service flows_images

  //appendnew_flow_images_start

  async sd_lSwKpKWR3aW8xXAn(bh) {
    try {
      bh.local.result = [
        { category: 'group1', name: 'Group 1', image: '/Web/Images/about.jpg' },
        {
          category: 'group2',
          name: 'Group 2',
          image: '/Web/Images/01-large.jpg',
        },
        {
          category: 'group1',
          name: 'Group 1',
          image: '/Web/Images/02-large.jpg',
        },
        {
          category: 'group3',
          name: 'Group 3',
          image: '/Web/Images/03-large.jpg',
        },
        {
          category: 'group2',
          name: 'Group 2',
          image: '/Web/Images/04-large.jpg',
        },
        {
          category: 'group3',
          name: 'Group 3',
          image: '/Web/Images/05-large.jpg',
        },
        {
          category: 'group1',
          name: 'Group 1',
          image: '/Web/Images/06-large.jpg',
        },
        {
          category: 'group2',
          name: 'Group 2',
          image: '/Web/Images/07-large.jpg',
        },
        {
          category: 'group3',
          name: 'Group 3',
          image: '/Web/Images/08-large.jpg',
        },
      ];

      bh.local.status = 200;
      await this.sd_gCsoI4WiH1wKtor8(bh);
      //appendnew_next_sd_lSwKpKWR3aW8xXAn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lSwKpKWR3aW8xXAn');
    }
  }

  async sd_gCsoI4WiH1wKtor8(bh) {
    try {
      bh.web.res.status(bh.local.status).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gCsoI4WiH1wKtor8');
    }
  }

  async sd_2MUB7EyUKM9otUIg(bh) {
    try {
      bh.local.status = 500;
      await this.sd_k0v5ONBm5U5WsmSg(bh);
      //appendnew_next_sd_2MUB7EyUKM9otUIg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2MUB7EyUKM9otUIg');
    }
  }

  async sd_k0v5ONBm5U5WsmSg(bh) {
    try {
      bh.web.res.status(bh.local.status).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k0v5ONBm5U5WsmSg');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_9MSS8uGAvydX7ZD6(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_9MSS8uGAvydX7ZD6(bh) {
    const catchConnectedNodes = ['sd_2MUB7EyUKM9otUIg', 'sd_k0v5ONBm5U5WsmSg'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_2MUB7EyUKM9otUIg(bh);
    //appendnew_next_sd_9MSS8uGAvydX7ZD6
    return true;
  }
  //appendnew_flow_images_Catch
}
