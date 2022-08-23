package usersvc

import "gorm.io/gorm"

type Game struct {
	gorm.Model
	Name      string
	Wallpaper string
	Rom       []byte
}
