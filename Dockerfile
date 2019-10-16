##
# NAME             : iadvize/snowflake
# VERSION          : latest
# DOCKER-VERSION   : 1.5
# DESCRIPTION      :
# TO_BUILD         : docker build --pull=true --no-cache -t iadvize/snowflake .
# TO_SHIP          : docker push iadvize/snowflake
# TO_RUN           : docker run -d iadvize/snowflake
##

FROM iadvize/nodejs:8.6.0

RUN mkdir /app

COPY package.* /app

WORKDIR /app

RUN yarn install --ignore-engines --no-progress

COPY . /app

ARG PORT

EXPOSE $PORT

CMD ["yarn", "start"]