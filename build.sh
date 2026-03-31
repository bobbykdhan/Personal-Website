#!/bin/bash
set -e

# Install tectonic (self-contained LaTeX engine, no root required)
curl -fsSL https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%400.15.0/tectonic-0.15.0-x86_64-unknown-linux-musl.tar.gz \
  | tar xzf - -C /tmp
chmod +x /tmp/tectonic

# Compile PDFs (tectonic auto-downloads required packages)
cd resume_files
/tmp/tectonic resume-fancy.tex
/tmp/tectonic resume.tex

# Copy compiled PDFs to public/
cp resume-fancy.pdf ../public/bobby_dhanoolal_resume_fancy.pdf
cp resume.pdf ../public/bobby_dhanoolal_resume.pdf

cd ..

# Build Next.js static export
npm run build
