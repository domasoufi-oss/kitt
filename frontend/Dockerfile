FROM i386/debian:bookworm-slim

# Install Node.js and npm
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install global tools
RUN npm install -g typescript ts-node

WORKDIR /app

# Copy package files first to make builds faster
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# IMPORTANT: Call the script from package.json instead of ts-node directly
CMD ["npm", "start"]