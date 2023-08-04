package main

import (
	"log"

	fiber "github.com/gofiber/fiber/v2"
	"github.com/lcslucas/password-generator/src/external"
)

func main() {

	app := fiber.New()

	app.Get("/api", func(c *fiber.Ctx) error {
		return c.SendString("Everything is OK ✋")
	})

	app.Get("/api/generate", func(c *fiber.Ctx) error {

		password := external.Password{}

		qLength := c.QueryInt("length", 0)

		password.UseLowercaseLetters = c.QueryBool("lowercaseLetters")
		password.UseUppercaseLetter = c.QueryBool("uppercaseLetter")
		password.UseDigits = c.QueryBool("digits")
		password.UseSymbols = c.QueryBool("symbols")

		pass, err := password.Generate(qLength)

		if err != nil {
			c.JSON(external.ResponseError{
				Error: err.Error(),
			})

			return c.SendStatus(fiber.StatusUnprocessableEntity)
		}

		return c.JSON(external.ResponseData{
			Data: pass,
		})
	})

	log.Fatal(app.Listen(":3000"))
}
