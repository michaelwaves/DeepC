FROM python:3.8

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

CMD ["uvicorn","server:app","--host","0.0.0.0","--port","8000"]