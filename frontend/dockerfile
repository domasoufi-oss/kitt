# Use a 32-bit Node image
FROM node:20-bookworm-slim
WORKDIR /app
COPY . .
RUN npm install -g typescript ts-node
CMD ["ts-node", "index.ts"]