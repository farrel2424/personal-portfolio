# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on (e.g., 3000 for React)
EXPOSE 3000

# The command to start the application
CMD [ "npm", "start" ]