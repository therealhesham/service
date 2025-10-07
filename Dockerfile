# استخدم نسخة Node الرسمية
FROM node:20-alpine

# أنشئ مجلد للتطبيق
WORKDIR /app

# انسخ ملفات المشروع
COPY package*.json ./
COPY app.js ./

# ثبت الـ dependencies
RUN npm install --production

# حدد البورت اللي هيتعرض للخارج
EXPOSE 3000

# أمر التشغيل
CMD ["node", "app.js"]
