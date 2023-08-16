FROM alpine:3.16.3 AS alpine-npm

WORKDIR /var/www/

# Arguments
ARG user=lucas
ARG uid=1000

RUN apk --update-cache add \
    bash \
    npm \
    nodejs; \
    set -x && \
    # adduser -D -u 1000 -s /bin/bash ${user} && \
    # chown -R ${user}:${uid} . && \
    # mkdir -p /var/www/html && chown ${user}:${uid} /var/www/html && \
    find . -type f | xargs -I{} chmod -v 644 {} && \
    find . -type d | xargs -I{} chmod -v 755 {};

FROM alpine-npm

WORKDIR /var/www/

#USER ${user}

# RUN npm install

# ENTRYPOINT [ "npm", "run", "dev", "--host" ]

STOPSIGNAL SIGQUIT