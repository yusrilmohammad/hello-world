import fastify from 'fastify';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';

dotenv.config();

const fastifyInstance = fastify({
  logger: {
    name: process.env.npm_package_name,
    level: 'info',
    file: 'app.log',
  },
  genReqId() {
    return uuidv4();
  },
});

export default fastifyInstance;
