# Install backend
cd ./backend
composer install
npm install
cp .env.example .env
php artisan key:generate

# Install frontend
cd ../frontend
npm install