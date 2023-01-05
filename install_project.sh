# Install backend
cd ./backend
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan db:seed

# Install frontend
cd ../frontend
npm install