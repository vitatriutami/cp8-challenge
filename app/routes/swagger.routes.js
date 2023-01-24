const swaggerUI = require("swagger-ui-express")

module.exports = (app) => {
    const router = require("express").Router()

    const options = {
        swaggerOptions: {
            url: "/api-docs"
        }
    }

    router.use("/docs", swaggerUI.serve, swaggerUI.setup(null, options))
    router.get("/api-docs", (req, res) => {
        res.sendFile("swagger.yml", {root:"."})
    })

    app.use(router)
}