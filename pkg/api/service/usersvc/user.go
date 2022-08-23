package usersvc

import "gorm.io/gorm"

type User struct {
	gorm.Model
	UID     string `gorm:"uniqueIndex"`
	Email   string
	Name    string
	Profile string
}
