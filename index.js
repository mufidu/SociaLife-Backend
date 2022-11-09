import ChatRoute from './Routes/ChatRoute'
import MessageRoute from './Routes/MessageRoute.js'

const app = express();

app.use("/chat", ChatRoute)
app.use("/message", MessageRoute)