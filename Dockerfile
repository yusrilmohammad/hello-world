FROM node:16.15.1-alpine3.16 AS BASEIMAGE

WORKDIR /app
COPY package*.json ./
COPY . .
RUN if [[ ! -d ./node_modules ]]; then npm ci; fi;
RUN npm run build
RUN npm ci --omit=dev

FROM node:16.15.1-alpine3.16

WORKDIR /app
COPY --from=BASEIMAGE /app/.env /app/.env
COPY --from=BASEIMAGE /app/dist /app/dist
COPY --from=BASEIMAGE /app/node_modules /app/node_modules

#Set Timezone
RUN apk add --no-cache tzdata
ENV TZ=Asia/Jakarta

EXPOSE 3000

RUN npm install nodemon --location=global
CMD ["node", "dist/main.js"]
