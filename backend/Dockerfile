# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies, including nodemon
RUN npm install -g nodemon && npm install

# Copy rest of the application
COPY . .

# Expose backend port
EXPOSE 8000

# Use nodemon for live reloading
CMD ["nodemon", "index.js"]
