import './index.njk';
import how from './chunk';
import('./chunk').then(how => how('do you do?'));
console.log('test my own loader');