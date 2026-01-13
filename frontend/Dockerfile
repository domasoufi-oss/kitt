# This specific path points to the 32-bit Debian-based image
FROM i386/node:18-slim

WORKDIR /app
COPY . .
RUN npm install -g typescript ts-node
CMD ["ts-node", "index.ts"]