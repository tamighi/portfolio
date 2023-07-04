# portfolio

## Description

Simple react frontend website

## How to run

Ensure first that docker is installed.

### Development (port 3000)

```sh
docker compose -f docker-compose.dev.yml up
```

### Production

Create self signed Key and certificate for https

```sh
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./deploy/ssl/self-signed.key -out ./deploy/ssl/self-signed.crt
```

Deploy production server

```sh
docker compose -f docker-compose.prod.yml up
```
