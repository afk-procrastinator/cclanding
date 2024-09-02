# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Clone the repository
RUN apk add --no-cache git
RUN git clone https://github.com/afk-procrastinator/cclanding.git .

# Install dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]