package main

import (
	"fmt"
	"github.com/giongto35/cloud-game/v3/pkg/api/service/usersvc"
	"github.com/giongto35/cloud-game/v3/pkg/config"
	"github.com/giongto35/cloud-game/v3/pkg/coordinator"
	"github.com/giongto35/cloud-game/v3/pkg/logger"
	"github.com/giongto35/cloud-game/v3/pkg/os"
	"github.com/golang/glog"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Version = "?"

func main() {
	conf, paths := config.NewCoordinatorConfig()
	conf.ParseFlags()

	log := logger.NewConsole(conf.Coordinator.Debug, "c", false)
	log.Info().Msgf("version %s", Version)
	log.Info().Msgf("conf: v%v, loaded: %v", conf.Version, paths)
	if log.GetLevel() < logger.InfoLevel {
		log.Debug().Msgf("conf: %+v", conf)
	}

	dsn := fmt.Sprintf(
		"user=%s password=%s host=%s port=%d dbname=%s",
		"postgres",
		"12345678",
		"oneupgames.cwf8o6pirzc5.us-east-1.rds.amazonaws.com",
		5432,
		"postgres",
	)

	db, err := gorm.Open(postgres.Open(dsn))

	if err != nil {
		glog.Errorf("Failed to open db connection, %v", err)
		return
	}

	db.AutoMigrate(&usersvc.User{}, &usersvc.Game{})

	c, err := coordinator.New(conf, log, db)
	if err != nil {
		log.Error().Err(err).Msgf("init fail")
		return
	}
	c.Start()
	<-os.ExpectTermination()
	if err := c.Stop(); err != nil {
		log.Error().Err(err).Msg("shutdown fail")
	}
}
