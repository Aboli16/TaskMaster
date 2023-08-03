
const mongoose = require('mongoose');

// Replace 'your-mongodb-atlas-connection-string' with the actual connection string from MongoDB Atlas
const mongoURI = 'mongodb+srv://abolikulkarni2002:WWJ9034ggmQIQlEj@cluster0.zrq1vnw.mongodb.net/?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(mongoURI, options)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Start your application or perform additional operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });




/*const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/task-manager';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
*/