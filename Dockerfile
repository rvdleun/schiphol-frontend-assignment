FROM node:18 as builder
WORKDIR /app

ENV NEXT_PUBLIC_HAS_STORYBOOK=true

COPY . ./
RUN npx husky install
RUN npm ci
RUN npm run build
RUN npm run build-storybook

FROM nginx:alpine AS runner
WORKDIR /app

COPY --from=builder /app/out /usr/share/nginx/html
COPY --from=builder /app/storybook-static /usr/share/nginx/html/storybook
