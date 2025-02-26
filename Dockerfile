# Stage 1: Build the React frontend
FROM node:20 as build
WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Stage 2: Set up the Flask backend
FROM python:3.8-slim
WORKDIR /app
COPY server/requirements.txt requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt
COPY server/ .
COPY --from=build /app/build ./static

EXPOSE 5000
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000"]
