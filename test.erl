-module(ttt).
-export([aaa/2, bbb/0]).

aaa(S, A) ->
    io:format("~p~p~n", [S, A]),
    B = A + 1,
    aaa(S, B).

bbb() ->
    spawn(fun() ->
        aaa("aaaaa", 1)
        end),
    spawn(fun() ->
        aaa("bbbbb", 1)
        end),
    spawn(fun() ->
        aaa("ccccc", 1)
        end).
