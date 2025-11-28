# /backend/README-deploy.txt
1. Create a Render (or Railway) account.
2. Create a new Web Service from your GitHub repo and point to /backend.
   - Build command: pip install -r requirements.txt
   - Start command: gunicorn haulcell.wsgi --bind 0.0.0.0:$PORT
3. Set environment variables (optional): DJANGO_SECRET_KEY, DEBUG=0 for prod.
4. Deploy. The service URL will be like: https://your-backend.onrender.com
5. Copy that URL into Vercel env var NEXT_PUBLIC_API_URL.