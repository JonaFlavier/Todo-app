#!/bin/bash

# Wait for PostgreSQL to be available
until nc -z -v -w30 db 5432
do
  echo "Waiting for PostgreSQL..."
  sleep 5
done

# Once PostgreSQL is ready, run FastAPI
echo "PostgreSQL is up - starting FastAPI..."
# Now run your FastAPI app
exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload