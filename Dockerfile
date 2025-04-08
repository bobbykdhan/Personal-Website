# --------------------
# Build Stage
# --------------------
FROM node:20-bullseye-slim AS builder

# Install LaTeX and other dependencies
RUN apt-get update -y && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    texlive \
    texlive-formats-extra \
    texlive-fonts-extra \
    texlive-bibtex-extra \
    make \
    git \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Compile PDFs first
RUN pdflatex -interaction=nonstopmode ./resume-fancy.tex; exit 0
RUN pdflatex -interaction=nonstopmode ./resume.tex; exit 0

# Build the Next.js app
RUN npm run build

# --------------------
# Production Stage
# --------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Copy necessary files from the builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Copy PDFs from builder root to public directory
COPY --from=builder /app/resume.pdf ./public/bobby_dhanoolal_resume.pdf
COPY --from=builder /app/resume-fancy.pdf ./public/bobby_dhanoolal_resume_fancy.pdf

# Environment config
ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["node", "server.js"]