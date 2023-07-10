# Use a base image with the desired Node.js and MySQL versions
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json .env ormconfig.js ./

# Install the dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Set the environment variables for the database connection
ENV DB_HOST=db
ENV DB_PORT=3306
ENV DB_USER=test
ENV DB_PASSWORD=test
ENV DB_NAME=productDB

# Expose the desired port for the application
EXPOSE 3000

# Build and run the database and the application
CMD npm run build && npm run start:dev
