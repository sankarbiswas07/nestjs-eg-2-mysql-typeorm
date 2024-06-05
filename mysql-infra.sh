#!/bin/bash

# Ensure Docker is running
docker-compose up -d

# Wait for the MySQL container to be fully up and running
echo "Waiting for MySQL to start..."
sleep 20  # Adjust the sleep duration as necessary

# Grant necessary permissions to MySQL user
echo "Setting up MySQL permissions..."
docker exec -i mysql-container mysql -u user -ppassword <<EOF
CREATE DATABASE IF NOT EXISTS mysql_nestjs;
GRANT ALL PRIVILEGES ON mysql_nestjs.* TO 'user'@'%' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;
EOF

# Start the NestJS application in development mode
echo "Starting NestJS application..."
npm run start:dev