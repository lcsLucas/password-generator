package main

import (
	"flag"
	"fmt"
	"log"

	fiber "github.com/gofiber/fiber/v2"
	"github.com/lcslucas/password-generator/src/external"
)

func main() {

	portArg := flag.Int("port", 3000, "Define application port")

	flag.Parse()

	app := fiber.New()

	app.Get("/api", func(c *fiber.Ctx) error {
		return c.SendString("Everything OK ✋")
	})

	app.Get("/api/generate", func(c *fiber.Ctx) error {

		password := external.Password{}

		qLength := c.QueryInt("length", 0)

		password.UseLowercaseLetters = c.QueryBool("lowercaseLetters", true)
		password.UseUppercaseLetter = c.QueryBool("uppercaseLetter", true)
		password.UseDigits = c.QueryBool("digits", true)
		password.UseSymbols = c.QueryBool("symbols", true)

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

	log.Fatal(app.Listen(fmt.Sprintf(":%d", *portArg)))
}
