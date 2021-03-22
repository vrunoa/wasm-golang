package main

import (
	"syscall/js"
)

var c chan bool

func init() {
	c = make(chan bool)
}

func printMessage(this js.Value, inputs []js.Value) interface{} {
	var i interface{}
	callback := inputs[len(inputs)-1:][0]
	message := inputs[0].String()
	callback.Invoke(js.Null(), "Who u gonna call? " + message + "!!!")
	c <- true
	return i
}

func main() {
	js.Global().Set("printMessage", js.FuncOf(printMessage))
	<-c
}

