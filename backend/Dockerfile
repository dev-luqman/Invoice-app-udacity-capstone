FROM node:17

# CREATE DIR
RUN mkdir -p /usr/src/app

# CREATING WORKING 
WORKDIR /usr/src/app

# COPY TO DIR
COPY package*.json /usr/src/app/

# INSTALL ALL PACKAGES
RUN npm install

# COPY ALL FILE
COPY . /usr/src/app/

# EXPOSE POST
EXPOSE 8080

# RUN
CMD ["npm", "start"]