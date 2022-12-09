# Install backend
cd ./backend
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret

# Install frontend
cd ../frontend
npm install