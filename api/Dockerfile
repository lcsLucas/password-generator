FROM golang:1.20.7-alpine

ARG user=lucas
ARG uid=1000

RUN apk add --no-cache \
    bash

RUN adduser -D -u 1000 -s /bin/bash ${user} && \
    chown -R ${user} . && \
    find . -type f | xargs -I{} chmod -v 644 {} && \
    find . -type d | xargs -I{} chmod -v 755 {};

# RUN go install -v github.com/cweill/gotests/gotests@v1.6.0
# RUN go install -v github.com/fatih/gomodifytags@v1.16.0
# RUN go install -v github.com/josharian/impl@v1.1.0
# RUN go install -v github.com/haya14busa/goplay/cmd/goplay@v1.0.0
# RUN go install -v github.com/go-delve/delve/cmd/dlv@latest
# RUN go install -v honnef.co/go/tools/cmd/staticcheck@latest
# RUN go install -v golang.org/x/tools/gopls@latest

USER ${user}

ENV HOME /home/${user}