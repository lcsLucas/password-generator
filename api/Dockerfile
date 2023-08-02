FROM golang:1.20.7-alpine

ARG user=lucas
ARG uid=1000

RUN apk add --no-cache \
    bash

RUN adduser -D -u 1000 -s /bin/bash ${user} && \
    chown -R ${user} . && \
    find . -type f | xargs -I{} chmod -v 644 {} && \
    find . -type d | xargs -I{} chmod -v 755 {};

USER ${user}

ENV HOME /home/${user}