FROM python:3.12-slim-bookworm

WORKDIR /app
COPY . .

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8001"]