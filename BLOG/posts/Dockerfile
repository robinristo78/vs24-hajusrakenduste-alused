# Valime baasiks Node.js ametliku Alpine versiooni (väike ja kiire)
FROM node:alpine

# Määrame töökataloogi konteineri sees
WORKDIR /app

# Kopeerime esmalt ainult package.json faili (vahemälu optimeerimiseks)
COPY package.json ./

# Paigaldame sõltuvused
RUN npm install

# Kopeerime ülejäänud rakenduse failid
COPY . .

EXPOSE 4000 

# Määrame käsu, mis käivitab rakenduse
CMD ["npm", "start"]