import * as fs from 'fs';
import {Execution} from './core/execution';

const code = fs.readFileSync('example.py', 'utf8');
const execution = new Execution(code);
execution.compile();
