package external

import (
	"errors"
	"math/rand"
)

const (
	lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
	uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	digits           = "0123456789"
	symbols          = "!@#$%^&*()-_=+[]{}|;:'\"<>,.?/~"
)

const (
	VeryLow = iota
	Low
	Moderate
	High
	VeryHigh
)

type Password struct {
	UseLowercaseLetters bool
	UseUppercaseLetter  bool
	UseDigits           bool
	UseSymbols          bool
}

// Generate generates a random password of the specified length.
//
// The Generate function creates a random password with the desired length.
// It takes into account the character sets specified in the Password structure
// to determine which types of characters should be included in the generated password.
//
// Parameters:
//   - length: The desired length of the password to be generated. It must be greater than zero.
//
// Returns:
//   - A string containing the generated password, or
//   - An error if there's an issue during the generation process.
//
// Example Usage:
//
//	password, err := somePasswordStruct.Generate(12)
//
// Note:
// The Generate function requires at least one character set to be enabled in the Password structure.
func (r *Password) Generate(length int) (string, error) {
	var sourceChars string
	var resultPassword string

	if length <= 0 {
		return "", errors.New("password length must be greater than zero")
	}

	if !r.UseLowercaseLetters && !r.UseUppercaseLetter && !r.UseDigits && !r.UseSymbols {
		return "", errors.New("password must have at least one modifier")
	}

	if r.UseLowercaseLetters {
		sourceChars += lowercaseLetters
	}

	if r.UseUppercaseLetter {
		sourceChars += uppercaseLetters
	}

	if r.UseDigits {
		sourceChars += digits
	}

	if r.UseSymbols {
		sourceChars += symbols
	}

	for i := 0; i < length; i++ {
		nRand := rand.Int31n(int32(len(sourceChars)))
		resultPassword += string(sourceChars[nRand])
	}

	return resultPassword, nil
}

func (r Password) Check(password string) {

}

func (r Password) Suggest(password string) {

}
