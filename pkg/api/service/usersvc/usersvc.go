package usersvc

import (
	"errors"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type UserService struct {
	db *gorm.DB
}

func New(db *gorm.DB) *UserService {
	return &UserService{db: db}
}

func (s *UserService) CreateUser(userDto *UserDto) (*User, error) {
	user := User{
		UID:     userDto.Uid,
		Email:   userDto.Email,
		Name:    userDto.Name,
		Profile: userDto.Profile,
	}
	result := s.db.Clauses(clause.OnConflict{
		Columns:   []clause.Column{{Name: "uid"}},
		DoUpdates: clause.AssignmentColumns([]string{"name", "profile"}),
	}).Create(&user)

	if result.Error != nil {
		return nil, errors.New("failed to create user")
	}

	return &user, nil
}

func (s *UserService) GetUser(userId string) (*User, error) {
	var user User

	result := s.db.Where("uid = ?", userId).Find(&user)

	if result.Error != nil {
		return nil, errors.New("failed to get user")
	}

	return &user, nil
}

func (s *UserService) ListGames() ([]*Game, error) {
	var games []*Game

	result := s.db.Find(&games)

	if result.Error != nil {
		return nil, errors.New("failed to get user")
	}

	return games, nil
}
