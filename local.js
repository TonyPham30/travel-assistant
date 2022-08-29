const app = require('./server.js');
const port = process.env.PORT || 8086;

// Server
app.listen(port, () => {
   console.log(`Web sdk is running on: http://127.0.0.1:5500/travel-assistant/sdk/UI/index_widgets_chat.html`);
});