const app = require('./server.js');
const port = process.env.PORT || 8086;

// Server
app.listen(port, () => {
   console.log(`Web sdk is running on: http://localhost:${port}/UI/index_widgets_chat.html`);
});