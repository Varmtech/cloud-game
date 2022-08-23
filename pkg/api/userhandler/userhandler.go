package userhandler

import (
	"context"
	"encoding/json"
	firebase "firebase.google.com/go/v4"
	"fmt"
	"github.com/giongto35/cloud-game/v3/pkg/api/service/usersvc"
	"google.golang.org/api/option"
	"net/http"
	"strings"
)

type UserHandler struct {
	userService *usersvc.UserService
}

func New(userService *usersvc.UserService) *UserHandler {
	return &UserHandler{userService: userService}
}

func (h *UserHandler) Request(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodOptions:
		cors(w)
	case http.MethodPost:
		cors(w)
		h.create(w, r)
	}

}

func (h *UserHandler) GameRequest(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodOptions:
		cors(w)
	case http.MethodGet:
		cors(w)
		h.listGames(w, r)
	}

}

func (h *UserHandler) Get(w http.ResponseWriter, r *http.Request) {
	userId, err := checkToken(strings.Split(r.Header.Get("Authorization"), "Bearer ")[1])

	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	h.userService.GetUser(*userId)
}

func (h *UserHandler) Update(w http.ResponseWriter, r *http.Request) {

}

func (h *UserHandler) Delete(w http.ResponseWriter, r *http.Request) {

}

func checkToken(token string) (*string, error) {
	opt := option.WithCredentialsFile("/Users/aramm/Documents/Projects/1UP/upgames-19cbf-firebase-adminsdk-q10xz-e057e4543a.json")
	ctx := context.Background()
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		return nil, fmt.Errorf("error initializing app: %v", err)
	}
	client, err := app.Auth(ctx)
	if err != nil {
		return nil, fmt.Errorf("error initializing Auth Client: %v", err)
	}

	t, err := client.VerifyIDToken(ctx, token)

	if err != nil {
		return nil, fmt.Errorf("error verifing token: %v", err)
	}

	userId := t.Subject

	return &userId, nil
}

func (h *UserHandler) create(w http.ResponseWriter, r *http.Request) {

	userId, err := checkToken(strings.Split(r.Header.Get("Authorization"), "Bearer ")[1])

	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	var usr usersvc.UserDto
	json.NewDecoder(r.Body).Decode(&usr)

	usr.Uid = *userId
	_, err = h.userService.CreateUser(&usr)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.WriteHeader(http.StatusOK)
}

func (h *UserHandler) listGames(w http.ResponseWriter, r *http.Request) {

	_, err := checkToken(strings.Split(r.Header.Get("Authorization"), "Bearer ")[1])

	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	games, err := h.userService.ListGames()
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	gamesDto := make([]usersvc.GameDto, len(games))

	for i, game := range games {
		gamesDto[i] = usersvc.GameDto{
			Name:      game.Name,
			Wallpaper: game.Wallpaper,
		}
	}

	json, _ := json.Marshal(gamesDto)
	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func cors(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.WriteHeader(http.StatusNoContent)
}
