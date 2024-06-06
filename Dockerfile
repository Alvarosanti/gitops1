FROM node:18.17

WORKDIR /

COPY .  .

RUN npm install -g npm@8.19.4
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

CMD ["pnpm","run","dev"]