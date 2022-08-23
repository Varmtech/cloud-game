package main

import (
	"context"
	goflag "flag"
	"fmt"
	"github.com/giongto35/cloud-game/v2/pkg/api/service/usersvc"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"math/rand"
	"time"

	config "github.com/giongto35/cloud-game/v2/pkg/config/coordinator"
	"github.com/giongto35/cloud-game/v2/pkg/coordinator"
	"github.com/giongto35/cloud-game/v2/pkg/os"
	"github.com/giongto35/cloud-game/v2/pkg/util/logging"
	"github.com/golang/glog"
	flag "github.com/spf13/pflag"
)

var Version = ""

func init() {
	rand.Seed(time.Now().UTC().UnixNano())
}

func main() {
	conf := config.NewConfig()
	flag.CommandLine.AddGoFlagSet(goflag.CommandLine)
	conf.ParseFlags()

	logging.Init()
	defer logging.Flush()

	dsn := fmt.Sprintf(
		"user=%s password=%s host=%s port=%d dbname=%s",
		"postgres",
		"mongooseimpw",
		"192.168.178.62",
		5432,
		"1up",
	)

	db, err := gorm.Open(postgres.Open(dsn))

	if err != nil {
		glog.Errorf("Failed to open db connection, %v", err)
		return
	}

	db.AutoMigrate(&usersvc.User{}, &usersvc.Game{})

	glog.Infof("[coordinator] version: %v", Version)
	glog.V(4).Infof("Coordinator configs %v", conf)
	c := coordinator.New(conf, db)
	c.Start()

	ctx, cancelCtx := context.WithCancel(context.Background())
	defer c.Shutdown(ctx)
	<-os.ExpectTermination()
	cancelCtx()
}
