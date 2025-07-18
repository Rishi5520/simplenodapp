FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .


FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app .
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
CMD ["node", "index.js"]
