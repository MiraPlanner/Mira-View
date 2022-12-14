FROM node:17-alpine 
ARG REACT_APP_API_URL="http://localhost:80"
ENV REACT_APP_API_URL $REACT_APP_API_URL

WORKDIR /app

# Copy any files that start with "package" and have a ".json" extension
COPY  package*.json ./

# Install the node dependencies
RUN npm ci 

# Copy the rest of the files from the frontend to the app folder
COPY . .

# Build the app
RUN npm run build
EXPOSE 3000

# Start the app
CMD ["npm", "start"]