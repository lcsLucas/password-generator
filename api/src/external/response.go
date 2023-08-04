package external

type ResponseError struct {
	Error string `json:"error"`
}

type ResponseData struct {
	Data interface{} `json:"data"`
}
