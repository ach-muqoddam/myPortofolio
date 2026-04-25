# Stage 1: Build aplikasi React
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve dengan Nginx (Sangat ringan)
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 internal container
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
