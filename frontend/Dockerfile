# Use the official 32-bit Debian image (the same base as your Python)
FROM i386/debian:bookworm-slim

# Install Node.js and Tools
RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g typescript ts-node \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

CMD ["ts-node", "index.ts"]