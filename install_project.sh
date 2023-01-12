# Install backend
cd ./backend
composer install
npm install
cp .env.example .env

# Install frontend
cd ../frontend
npm install

# Generate key, migrate and seed db
cd ../backend
./vendor/bin/sail up -d
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan jwt:secret
./vendor/bin/sail artisan migrate
./vendor/bin/sail artisan db:seed
./vendor/bin/sail stop