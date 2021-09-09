import express from 'express';
import { Router } from 'express';

import { helloWorld } from '../services/hello.service.js';

Router.get('/', helloWorld);

export default Router;

