FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install additional dependencies
RUN apk add --no-cache libc6-compat

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies with exact versions
RUN npm install autoprefixer@10.4.14 postcss@8.4.27 tailwindcss@3.3.3
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy dependencies first
COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./

# Copy source code and config files
COPY . .

# Set build-time variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV NODE_ENV=production

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Set runtime environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# Copy only necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./

EXPOSE 8080

CMD ["node", "server.js", "--port", "8080"]
