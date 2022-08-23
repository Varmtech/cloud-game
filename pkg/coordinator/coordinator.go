package coordinator

import (
	"github.com/giongto35/cloud-game/v2/pkg/api/service/usersvc"
	"github.com/giongto35/cloud-game/v2/pkg/api/userhandler"
	"gorm.io/gorm"
	"log"
	"net/http"

	"github.com/giongto35/cloud-game/v2/pkg/config/coordinator"
	"github.com/giongto35/cloud-game/v2/pkg/games"
	"github.com/giongto35/cloud-game/v2/pkg/monitoring"
	"github.com/giongto35/cloud-game/v2/pkg/service"
)

func New(conf coordinator.Config, db *gorm.DB) (services service.Group) {
	srv := NewServer(conf, games.NewLibWhitelisted(conf.Coordinator.Library, conf.Emulator))
	usrSvc := usersvc.New(db)
	usrHandler := userhandler.New(usrSvc)
	httpSrv, err := NewHTTPServer(conf, func(mux *http.ServeMux) {
		mux.HandleFunc("/ws", srv.WS)
		mux.HandleFunc("/wso", srv.WSO)
		mux.HandleFunc("/api/users", usrHandler.Request)
		mux.HandleFunc("/api/users/games", usrHandler.GameRequest)
	})
	if err != nil {
		log.Fatalf("http init fail: %v", err)
	}
	services.Add(srv, httpSrv, usrHandler)
	if conf.Coordinator.Monitoring.IsEnabled() {
		services.Add(monitoring.New(conf.Coordinator.Monitoring, httpSrv.GetHost(), "cord"))
	}
	return
}
