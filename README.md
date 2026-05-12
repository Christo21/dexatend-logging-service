# DEXA-TEND Logging Service 🛠️

Microservice khusus yang berfungsi sebagai **Consumer** untuk memproses dan menyimpan log aktivitas aplikasi secara asinkron.

### 🛠️ Tech Stack
- **Framework:** NestJS Microservices
- **Transport:** RabbitMQ (AMQP)
- **Database:** MySQL (Dedicated Log Database)
- **ORM:** TypeORM

### ⚙️ Konsep Kerja
1. Menerima pesan dari queue `logging_queue` di RabbitMQ.
2. Memproses data log (Activity Logs, Update Profil, dsb).
3. Menyimpan data ke database log terpisah (`db_logs`) untuk menjaga integritas data utama.

### ⚙️ Setup Environment
Buat file `.env` di root folder:
```text
RABBITMQ_URL=amqp://localhost:5672
DB_LOG_HOST=localhost
DB_LOG_PORT=3307
DB_LOG_USERNAME=your_user
DB_LOG_PASSWORD=your_password
DB_LOG_DATABASE=db_logs
```

### 🚀 Cara Menjalankan
- npm install
- npm run start:dev
