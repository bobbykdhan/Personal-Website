#!/bin/bash
set -e

# Install LaTeX
apt-get update -y
apt-get install -y --no-install-recommends \
  texlive \
  texlive-formats-extra \
  texlive-fonts-extra \
  texlive-bibtex-extra \
  make

# Compile PDFs
cd resume_files
pdflatex -interaction=nonstopmode resume-fancy.tex
pdflatex -interaction=nonstopmode resume.tex

# Copy compiled PDFs to public/
cp resume.pdf ../public/bobby_dhanoolal_resume.pdf
cp resume-fancy.pdf ../public/bobby_dhanoolal_resume_fancy.pdf

cd ..

# Build Next.js static export
npm run build
