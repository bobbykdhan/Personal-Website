FROM docker.io/debian:bullseye AS builder

RUN apt-get update -y && \
    apt-get install -y texlive texlive-formats-extra make git texlive-fonts-extra texlive-bibtex-extra

WORKDIR /build/

COPY . /build/

RUN pdflatex --interaction=nonstopmode main.tex; exit 0


FROM python:3.10-buster AS flask

EXPOSE 8080
WORKDIR /app

RUN pip install uvicorn==0.20.0 Flask==2.2.2 Werkzeug==2.2.2

COPY app.py .

COPY --from=builder /build/main.pdf Bobby_Dhanoolal_Resume.pdf

ENTRYPOINT ["python3", "app.py"]
