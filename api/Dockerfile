FROM python:3.8


# set work directory
WORKDIR /usr/src

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./service/requirements.txt ./requirements.txt

RUN pip install --upgrade pip wheel setuptools 

RUN pip install -r ./requirements.txt

COPY ./ ./

RUN pwd

CMD uvicorn service.main:app --reload --workers 1 --host 0.0.0.0 --port 8000