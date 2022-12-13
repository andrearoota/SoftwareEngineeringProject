# ==== CONFIGURE =====
# Use a Node 19.2 base image
FROM node:19.2-alpine as development

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY package.json .
COPY package-lock.json .
# Install dependencies
RUN npm install
# Copy the rest of the content
COPY . .
# Expose port

# Start the app
CMD [ "npm", "start" ]