package usersvc

type UserDto struct {
	Uid     string
	Name    string `json:"display_name"`
	Email   string `json:"email"`
	Profile string `json:"profile_url"`
}
