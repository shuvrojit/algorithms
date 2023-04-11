package main

import (
	"reflect"
	"testing"
)

var result int = binaySearch([]int{1, 2, 3, 4, 5, 6}, 3)

func TestReturnResultType(t *testing.T) {
	got := result
	want := 2

	if reflect.TypeOf(got) != reflect.TypeOf(want) {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestReturnResult(t *testing.T) {
	got := result
	want := 2

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestResultNotFound(t *testing.T) {
	got := binaySearch([]int{1, 2, 3, 4, 5}, 9)
	want := -1

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}

}
