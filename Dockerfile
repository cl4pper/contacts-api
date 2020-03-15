FROM node:10.15.3

WORKDIR /usr/api

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
RUN npm install bcrypt@4.0.0

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]