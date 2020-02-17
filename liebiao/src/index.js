import dva from 'dva';
import './index.css';
// import example from './models/example.js'
// import Domea from './models/01Demo.js'
import {charu} from './models/example.js'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);
// app.model(example);  第一个
// app.model(Domea);   第二个
    charu(app)

// 5. Start
app.start('#root');
