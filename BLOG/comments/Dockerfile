# KASUTA BAASPILTI: Valime Node.js ametliku Alpine versiooni, mis on väike ja kiire.
FROM node:alpine

# MÄÄRA TÖÖKATALOOG: See on koht konteineris, kus meie kood asub.
WORKDIR /app

# Kopeeri package.json ja package-lock.json (kui olemas)
# Eraldi kopeerimine kasutab ära Dockeri vahemälu,
# et ei peaks iga koodimuutuse järel sõltuvusi uuesti installeerima.
COPY package*.json ./

# PAIGALDA SÕLTUVUSED: npm install loeb package.json faili.
RUN npm install

# KOPEERI ÜLEJÄÄNUD KOOD: Kopeeri kogu projekti sisu (v.a .dockerignore'is loetletud).
COPY . .

# EXPOSE PORT: Annab teada, mis pordil konteiner sees kuulata kavatseb.
# NB! See on ainult dokumenteerimine, tegelik portide sidumine toimub 'docker run' käsus.
EXPOSE 4001 

# KÄIVITUSKÄSK: See käsk käivitatakse konteineri käivitamisel.
# Eeldab, et package.json failis on "start" skript (nt "nodemon index.js").
CMD ["npm", "start"]