# Use official Node.js image (lightweight alpine version)
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application source code
COPY src/ ./src/

# Expose the port the app runs on
ENV PORT=3000
EXPOSE 3000

# Command to start the app
CMD ["node", "src/app.js"]
