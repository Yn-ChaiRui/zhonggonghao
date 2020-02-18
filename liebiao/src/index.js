import dva from 'dva';
import './index.css';
// import example from './models/example'
// import demo from './models/demo'
import {zhuru} from './models/index' 

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);
// app.model(example);
// app.model(demo);
zhuru(app);

// 5. Start
app.start('#root');
