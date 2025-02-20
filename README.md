## Instalasi

- Setelah clone repository ini, ubah `env.example` ke `.env` lalu ubah pada bagian `DB_DATABASE`, `DB_USERNAME`, dan `DB_PASSWORD`

- Jalankan perintah command

```bash
composer install
```

- Setelah selesai, jalankan perintah selanjutnya yaitu

```bash
npm install
```

- Lalu migrasi database dan seeder

```bash
php artisan migrate --seed
```
- Jalankan `php artisan serve` dan juga `npm run dev` pada local
