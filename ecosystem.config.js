module.exports = {
  apps : [{
    name: "VIDKAR BOT TELEGRAM",
    script: "node index.js",
    env: {
      NODE_ENV: "development",
      "ROOT_URL": "https://srv5119-206152.vps.etecsa.cu:5000/",
      "PORT": 80,
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
