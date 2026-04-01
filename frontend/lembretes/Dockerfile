# ─── Stage 1: Build Angular ───────────────────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --prefer-offline

COPY . .
RUN npm run build -- --configuration production

# ─── Stage 2: Nginx para servir o SPA ────────────────────────────────────────
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

# Remove config padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia config personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o build do Angular (ajuste o nome do projeto se necessário)
COPY --from=build /app/dist/lembretes/browser/ .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
