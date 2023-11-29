FROM docker.io/debian:bullseye AS builder

RUN apt-get update -y && \
    apt-get install -y texlive texlive-formats-extra make git texlive-fonts-extra texlive-bibtex-extra

WORKDIR /build/

COPY . /build/

RUN pdflatex --interaction=nonstopmode main.tex; exit 0


FROM python:3.10-buster AS flask

WORKDIR /app
ADD ./requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY app.py .

COPY --from=builder /build/main.pdf Bobby_Dhanoolal_Resume.pdf

ENTRYPOINT [ "flask", "run", "--host=0.0.0.0", "--port=8080"]