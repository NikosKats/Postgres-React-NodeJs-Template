# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite development server port
EXPOSE 5173

# Fix: Force Vite to listen on all interfaces
ENV HOST=0.0.0.0

# Start Vite dev server
CMD ["npm", "run", "dev"]
