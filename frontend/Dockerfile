FROM i386/debian:bookworm-slim

# Install Node.js directly from Debian's own 32-bit repositories
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install your global tools
RUN npm install -g typescript ts-node

WORKDIR /app
COPY . .

CMD ["ts-node", "index.ts"]