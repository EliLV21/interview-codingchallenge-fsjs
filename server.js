const express         = require('express');

app.use('/static', express.static(__dirname+'/node_modules'));
app.use('/static', express.static(__dirname+'/src'));

app.get('/',(req,res) =>{
	res.sendFile(__dirname+'index.html');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port '+port+'!');
});
