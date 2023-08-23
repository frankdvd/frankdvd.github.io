FROM python:3.9

WORKDIR /opt/site

COPY site /opt/site

CMD ["python", "-m",  "http.server", "--directory", "/opt/site", "--bind", "0.0.0.0", "80"]