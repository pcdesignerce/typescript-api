import { SetupServer } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();

  if (!global.testRequest) {
    global.testRequest = supertest(server.getApp());
  } else {
    console.log('testRequest não exist no globalThis');
  }
});
