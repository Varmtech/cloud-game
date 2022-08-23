package usersvc

type UserDto struct {
	Uid     string
	Name    string `json:"displayName"`
	Email   string `json:"email"`
	Profile string `json:"photoUrl"`
}
