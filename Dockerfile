FROM docker.io/debian:bullseye AS builder

RUN apt-get update -y && \
    apt-get install -y texlive texlive-formats-extra make git texlive-fonts-extra texlive-bibtex-extra wget

# Install altacv package
WORKDIR /usr/local/share/texmf/tex/latex/
RUN wget https://github.com/liantze/AltaCV/archive/refs/heads/main.zip && \
    unzip main.zip && \
    mv AltaCV-main/altacv . && \
    rm -rf AltaCV-main main.zip && \
    mktexlsr

WORKDIR /build/

COPY . /build/

RUN pdflatex --interaction=nonstopmode src/assets/resume/fancyresume.tex; exit 0
RUN pdflatex --interaction=nonstopmode src/assets/resume/atsresume.tex; exit 0

FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Copy compiled PDFs
COPY --from=builder /build/src/assets/resume/fancyresume.pdf ./public/fancyresume.pdf
COPY --from=builder /build/src/assets/resume/atsresume.pdf ./public/atsresume.pdf

# Build Next.js application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
