FROM python:3.11-slim

WORKDIR /code

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# 1) PyTorch (CPU) installed from a wheel downloaded in the browser
COPY wheels/ /wheels/
RUN pip install --no-cache-dir --default-timeout=1000 --retries 10 /wheels/torch-*.whl

# 2) Other libraries
COPY requirements.txt .
RUN pip install --no-cache-dir --default-timeout=1000 --retries 10 -r requirements.txt

# 3) Your code goes last because it changes the most
COPY app ./app

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
