# ==== CONFIGURE =====
# Use a Node 19.2 base image
FROM node:19.2-alpine as builder

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY package.json . 
# Install dependencies
RUN npm install
# Copy the rest of the content
COPY . .
# Build the app
RUN npm run build

# ==== CONFIGURE NGINX =====
# Use a Nginx 1.22.1
FROM nginx:1.22.1

# Set the working directory
WORKDIR /usr/share/nginx/html
# Remove default Nginx static resources
RUN rm -rf ./*
COPY --from=builder /app/build .

# run the application
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
